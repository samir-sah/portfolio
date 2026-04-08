const socialLinks = [
  { name: "GitHub",   href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "email",  href: "#" },
];

const navLinks = [
  { name: "Work",    href: "#" },
  { name: "About",   href: "#" },
  { name: "Contact", href: "#" },
];

export default function SocialsFooter() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        @keyframes sfFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sf-fu  { animation: sfFadeUp 0.7s ease both; }
        .sf-fu1 { animation-delay: 0.08s; }
        .sf-fu2 { animation-delay: 0.20s; }
        .sf-fu3 { animation-delay: 0.34s; }

        .sf-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 0.5px solid #e5e7eb;
          padding: 8px 14px;
          cursor: pointer;
          text-decoration: none;
          background: transparent;
          transition: border-color 0.28s ease, background 0.28s ease;
        }
        .sf-pill:hover {
          border-color: #111;
          background: #111;
        }

        .sf-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d1d5db;
          flex-shrink: 0;
          transition: transform 0.28s ease, background 0.28s ease;
        }
        .sf-pill:hover .sf-dot {
          transform: scale(1.5);
          background: #fff;
        }

        .sf-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6b7280;
          transition: color 0.28s ease;
        }
        .sf-pill:hover .sf-label { color: #fff; }

        .sf-nav-link {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .sf-nav-link:hover { color: #111; }

        @keyframes sfPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.3; }
        }
        .sf-pulse { animation: sfPulse 2s ease-in-out infinite; }
      `}</style>

      <div
        style={{
          background: "#fff",
          borderRadius: 12,
          border: "0.5px solid #f3f4f6",
          overflow: "hidden",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        {/* Socials section */}
        <div className="sf-fu sf-fu1" style={{ padding: "32px 32px 24px" }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c4c9d4",
              margin: "0 0 14px",
            }}
          >
            Find me on
          </p>

          {/* Social pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} className="sf-pill">
                <span className="sf-dot" />
                <span className="sf-label">{s.name}</span>
              </a>
            ))}
          </div>

          {/* Nav links */}
          <div className="sf-fu sf-fu2" style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
            {navLinks.map((n) => (
              <a key={n.name} href={n.href} className="sf-nav-link">
                {n.name}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "0.5px", background: "#f3f4f6", margin: "0 32px" }} />

        {/* Bottom bar */}
        <div
          className="sf-fu sf-fu3"
          style={{
            padding: "18px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c4c9d4",
              margin: 0,
            }}
          >
            &copy; {new Date().getFullYear()} Samir
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d1d5db" }}>
              Crafted with
            </span>
            <span className="sf-pulse" style={{ color: "#111", fontSize: 11, margin: "0 3px" }}>◆</span>
            <span style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d1d5db" }}>
              &amp; obsession
            </span>
          </div>

          <div style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d1d5db" }}>
            v2.0 — 2025
          </div>
        </div>
      </div>
    </>
  );
}
