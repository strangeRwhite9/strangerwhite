const skills = [
  {
    id: "aws",
    title: "AWS Cloud",
    cardTitle: "AWS",
    cardImage: "assets/skills/aws-card.svg",
    heroImage: "assets/skills/aws-hero.svg",
    accent: "#ff9c42",
    glow: "rgba(255, 156, 66, 0.28)",
    hasDetail: true,
    cardRole: "Cloud Admin",
    cardStat: "90%",
    cardSummary: "System Admin • EC2 • S3",
    category: "Solution Architecture",
    proficiency: "90% Proficiency",
    year: "2024",
    level: "PRO",
    focus: "System Admin • Cloud Ops",
    projectLinks: [
      { label: "Scalable Cloud Infrastructure on AWS", href: "https://github.com/strangeRwhite9/Scalable-Cloud-Infrastructure-on-AWS-" },
    ],
    modules: [
      { icon: "storage", color: "is-yellow", title: "Storage", subtitle: "S3, EBS, EFS" },
      { icon: "database", color: "is-indigo", title: "Database", subtitle: "RDS, DynamoDB" },
      { icon: "shield", color: "is-pink", title: "Encryption", subtitle: "KMS, Shield" },
      { icon: "network", color: "is-purple", title: "Networking", subtitle: "VPC, Route53" },
      { icon: "pulse", color: "is-cyan", title: "Monitoring", subtitle: "CloudWatch, CloudTrail" },
      { icon: "key", color: "is-coral", title: "IAM", subtitle: "Users, Roles, Policies" },
    ],
  },
  {
    id: "python",
    title: "Python",
    cardTitle: "Python",
    cardImage: "assets/skills/python-card.svg",
    accent: "#5fb7ff",
    glow: "rgba(95, 183, 255, 0.26)",
    hasDetail: true,
    cardRole: "Automation",
    cardStat: "84%",
    cardSummary: "Scripts • APIs • Tooling",
    category: "Python Fundamentals",
    proficiency: "84% Proficiency",
    year: "2024",
    level: "PRO",
    focus: "Automation • Scripting • Logic Building",
    modules: [
      { icon: "chip", color: "is-cyan", title: "Python Syntax & Variables", subtitle: "Print, input, data types" },
      { icon: "shield", color: "is-yellow", title: "Conditional Operators", subtitle: "If, else, comparison logic" },
      { icon: "pulse", color: "is-purple", title: "Loops", subtitle: "For, while, iteration flow" },
      { icon: "file-lock", color: "is-coral", title: "Functions", subtitle: "Def, arguments, reusable code" },
    ],
  },
  {
    id: "docker",
    title: "Docker",
    cardTitle: "Docker",
    cardImage: "assets/skills/docker-card.svg",
    accent: "#1d63ed",
    glow: "rgba(29, 99, 237, 0.26)",
    hasDetail: false,
    cardRole: "Containers",
    cardStat: "88%",
    cardSummary: "Images • Compose • Deploy",
  },
  {
    id: "git",
    title: "Git & GitHub",
    cardTitle: "GitHub",
    titleScale: 0.88,
    cardImage: "assets/skills/git-card.svg",
    accent: "#f05032",
    glow: "rgba(240, 80, 50, 0.26)",
    hasDetail: true,
    cardRole: "Version Ctrl",
    cardStat: "90%",
    cardSummary: "Git • GitHub • PRs",
    category: "Version Control Workflow",
    proficiency: "90% Proficiency",
    year: "2024",
    level: "PRO",
    focus: "Branching • Collaboration • Deployment Readiness",
    detailTitleSize: "clamp(3.1rem, 5vw, 4.8rem)",
    detailCopyWidth: "min(720px, calc(100% - 96px))",
    modules: [
      { icon: "storage", color: "is-orange", title: "Repository Basics", subtitle: "Init, clone, status, add, commit" },
      { icon: "network", color: "is-red", title: "Branching Workflow", subtitle: "Branch, checkout, merge, rebase" },
      { icon: "users", color: "is-cyan", title: "GitHub Collaboration", subtitle: "Push, pull, PRs, code reviews" },
      { icon: "search", color: "is-yellow", title: "DevOps Essentials", subtitle: "Conflict fixing, tags, rollback basics" },
    ],
  },
  {
    id: "linux",
    title: "Linux",
    cardTitle: "Linux",
    cardImage: "assets/skills/linux-card.svg",
    heroImage: "assets/skills/linux-hero.svg",
    accent: "#66e6a1",
    glow: "rgba(102, 230, 161, 0.26)",
    hasDetail: true,
    cardRole: "System Admin",
    cardStat: "90%",
    cardSummary: "Shell • Servers • Networking",
    category: "Linux Administration",
    proficiency: "90% Proficiency",
    year: "2024",
    level: "PRO",
    focus: "System Admin • Server Ops",
    projectLinks: [
      { label: "Log Monitoring Alert System", href: "https://log-monitoring-alert-system.onrender.com/" },
    ],
    modules: [
      { icon: "file-lock", color: "is-yellow", title: "File Permissions", subtitle: "Chmod, Chown" },
      { icon: "cube", color: "is-cyan", title: "Package Mgmt", subtitle: "APT, YUM, RPM" },
      { icon: "users", color: "is-olive", title: "Users & Groups", subtitle: "Useradd, Usermod" },
      { icon: "chip", color: "is-orange", title: "System Processes", subtitle: "PS, Top, Kill" },
      { icon: "pulse", color: "is-cyan", title: "Logging & Monitoring", subtitle: "Syslog, Journalctl" },
      { icon: "network", color: "is-purple", title: "Networking", subtitle: "SSH, IP, Firewall" },
    ],
  },
  {
    id: "cyber",
    title: "Cyber Security",
    cardTitle: "Cyber",
    cardImage: "assets/skills/cyber-card.svg",
    heroImage: "assets/skills/cyber-hero.svg",
    accent: "#ff5d8f",
    glow: "rgba(255, 93, 143, 0.28)",
    hasDetail: true,
    cardRole: "Security Ops",
    cardStat: "50%",
    cardSummary: "Recon • Pentest • Hardening",
    detailTitleSize: "clamp(3.2rem, 5.4vw, 4.8rem)",
    detailCopyWidth: "min(700px, calc(100% - 96px))",
    detailCopyPadding: "108px 0 32px 38px",
    category: "Web Penetration Testing",
    proficiency: "50% Proficiency",
    year: "2024",
    level: "PRO",
    focus: "Testing • Ethical Hacking",
    projectLinks: [
      { label: "Byte Blogger Base", href: "https://bytebloggerbase.com/hall-of-fame-reward" },
      { label: "SecuDoc", href: "https://www.secudoc.nl/hall%20of%20fame" },
      { label: "Innolab", href: "https://innolab.co.nz/responsible-disclosure" },
      { label: "BEN / IST Toll", href: "https://ben.ist-toll.xyz/hall-of-fame.html" },
      { label: "Inflectra", href: "https://www.inflectra.com/Company/" },
      { label: "Nelogica", href: "https://www.nelogica.com.br/vulnerability-disclosure-program" },
    ],
    modules: [
      { icon: "lock", color: "is-red", title: "Network Security", subtitle: "Scanning, Ports/services" },
      { icon: "bug", color: "is-green", title: "Penetration Testing", subtitle: "Metasploit, Burp Suite" },
      { icon: "search", color: "is-yellow", title: "Recon", subtitle: "Nmap, OSINT" },
    ],
  },
];

