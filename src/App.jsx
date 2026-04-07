import { ShadowOverlay } from "./ShadowOverlay";
import { useState, useEffect } from "react";
import { GlowCard } from "./GlowCard";
import { StarButton } from "./StarButton";

// ─── Google Fonts ────────────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;700&family=Syne:wght@400;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const DATA = {
  name: "Fardin Farhan Ahmed",
  handle: "yellowcurryninja",
  role: "Cybersecurity Student & Aspiring Network Engineer",
  location: "Brisbane, QLD, Australia",
  email: "Fardin5215@gmail.com",
  phone: "0426353763",
  linkedin: "https://www.linkedin.com/in/fardin-farhan-ahmed-60792a282/",
  github: "https://github.com/yellowcurryninja",
  about:
    "Entry-level IT professional with hands-on experience supporting campus IT operations and building practical skills through a personal HomeLab running DNS, storage, and server services on Proxmox. Currently completing a Bachelor of Cyber Security at Griffith University while studying toward CCNA certification. I build tools, automate things that shouldn't require manual work, and care about how networks actually function under the hood.",
  skills: [
    { category: "Networking", items: ["TCP/IP", "DNS", "DHCP", "Wireshark", "CCNA", "VLANs", "Subnetting", "OSI", "ACLs"] },
    { category: "Leadership & Operations", items: ["Stakeholder Communication", "Cross-functional Collaboration", "Decision Making", "Initiative", "Adaptability", "Workflow Optimization"] },
    { category: "Programming", items: ["Python", "JavaScript", "C#", "SQL", "Assembly"] },
    { category: "Security", items: ["SIEM Tools", "Threat Detection", "QA Testing", "System Hardening", "Log Analysis", "Firewall Management", "Security Policies"] },
    { category: "Infrastructure", items: ["Proxmox VE", "Virtualization", "HomeLab", "Self-hosted Services"] },
    { category: "Tools", items: ["Jira", "Selenium", "Google Sheets API", "GitHub Actions", "Bash", "PuTTY", "Docker"] },
  ],
  experience: [
    {
      company: "Multicultural Mailer Australia",
      role: "IT & Operations Coordinator",
      period: "Mar 2026 – Present",
      location: "Brisbane, AU",
      current: true,
      bullets: [
        "Developed and deployed a custom web-based lucky draw system for live events with automated participant selection",
        "Managed cross-team task coordination, meeting minutes, and operational workflow efficiency",
        "Supported event technical operations including audio system setup and visual display management",
        "Took on leadership support role overseeing team execution across all departments",
      ],
    },
    {
      company: "Fresh Futures Australia",
      role: "IT Intern",
      period: "Mar 2025 – May 2025",
      location: "Malaysia",
      current: false,
      bullets: [
        "Built Python scripts for data collection and integration using Selenium and Google Sheets API",
        "Performed QA testing including manual and automated test cases",
        "Troubleshot deployment, API, and system issues in a production environment",
        "Gained exposure to IT operations, network-related processes, and end-to-end system support",
      ],
    },
    {
      company: "Asia Pacific University (Part-time)",
      role: "Technical Assistant",
      period: "2024 – 2026",
      location: "Kuala Lumpur, MY",
      current: false,
      bullets: [
        "Provided daily IT helpdesk support resolving hardware, software, and network connectivity issues",
        "Maintained and troubleshot classroom, lab, and office IT equipment",
        "Collaborated with the Technology Services team to ensure smooth campus IT operations",
      ],
    },
  ],
  projects: [
    {
      name: "Automated Web Scraping Pipeline",
      tech: ["Python", "Firecrawl API", "BeautifulSoup", "Google Sheets API"],
      desc: "Data extraction pipeline that scrapes business directory listings with duplicate detection, retry logic, and real-time storage to Google Sheets. Built during IT internship.",
      link: "#",
    },
    {
      name: "Automated Timetable Sync",
      tech: ["Node.js", "Google Calendar API", "GitHub Actions"],
      desc: "Automation tool that syncs university timetable data with Google Calendar using cron jobs, eliminating manual schedule entry entirely.",
      link: "#",
    },
    {
      name: "Portable HomeLab Server",
      tech: ["Proxmox VE", "Debian", "Self-hosted"],
      desc: "Mini-PC homelab running multiple Debian VMs hosting a media server, private photo storage, and multiplayer game servers. Ongoing infrastructure project.",
      link: null,
    },
  ],
  education: [
    {
      institution: "Griffith University",
      degree: "Bachelor of Cyber Security",
      period: "2026 – Present",
      location: "Brisbane, AU",
    },
    {
      institution: "Asia Pacific University of Technology & Innovation",
      degree: "Bachelor of Computer Science in Cybersecurity",
      period: "2024 – 2026",
      location: "Kuala Lumpur, MY",
    },
  ],
  certifications: [
    { name: "CCNA", issuer: "Cisco", year: "2026", active: true },
    { name: "Google IT Support Professional", issuer: "Google", year: "2023", active: false },
    { name: "CS50: Introduction to Cybersecurity", issuer: "Harvard / edX", year: "2024", active: false },
    { name: "CS50: CS for Business Professionals", issuer: "Harvard / edX", year: "2024", active: false },
  ],
};

