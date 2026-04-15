function parseColorValue(value) {
  if (!value || value === "transparent") {
    return null;
  }

  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) {
    return null;
  }

  const parts = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
  return {
    r: parts[0] ?? 0,
    g: parts[1] ?? 0,
    b: parts[2] ?? 0,
    a: parts[3] ?? 1,
  };
}

function getLuminance(color) {
  if (!color) return 0;
  return color.r * 0.2126 + color.g * 0.7152 + color.b * 0.0722;
}

function isLightSurfaceAtPoint(x, y, ignoredElement) {
  const elements = document.elementsFromPoint(x, y);

  for (const element of elements) {
    if (!(element instanceof Element)) {
      continue;
    }

    if (element === ignoredElement || ignoredElement?.contains(element)) {
      continue;
    }

    const styles = getComputedStyle(element);
    const background = parseColorValue(styles.backgroundColor);
    if (background && background.a > 0.14) {
      return getLuminance(background) > 170;
    }

    const foreground = parseColorValue(styles.color);
    if (foreground && foreground.a > 0.4 && element.textContent.trim()) {
      return getLuminance(foreground) > 210;
    }
  }

  return false;
}

function setupCustomCursor() {
  const cursorLayer = document.getElementById("cursorLayer");
  const cursorRing = document.getElementById("cursorRing");
  const cursorDot = document.getElementById("cursorDot");
  const finePointer = window.matchMedia("(pointer: fine)");

  if (!cursorLayer || !cursorRing || !cursorDot || !finePointer.matches) {
    return;
  }

  document.body.classList.add("has-custom-cursor");

  const cursorState = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
    ringX: window.innerWidth / 2,
    ringY: window.innerHeight / 2,
    visible: false,
  };

  const interactiveSelector = "a, button, .blog-card";

  function drawCursor() {
    cursorState.ringX += (cursorState.x - cursorState.ringX) * 0.18;
    cursorState.ringY += (cursorState.y - cursorState.ringY) * 0.18;

    cursorRing.style.transform = `translate(${cursorState.ringX}px, ${cursorState.ringY}px) translate(-50%, -50%)`;
    cursorDot.style.transform = `translate(${cursorState.x}px, ${cursorState.y}px) translate(-50%, -50%)`;

    requestAnimationFrame(drawCursor);
  }

  document.addEventListener("pointermove", (event) => {
    cursorState.x = event.clientX;
    cursorState.y = event.clientY;

    if (!cursorState.visible) {
      cursorState.visible = true;
      cursorLayer.classList.add("is-visible");
    }

    const target = event.target instanceof Element ? event.target.closest(interactiveSelector) : null;
    const onLightSurface = isLightSurfaceAtPoint(event.clientX, event.clientY, cursorLayer);

    cursorLayer.classList.toggle("is-hovering", Boolean(target));
    cursorLayer.classList.toggle("is-on-light", onLightSurface);
  });

  document.addEventListener("pointerdown", () => {
    cursorLayer.classList.add("is-pressed");
  });

  document.addEventListener("pointerup", () => {
    cursorLayer.classList.remove("is-pressed");
  });

  document.addEventListener("pointerleave", () => {
    cursorLayer.classList.remove("is-visible", "is-hovering", "is-pressed", "is-on-light");
    cursorState.visible = false;
  });

  drawCursor();
}

setupCustomCursor();