const cardLayouts = {
  "-3": { x: -392, y: 176, scale: 0.72, rotate: -40, opacity: 0.16 },
  "-2": { x: -268, y: 102, scale: 0.82, rotate: -24, opacity: 0.34 },
  "-1": { x: -132, y: 44, scale: 0.92, rotate: -10, opacity: 0.62 },
  "0": { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
  "1": { x: 132, y: 44, scale: 0.92, rotate: 10, opacity: 0.62 },
  "2": { x: 268, y: 102, scale: 0.82, rotate: 24, opacity: 0.34 },
  "3": { x: 392, y: 176, scale: 0.72, rotate: 40, opacity: 0.16 },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const appShell = document.getElementById("appShell");
const detailScope = document.querySelector(".skills-shell") || appShell;
const carouselTrack = document.getElementById("carouselTrack");
const detailHero = document.getElementById("detailHero");
const detailBack = document.getElementById("detailBack");
const detailProjects = document.getElementById("detailProjects");
const detailPlus = document.getElementById("detailPlus");
const detailProjectsPopover = document.getElementById("detailProjectsPopover");
const detailCategory = document.getElementById("detailCategory");
const detailTitle = document.getElementById("detailTitle");
const detailProficiency = document.getElementById("detailProficiency");
const detailYear = document.getElementById("detailYear");
const detailLevel = document.getElementById("detailLevel");
const detailFocus = document.getElementById("detailFocus");
const moduleGrid = document.getElementById("moduleGrid");
const siteHeader = document.getElementById("siteHeader");
const skillsSection = document.getElementById("skills");
const projectSection = document.getElementById("projects");
const navSectionLinks = Array.from(document.querySelectorAll("[data-section-link]"));
const scrollLinks = Array.from(document.querySelectorAll("[data-scroll-link]"));
const isSingleScrollPage = document.body.classList.contains("single-scroll");
const backToTopButton = document.getElementById("backToTopButton");

const state = {
  activeIndex: 4,
  detailSkill: null,
  detailProjectsPopoverOpen: false,
  carouselPosition: 4,
  autoplayPauseUntil: 0,
  lastFrameTime: 0,
};

const cardButtons = [];

function normalizePosition(position) {
  const length = skills.length;
  return ((position % length) + length) % length;
}

function clampWrappedOffset(index, activeIndex, length) {
  let offset = index - activeIndex;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

function lerp(start, end, amount) {
  return start + (end - start) * amount;
}

function getInterpolatedPose(offset) {
  const clampedOffset = Math.max(-3, Math.min(3, offset));
  const lower = Math.floor(clampedOffset);
  const upper = Math.ceil(clampedOffset);
  const lowerPose = cardLayouts[String(lower)];
  const upperPose = cardLayouts[String(upper)];

  if (lower === upper || !lowerPose || !upperPose) {
    return lowerPose || upperPose || cardLayouts["0"];
  }

  const amount = clampedOffset - lower;

  return {
    x: lerp(lowerPose.x, upperPose.x, amount),
    y: lerp(lowerPose.y, upperPose.y, amount),
    scale: lerp(lowerPose.scale, upperPose.scale, amount),
    rotate: lerp(lowerPose.rotate, upperPose.rotate, amount),
    opacity: lerp(lowerPose.opacity, upperPose.opacity, amount),
  };
}

function setCarouselPosition(nextPosition, pauseForMs = 0) {
  state.carouselPosition = normalizePosition(nextPosition);
  if (pauseForMs > 0) {
    state.autoplayPauseUntil = performance.now() + pauseForMs;
  }
  updateCarousel();
}

function updateCarousel() {
  if (!cardButtons.length) {
    return;
  }

  const isCompact = window.innerWidth <= 520;
  const isTablet = window.innerWidth > 520 && window.innerWidth <= 720;
  const compactScale = isCompact ? 0.64 : isTablet ? 0.8 : 1;

  state.activeIndex = Math.round(state.carouselPosition) % skills.length;
  if (state.activeIndex < 0) {
    state.activeIndex += skills.length;
  }

  cardButtons.forEach((button, index) => {
    const offset = clampWrappedOffset(index, state.carouselPosition, skills.length);
    const pose = getInterpolatedPose(offset);

    button.hidden = Math.abs(offset) > 3.35;
    if (!pose) return;

    button.style.setProperty("--card-x", `${pose.x * compactScale}px`);
    button.style.setProperty("--card-y", `${pose.y * compactScale}px`);
    button.style.setProperty("--card-scale", String(pose.scale));
    button.style.setProperty("--card-rotate", `${pose.rotate}deg`);
    button.style.setProperty("--card-opacity", String(pose.opacity));
    button.style.setProperty("--card-z", String(Math.round(100 - Math.abs(offset) * 10)));
    button.classList.toggle("is-active", Math.abs(offset) < 0.42);
  });
}

function renderModules(skill) {
  if (!moduleGrid) {
    return;
  }

  moduleGrid.innerHTML = skill.modules
    .map(
      (module) => `
        <article class="module-card">
          <div class="module-card-visual">
            ${iconMarkup(module.icon, module.color)}
          </div>
          <div class="module-card-title">${module.title}</div>
          <div class="module-card-subtitle">${module.subtitle}</div>
        </article>
      `
    )
    .join("");
}

function getCurrentDetailSkillConfig() {
  return skills.find((skill) => skill.id === state.detailSkill) || null;
}

function closeDetailProjectsPopover() {
  state.detailProjectsPopoverOpen = false;

  if (detailProjectsPopover) {
    detailProjectsPopover.classList.remove("is-open");
  }

  if (detailProjects) {
    detailProjects.setAttribute("aria-expanded", "false");
  }
}

function openDetailProjectsPopover() {
  if (!detailProjectsPopover) {
    return;
  }

  const currentSkill = getCurrentDetailSkillConfig();
  const projectLinks = currentSkill?.projectLinks || [];

  if (!projectLinks.length) {
    closeDetailProjectsPopover();
    return;
  }

  detailProjectsPopover.innerHTML = projectLinks
    .map(
      (link) => `
        <a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}</a>
      `
    )
    .join("");

  detailProjectsPopover.classList.add("is-open");
  state.detailProjectsPopoverOpen = true;
  detailProjects?.setAttribute("aria-expanded", "true");

  detailProjectsPopover.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      closeDetailProjectsPopover();
    });
  });
}