// ─── STYLES ───────────────────────────────────────────────────────────────────
const css = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  @media (max-width: 600px) {
    #hero { padding: 100px 24px 60px !important; }
    #hero h1 { font-size: clamp(28px, 8vw, 68px) !important; white-space: normal !important; }
  }
  @media (max-width: 600px) {
  #hero { padding: 100px 24px 60px !important; }
  #hero h1 { font-size: clamp(28px, 8vw, 68px) !important; white-space: normal !important; }
  #hero .fade-up { width: 100%; }
  }
  :root {
    --bg: #080808;
    --surface: #0f0f0f;
    --border: #1e1e1e;
    --border-subtle: #141414;
    --text: #e8e8e8;
    --text-muted: #9a9a9a;
    --text-dim: #5a5a5a;
    --accent: #39d353;
    --accent-dim: rgba(57,211,83,0.12);
    --accent-glow: rgba(57,211,83,0.05);
    --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
    --font-display: 'Syne', sans-serif;
  }
  html { scroll-behavior: smooth; width: 100%; margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-mono); font-size: 13px; line-height: 1.7; margin: 0; padding: 0; }
  #root { width: 100%; }
  ::selection { background: var(--accent-dim); color: var(--accent); }
  ::-webkit-scrollbar { width: 3px; }
  ::-webkit-scrollbar-track { background: var(--bg); }
  ::-webkit-scrollbar-thumb { background: #222; }
  a { color: var(--accent); text-decoration: none; }
  a:hover { opacity: 0.8; }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes fadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn { from{opacity:0} to{opacity:1} }
  @keyframes scanline {
    0% { transform: translateY(-10%); }
    100% { transform: translateY(110vh); }
  }
  .scanline {
    position: fixed; top:0; left:0; right:0; height:120px;
    background: linear-gradient(transparent, rgba(57,211,83,0.025), transparent);
    pointer-events: none; z-index: 9999;
    animation: scanline 10s linear infinite;
  }
  .grid-bg {
    background-image:
      linear-gradient(var(--border-subtle) 1px, transparent 1px),
      linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .fade-in { animation: fadeIn 0.5s ease both; }
  .fade-up { animation: fadeUp 0.5s ease both; }
`;

// ─── SMALL COMPONENTS ─────────────────────────────────────────────────────────

const Tag = ({ children }) => (
  <span style={{
    display: "inline-block", padding: "2px 8px",
    border: "1px solid var(--border)", borderRadius: "3px",
    color: "var(--text)", fontSize: "11px",
    background: "transparent", fontFamily: "var(--font-mono)",
  }}>
    {children}
  </span>
);

const AccentTag = ({ children }) => (
  <span style={{
    display: "inline-block", padding: "2px 8px",
    border: "1px solid rgba(57,211,83,0.25)", borderRadius: "3px",
    color: "var(--accent)", fontSize: "11px",
    background: "var(--accent-glow)", fontFamily: "var(--font-mono)",
  }}>
    {children}
  </span>
);

const SectionLabel = ({ children }) => (
  <div style={{
    display: "flex", alignItems: "center", gap: "12px",
    marginBottom: "44px",
  }}>
    <span style={{ color: "var(--accent)", fontSize: "11px" }}>//</span>
    <span style={{
      fontFamily: "var(--font-display)", fontSize: "10px",
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: "var(--text)",
    }}>
      {children}
    </span>
    <div style={{ flex: 1, height: "1px", background: "var(--border)" }} />
  </div>
);

// ─── NAV ──────────────────────────────────────────────────────────────────────
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = ["about", "skills", "experience", "projects", "education", "contact"];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 clamp(20px,5vw,60px)",
        height: "52px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        background: scrolled || open ? "rgba(8,8,8,0.97)" : "transparent",
        backdropFilter: scrolled || open ? "blur(10px)" : "none",
        transition: "all 0.25s",
      }}>
        <span style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "14px", color: "var(--accent)", letterSpacing: "0.04em",
        }}>
          ffa<span style={{ color: "var(--text-dim)" }}>://</span>
        </span>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: "28px" }} className="nav-desktop">
          {links.map(l => (
            <a key={l} href={`#${l}`} style={{
              color: "var(--text-dim)", fontSize: "14px",
              letterSpacing: "0.1em", transition: "color 0.15s",
            }}
              onMouseEnter={e => e.target.style.color = "var(--text)"}
              onMouseLeave={e => e.target.style.color = "var(--text-dim)"}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "1px solid var(--border)",
            color: "var(--text-muted)", cursor: "pointer",
            padding: "6px 10px", borderRadius: "4px",
            fontSize: "16px", lineHeight: 1,
            display: "none",
          }}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          position: "fixed", top: "52px", left: 0, right: 0, zIndex: 99,
          background: "rgba(8,8,8,0.97)",
          borderBottom: "1px solid var(--border)",
          padding: "12px 24px 20px",
          display: "flex", flexDirection: "column", gap: "0",
        }}
          className="nav-mobile-menu"
        >
          {links.map(l => (
            <a key={l} href={`#${l}`}
              onClick={() => setOpen(false)}
              style={{
                color: "var(--text-muted)", fontSize: "13px",
                letterSpacing: "0.1em", padding: "12px 0",
                borderBottom: "1px solid var(--border-subtle)",
                transition: "color 0.15s",
              }}
            >
              <span style={{ color: "var(--accent)", marginRight: "8px" }}>//</span>{l}
            </a>
          ))}
        </div>
      )}

      {/* Mobile CSS */}
      <style>{`
        @media (max-width: 700px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
};

// ─── HERO ─────────────────────────────────────────────────────────────────────
const Hero = () => {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState(0);
  const fullText = DATA.role;

  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    const id = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [phase]);

  return (
    <section id="hero" className="grid-bg" style={{
      minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: "100px clamp(20px,5vw,60px) 60px",
      position: "relative", overflow: "hidden",
      width: "100%",
    }}>
      <ShadowOverlay
    color="rgb(3, 57, 12)"
    animation={{ scale: 30, speed: 80 }}
    style={{
    position: "absolute",
    top: 0, left: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    pointerEvents: "none",
  }}
  />
      {/* Status panel top-right */}
      <div className="fade-in" style={{
        position: "absolute", top: 70, right: "clamp(20px,5vw,60px)",
        animationDelay: "0.9s",
        border: "1px solid var(--border)", borderRadius: "5px",
        padding: "12px 16px", background: "var(--surface)",
        fontSize: "11px", lineHeight: 2,
      }}>
        {[
          ["location", "Brisbane, AU"],
          ["status", <span style={{ color: "var(--accent)" }}>available</span>],
          ["focus", "networking & security"],
          ["lang", "EN (C1) · BD"],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", gap: "12px", justifyContent: "space-between" }}>
            <span style={{ color: "var(--text-dim)" }}>{k}</span>
            <span style={{ color: "var(--text)" }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: "740px", width: "100%" }}>
        <div className="fade-up" style={{ animationDelay: "0.1s", color: "var(--text-dim)", fontSize: "14px", marginBottom: "18px" }}>
          <span style={{ color: "var(--accent)" }}>$</span> whoami
        </div>

        <h1 className="fade-up" style={{
          animationDelay: "0.2s",
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(22px, 5.5vw, 68px)", lineHeight: 1.05,
          letterSpacing: "-0.02em", color: "#fff",
          marginBottom: "24px",
        }}>
          {DATA.name}
        </h1>

        <div className="fade-up" style={{
          animationDelay: "0.3s",
          fontSize: "13px", color: "var(--text-muted)",
          marginBottom: "44px", minHeight: "22px",
          lineHeight: 1.6,
        }}>
          <span style={{ color: "var(--accent)", opacity: 0.7 }}>&gt; </span>
          <span>{typed}</span>
          <span style={{ animation: "blink 1s infinite", color: "var(--accent)" }}>▋</span>
        </div>

        <div className="fade-up" style={{
          animationDelay: "0.4s",
          display: "flex", gap: "10px", flexWrap: "wrap",
        }}>
          {[
            { label: DATA.email, href: `mailto:${DATA.email}` },
            { label: "github", href: DATA.github },
            { label: "linkedin", href: DATA.linkedin },
          ].map(({ label, href }) => (
            <a key={label} href={href} style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "7px 14px",
              border: "1px solid var(--border)", borderRadius: "4px",
              color: "var(--text)", fontSize: "11px",
              background: "var(--surface)", transition: "all 0.15s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(57,211,83,0.35)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text)";
              }}
            >
              <span style={{ color: "var(--accent)", opacity: 0.5 }}>//</span>{label}
            </a>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: "32px", left: "clamp(20px,5vw,60px)",
        color: "var(--text-dim)", fontSize: "10px", letterSpacing: "0.15em",
        animation: "fadeIn 1s ease 1.6s both",
      }}>
        scroll ↓
      </div>
    </section>
  );
};

// ─── ABOUT ───────────────────────────────────────────────────────────────────
const About = () => (
  <section id="about" style={{ padding: "80px clamp(20px,5vw,60px)", maxWidth: "960px", margin: "0 auto" }}>
    <SectionLabel>about</SectionLabel>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "40px", alignItems: "start",
    }}>
      <p style={{ fontSize: "clamp(13px, 2vw, 14px)", color: "var(--text)", lineHeight: 1.9, wordBreak: "break-word", overflowWrap: "break-word" }}>
        {DATA.about}
      </p>
      <div style={{
        border: "1px solid var(--border)", borderRadius: "5px",
        overflow: "hidden", background: "var(--surface)",
      }}>
        {[
          ["degree", "B. Cyber Security"],
          ["uni", "Griffith University"],
          ["cert", "CCNA"],
          ["lab", "Proxmox + Debian VMs"],
          ["ielts", "English C1"],
          ["base", "Brisbane, AU"],
        ].map(([k, v], i, arr) => (
          <div key={k} style={{
            display: "flex", justifyContent: "space-between",
            padding: "9px 14px",
            borderBottom: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
            fontSize: "11px",
          }}>
            <span style={{ color: "var(--text-dim)" }}>{k}</span>
            <span style={{ color: "var(--text)" }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── SKILLS ──────────────────────────────────────────────────────────────────
const Skills = () => (
  <section id="skills" style={{ padding: "80px clamp(20px,5vw,60px)", maxWidth: "960px", margin: "0 auto" }}>
    <SectionLabel>skills</SectionLabel>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: "14px",
    }}>
      {DATA.skills.map(({ category, items }) => (
        <GlowCard
          key={category}
          glowColor="green"
          style={{ padding: "20px" }}
        >
          <div style={{
            fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase",
            color: "var(--accent)", marginBottom: "14px",
          }}>
            {category}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {items.map(item => <Tag key={item}>{item}</Tag>)}
          </div>
        </GlowCard>
      ))}
    </div>
  </section>
);

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────
const Experience = () => (
  <section id="experience" style={{ padding: "80px clamp(20px,5vw,60px)", maxWidth: "960px", margin: "0 auto" }}>
    <SectionLabel>experience</SectionLabel>
    <div>
      {DATA.experience.map((exp, i) => (
        <div key={i} style={{ display: "flex", gap: "20px", marginBottom: i < DATA.experience.length - 1 ? "0" : "0" }}>

          {/* Timeline spine */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, paddingTop: "4px" }}>
            <div style={{
              width: "10px", height: "10px", borderRadius: "50%",
              border: exp.current ? "2px solid var(--accent)" : "1px solid #333",
              background: exp.current ? "rgba(57,211,83,0.2)" : "#111",
              boxShadow: exp.current ? "0 0 12px rgba(57,211,83,0.4)" : "none",
              flexShrink: 0,
            }} />
            {i < DATA.experience.length - 1 && (
              <div style={{ width: "1px", flex: 1, background: "linear-gradient(to bottom, #333, transparent)", margin: "8px 0" }} />
            )}
          </div>

          {/* Card */}
          <div style={{
            flex: 1,
            paddingBottom: i < DATA.experience.length - 1 ? "48px" : "0",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "20px 24px",
            background: "var(--surface)",
            marginBottom: i < DATA.experience.length - 1 ? "16px" : "0",
          }}>
            {/* Header */}
            <div style={{
              display: "flex", justifyContent: "space-between",
              alignItems: "flex-start", flexWrap: "wrap", gap: "6px",
              marginBottom: "6px",
            }}>
              <div>
                <div style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "15px", color: "#fff", lineHeight: 1.3,
                }}>
                  {exp.company}
                </div>
                <div style={{
                  fontSize: "12px", color: "var(--accent)",
                  marginTop: "3px", display: "flex", alignItems: "center", gap: "8px",
                }}>
                  {exp.role}
                  {exp.current && (
                    <span style={{
                      fontSize: "10px", padding: "1px 7px",
                      border: "1px solid rgba(57,211,83,0.3)",
                      borderRadius: "20px", color: "var(--accent)",
                      background: "rgba(57,211,83,0.06)",
                    }}>
                      current
                    </span>
                  )}
                </div>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ fontSize: "11px", color: "var(--text-dim)", background: "#161616", padding: "3px 10px", borderRadius: "4px", border: "1px solid var(--border)" }}>
                  {exp.period}
                </div>
                <div style={{ fontSize: "10px", color: "var(--text-dim)", marginTop: "4px" }}>
                  {exp.location}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "var(--border)", margin: "14px 0" }} />

            {/* Bullets */}
            <ul style={{ listStyle: "none" }}>
              {exp.bullets.map((b, j) => (
                <li key={j} style={{
                  display: "flex", gap: "10px",
                  fontSize: "12px", color: "var(--text)",
                  marginBottom: "8px", lineHeight: 1.8,
                }}>
                  <span style={{ color: "var(--accent)", opacity: 0.5, flexShrink: 0, marginTop: "1px" }}>›</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </section>
);

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
const Projects = () => (
  <section id="projects" style={{ padding: "80px clamp(20px,5vw,60px)", maxWidth: "960px", margin: "0 auto" }}>
    <SectionLabel>projects</SectionLabel>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: "14px",
    }}>
      {DATA.projects.map((p, i) => (
        <GlowCard
          key={i}
          glowColor="green"
          style={{
            padding: "22px",
            display: "flex", flexDirection: "column", gap: "12px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "14px", color: "#fff", lineHeight: 1.35,
            }}>
              {p.name}
            </div>
            {p.link && <a href={p.link} style={{ fontSize: "12px", color: "var(--text-dim)", padding: "2px 7px", border: "1px solid var(--border)", borderRadius: "3px" }}>↗</a>}
          </div>
          <p style={{ fontSize: "12px", color: "var(--text)", lineHeight: 1.8, flex: 1 }}>{p.desc}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
            {p.tech.map(t => <AccentTag key={t}>{t}</AccentTag>)}
          </div>
        </GlowCard>
      ))}
    </div>
  </section>
);

// ─── EDUCATION ───────────────────────────────────────────────────────────────
const Education = () => (
  <section id="education" style={{ padding: "80px clamp(20px,5vw,60px)", maxWidth: "960px", margin: "0 auto" }}>
    <SectionLabel>education & certifications</SectionLabel>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: "48px",
    }}>
      {/* Degrees */}
      <div>
        <div style={{
          fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: "22px",
        }}>
          degrees
        </div>
        {DATA.education.map((e, i) => (
          <div key={i} style={{
            paddingBottom: "22px", marginBottom: "22px",
            borderBottom: i < DATA.education.length - 1 ? "1px solid var(--border-subtle)" : "none",
          }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "14px", color: "#fff" }}>
              {e.institution}
            </div>
            <div style={{ fontSize: "12px", color: "var(--text)", marginTop: "4px" }}>{e.degree}</div>
            <div style={{ fontSize: "11px", color: "var(--text-dim)", marginTop: "6px" }}>
              {e.period} · {e.location}
            </div>
          </div>
        ))}
      </div>

      {/* Certs */}
      <div>
        <div style={{
          fontSize: "10px", color: "var(--text-dim)", letterSpacing: "0.18em",
          textTransform: "uppercase", marginBottom: "22px",
        }}>
          certifications
        </div>
        {DATA.certifications.map((c, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingBottom: "14px", marginBottom: "14px",
            borderBottom: i < DATA.certifications.length - 1 ? "1px solid var(--border-subtle)" : "none",
          }}>
            <div>
              <div style={{
                fontSize: "13px", color: "var(--text)",
                display: "flex", alignItems: "center", gap: "8px",
              }}>
                {c.name}
                
              </div>
              <div style={{ fontSize: "11px", color: "var(--text-dim)", marginTop: "2px" }}>{c.issuer}</div>
            </div>
            <div style={{ fontSize: "11px", color: "var(--text-dim)", flexShrink: 0, marginLeft: "10px" }}>{c.year}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CONTACT ─────────────────────────────────────────────────────────────────
const Contact = () => (
  <section id="contact" style={{
    padding: "80px clamp(20px,5vw,60px) 100px",
    maxWidth: "960px", margin: "0 auto",
  }}>
    <SectionLabel>contact</SectionLabel>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "56px", alignItems: "start",
    }}>
      <div>
        <p style={{ fontSize: "14px", color: "var(--text)", lineHeight: 2.0, marginBottom: "30px" }}>
          Open to IT and network engineering roles in Brisbane. If you're hiring, building something interesting, or just want to talk networking — send a message.
        </p>
        <StarButton href={`mailto:${DATA.email}`}>
          → send email
        </StarButton>
      </div>

      <div style={{
        border: "1px solid var(--border)", borderRadius: "5px",
        overflow: "hidden", background: "var(--surface)",
      }}>
        {[
          ["email", DATA.email, `mailto:${DATA.email}`],
          ["phone", DATA.phone, `tel:${DATA.phone}`],
          ["linkedin", "/in/fardinfarhan", DATA.linkedin],
          ["github", `@${DATA.handle}`, DATA.github],
          ["location", "Brisbane, QLD, AU", null],
        ].map(([k, v, href], i, arr) => (
          <div key={k} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "10px 14px",
            borderBottom: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
            fontSize: "11px",
          }}>
            <span style={{ color: "var(--text-dim)" }}>{k}</span>
            {href
              ? <a href={href} style={{ color: "var(--text)" }}>{v}</a>
              : <span style={{ color: "var(--text)" }}>{v}</span>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── FOOTER ──────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={{
    borderTop: "1px solid var(--border)",
    padding: "18px clamp(20px,5vw,60px)",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    fontSize: "10px", color: "var(--text-dim)", flexWrap: "wrap", gap: "8px",
  }}>
    <span><span style={{ color: "var(--accent)" }}>ffa</span> — Fardin Farhan Ahmed</span>
    <span>Brisbane, AU · {new Date().getFullYear()}</span>
  </footer>
);

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <>
      <FontLoader />
      <style>{css}</style>
      <div className="scanline" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