function openDetail(skill) {
  if (!skill.hasDetail || !detailScope || !detailHero) return;

  state.detailSkill = skill.id;
  closeDetailProjectsPopover();
  detailHero.style.setProperty("--detail-image", `url("${skill.heroImage || skill.cardImage}")`);
  detailHero.style.setProperty("--detail-glow", skill.glow || "rgba(255, 59, 31, 0.18)");
  detailHero.style.setProperty("--detail-title-size", skill.detailTitleSize || "clamp(4rem, 7vw, 6.8rem)");
  detailHero.style.setProperty("--detail-copy-width", skill.detailCopyWidth || "min(560px, calc(100% - 96px))");
  detailHero.style.setProperty("--detail-copy-padding", skill.detailCopyPadding || "126px 0 40px 38px");

  if (detailCategory) detailCategory.textContent = skill.category;
  if (detailTitle) detailTitle.textContent = skill.title;
  if (detailProficiency) detailProficiency.textContent = skill.proficiency;
  if (detailYear) detailYear.textContent = skill.year;
  if (detailLevel) detailLevel.textContent = skill.level;
  if (detailFocus) detailFocus.textContent = skill.focus;

  renderModules(skill);
  detailScope.classList.add("is-detail-open");

  if (!isSingleScrollPage && appShell) {
    document.body.classList.add("is-detail-open");
  }
}

function closeDetail() {
  closeDetailProjectsPopover();
  state.detailSkill = null;
  detailScope?.classList.remove("is-detail-open");

  if (!isSingleScrollPage) {
    document.body.classList.remove("is-detail-open");
  }

  state.autoplayPauseUntil = performance.now() + 1000;
}

function focusSkill(index, pauseForMs = 3500) {
  setCarouselPosition(index, pauseForMs);
}

function shiftActive(direction) {
  const nextIndex = normalizePosition(Math.round(state.carouselPosition) + direction);
  focusSkill(nextIndex, 4500);
}

function iconMarkup(iconName, colorClass) {
  const icons = {
    "file-lock": `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
        <path d="M14 3v5h5" />
        <path d="M9.8 14.2a2.2 2.2 0 1 1 4.4 0v1.6H9.8Z" />
        <path d="M12 15.8v1.8" />
      </svg>`,
    cube: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m12 2 8 4.5v11L12 22l-8-4.5v-11Z" />
        <path d="M12 22V11.5" />
        <path d="m20 6.5-8 5-8-5" />
      </svg>`,
    users: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 21v-1.5A3.5 3.5 0 0 0 12.5 16h-4A3.5 3.5 0 0 0 5 19.5V21" />
        <path d="M10.5 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19 20v-1a3 3 0 0 0-2.4-2.94" />
        <path d="M16.5 5.13a3 3 0 0 1 0 5.74" />
      </svg>`,
    chip: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 8h8v8H8z" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1" />
      </svg>`,
    pulse: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 12h4l2-5 4 10 2-5h6" />
      </svg>`,
    network: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5v6" />
        <path d="M7 10h10" />
        <rect x="10" y="3" width="4" height="4" rx="1" />
        <rect x="4" y="10" width="4" height="4" rx="1" />
        <rect x="16" y="10" width="4" height="4" rx="1" />
        <rect x="10" y="17" width="4" height="4" rx="1" />
      </svg>`,
    lock: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V8a4 4 0 1 1 8 0v3" />
      </svg>`,
    bug: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 9V7a4 4 0 0 1 8 0v2" />
        <path d="M6 13h12" />
        <path d="M12 13v8" />
        <path d="M9 13v8M15 13v8" />
        <path d="M4 9h4M16 9h4M3 17h4M17 17h4" />
        <rect x="7" y="9" width="10" height="8" rx="5" />
      </svg>`,
    search: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="11" cy="11" r="6" />
        <path d="m20 20-3.5-3.5" />
      </svg>`,
    storage: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 7h14v10H5z" />
        <path d="M5 10h14" />
        <path d="M8 14h.01M11 14h.01" />
      </svg>`,
    database: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="6" ry="3" />
        <path d="M6 6v6c0 1.66 2.69 3 6 3s6-1.34 6-3V6" />
        <path d="M6 12v6c0 1.66 2.69 3 6 3s6-1.34 6-3v-6" />
      </svg>`,
    shield: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3 19 6v5c0 5-3.2 8.3-7 10-3.8-1.7-7-5-7-10V6Z" />
      </svg>`,
    key: `
      <svg class="module-icon ${colorClass}" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="8" cy="15" r="4" />
        <path d="m11 15 9-9" />
        <path d="M17 8h3v3" />
      </svg>`,
  };

  return icons[iconName] || "";
}

function createCardButton(skill, index) {
  if (!carouselTrack) {
    return;
  }

  const button = document.createElement("button");
  button.className = "skill-card";
  button.type = "button";
  button.dataset.index = String(index);
  button.dataset.detail = String(skill.hasDetail);
  button.setAttribute("aria-label", skill.title);
  button.style.setProperty("--skill-accent", skill.accent);
  button.style.setProperty("--skill-glow", skill.glow);
  button.style.setProperty("--skill-title-scale", String(skill.titleScale || 1));
  button.innerHTML = `
    <img class="skill-card-media" src="${skill.cardImage}" alt="${skill.title}" draggable="false" />
    <div class="skill-card-copy">
      <div class="skill-card-topline">
        <span class="skill-card-role">${skill.cardRole}</span>
      </div>
      <div class="skill-card-body">
        <h3 class="skill-card-title">${skill.cardTitle}</h3>
        <p class="skill-card-subtitle">${skill.cardSummary}</p>
      </div>
    </div>
  `;
  carouselTrack.appendChild(button);
  cardButtons.push(button);
}

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

function isLightBackgroundAtPoint(x, y, ignoredElement) {
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

    if (background && background.a > 0.18) {
      return getLuminance(background) > 185;
    }
  }

  return false;
}

function isHeaderOnLightSurface() {
  if (!siteHeader) {
    return false;
  }

  const nav = siteHeader.querySelector(".site-nav");
  const navRect = nav?.getBoundingClientRect();
  const headerRect = siteHeader.getBoundingClientRect();
  const baseRect = navRect ?? headerRect;

  const sampleY = baseRect.top + baseRect.height / 2;
  const samplePoints = [
    baseRect.left + baseRect.width * 0.2,
    baseRect.left + baseRect.width * 0.5,
    baseRect.left + baseRect.width * 0.8,
  ].filter((x) => x >= 0 && x <= window.innerWidth && sampleY >= 0 && sampleY <= window.innerHeight);

  if (!samplePoints.length) {
    return false;
  }

  let lightHits = 0;

  samplePoints.forEach((x) => {
    if (isLightBackgroundAtPoint(x, sampleY, siteHeader)) {
      lightHits += 1;
    }
  });

  return lightHits >= Math.ceil(samplePoints.length / 2);
}

let headerContrastFrame = 0;
let lastScrollY = window.scrollY;

function updateHeaderContrast() {
  if (!siteHeader || !isSingleScrollPage) {
    return;
  }

  siteHeader.classList.toggle("is-on-light", isHeaderOnLightSurface());
}

function updateHeaderVisibility() {
  if (!siteHeader || !isSingleScrollPage) {
    return;
  }

  const currentScrollY = window.scrollY;
  const scrollDelta = currentScrollY - lastScrollY;

  if (currentScrollY <= 24 || scrollDelta < -6) {
    siteHeader.classList.remove("is-hidden");
  } else if (scrollDelta > 6 && currentScrollY > 120) {
    siteHeader.classList.add("is-hidden");
  }

  lastScrollY = currentScrollY;
}

function updateBackToTopButton() {
  if (!backToTopButton || !isSingleScrollPage) {
    return;
  }

  backToTopButton.classList.toggle("is-visible", window.scrollY > 420);
}

function scheduleHeaderContrastUpdate() {
  if (headerContrastFrame) {
    return;
  }

  headerContrastFrame = requestAnimationFrame(() => {
    headerContrastFrame = 0;
    updateHeaderVisibility();
    updateBackToTopButton();
    updateHeaderContrast();
  });
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

  const interactiveSelector = "a, button, .skill-card, .module-card, .project-card, .blog-card, .contact-card, .back-to-top-button";

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

function animateCarousel(timestamp) {
  if (!carouselTrack) {
    return;
  }

  if (!state.lastFrameTime) {
    state.lastFrameTime = timestamp;
  }

  const deltaSeconds = (timestamp - state.lastFrameTime) / 1000;
  state.lastFrameTime = timestamp;

  if (!state.detailSkill && timestamp > state.autoplayPauseUntil) {
    state.carouselPosition = normalizePosition(state.carouselPosition + deltaSeconds * 0.1);
    updateCarousel();
  }

  requestAnimationFrame(animateCarousel);
}

function isSkillsFocused() {
  if (!skillsSection || !isSingleScrollPage) {
    return true;
  }

  const rect = skillsSection.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
}

function getScrollTargetTop(element) {
  const headerHeight = siteHeader ? siteHeader.getBoundingClientRect().height + 24 : 96;
  return element.getBoundingClientRect().top + window.scrollY - headerHeight;
}

function scrollToSection(sectionId, instant = false) {
  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  const top = Math.max(0, getScrollTargetTop(target));
  window.scrollTo({
    top,
    behavior: instant || prefersReducedMotion.matches ? "auto" : "smooth",
  });

  if (isSingleScrollPage) {
    history.replaceState(null, "", `#${sectionId}`);
  }
}

function setActiveSection(sectionId) {
  navSectionLinks.forEach((link) => {
    const isActive = link.dataset.sectionLink === sectionId;
    link.classList.toggle("is-active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setupSectionNavigation() {
  if (!scrollLinks.length) {
    return;
  }

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        return;
      }

      const targetId = href.slice(1);
      if (!targetId) {
        return;
      }

      event.preventDefault();
      scrollToSection(targetId);
      setActiveSection(targetId);
      siteHeader?.classList.remove("is-hidden");
      scheduleHeaderContrastUpdate();
    });
  });

  if (isSingleScrollPage) {
    const sections = ["home", "skills", "projects", "blogs", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntry = entries
            .filter((entry) => entry.isIntersecting)
            .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

          if (visibleEntry?.target?.id) {
            setActiveSection(visibleEntry.target.id);
          }
        },
        {
          threshold: [0.2, 0.4, 0.65],
          rootMargin: "-20% 0px -45% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));
    }

    const initialHash = window.location.hash.replace("#", "");
    if (initialHash) {
      window.addEventListener("load", () => {
        scrollToSection(initialHash, true);
        setActiveSection(initialHash);
      });
    }
  }
}

function setupProjectPopovers() {
  const popoverGroups = Array.from(document.querySelectorAll(".project-link-group"));

  if (!popoverGroups.length) {
    return;
  }

  function setPopoverOpen(group, isOpen) {
    group.classList.toggle("is-open", isOpen);

    const trigger = group.querySelector(".project-link-trigger");
    if (trigger) {
      trigger.setAttribute("aria-expanded", String(isOpen));
    }
  }

  function closeAllPopovers(exceptGroup = null) {
    popoverGroups.forEach((group) => {
      if (group !== exceptGroup) {
        setPopoverOpen(group, false);
      }
    });
  }

  popoverGroups.forEach((group) => {
    const trigger = group.querySelector(".project-link-trigger");
    const popover = group.querySelector(".project-link-popover");

    if (!trigger || !popover) {
      return;
    }

    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const shouldOpen = !group.classList.contains("is-open");
      closeAllPopovers(group);
      setPopoverOpen(group, shouldOpen);
    });

    popover.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    popover.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setPopoverOpen(group, false);
      });
    });
  });

  document.addEventListener("click", (event) => {
    const targetGroup = event.target instanceof Element ? event.target.closest(".project-link-group") : null;

    if (targetGroup) {
      return;
    }

    closeAllPopovers();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllPopovers();
    }
  });
}

if (carouselTrack) {
  skills.forEach(createCardButton);
  updateCarousel();

  if (!prefersReducedMotion.matches) {
    requestAnimationFrame(animateCarousel);
  }

  carouselTrack.addEventListener("click", (event) => {
    const button = event.target instanceof Element ? event.target.closest(".skill-card") : null;
    if (!button) return;

    const index = Number(button.dataset.index);
    const selectedSkill = skills[index];
    const offset = clampWrappedOffset(index, state.carouselPosition, skills.length);

    if (Math.abs(offset) > 0.45) {
      focusSkill(index);
      return;
    }

    openDetail(selectedSkill);
  });
}

if (detailBack) {
  detailBack.addEventListener("click", closeDetail);
}

if (detailProjects) {
  detailProjects.addEventListener("click", (event) => {
    const currentSkill = getCurrentDetailSkillConfig();

    if (currentSkill?.projectLinks?.length) {
      event.preventDefault();

      if (state.detailProjectsPopoverOpen) {
        closeDetailProjectsPopover();
      } else {
        openDetailProjectsPopover();
      }
      return;
    }

    closeDetail();

    if (projectSection && isSingleScrollPage) {
      scrollToSection("projects");
    }
  });
}

if (detailPlus) {
  detailPlus.addEventListener("click", () => {
    closeDetailProjectsPopover();
    closeDetail();

    if (isSingleScrollPage) {
      scrollToSection("contact");
    }
  });
}

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    scrollToSection("home");
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.detailProjectsPopoverOpen) {
    closeDetailProjectsPopover();
    return;
  }

  if (event.key === "Escape" && state.detailSkill) {
    closeDetail();
    return;
  }

  if (!carouselTrack || state.detailSkill || !isSkillsFocused()) return;

  if (event.key === "ArrowLeft") {
    shiftActive(-1);
  }

  if (event.key === "ArrowRight") {
    shiftActive(1);
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openDetail(skills[state.activeIndex]);
  }
});

document.addEventListener("click", (event) => {
  if (!state.detailProjectsPopoverOpen) {
    return;
  }

  const clickedInsideDetailProjects =
    event.target instanceof Element &&
    (event.target.closest("#detailProjects") || event.target.closest("#detailProjectsPopover"));

  if (!clickedInsideDetailProjects) {
    closeDetailProjectsPopover();
  }
});

window.addEventListener("resize", updateCarousel);
window.addEventListener("scroll", scheduleHeaderContrastUpdate, { passive: true });
window.addEventListener("resize", scheduleHeaderContrastUpdate);
window.addEventListener("load", scheduleHeaderContrastUpdate);

setupCustomCursor();
setupSectionNavigation();
setupProjectPopovers();
scheduleHeaderContrastUpdate();
