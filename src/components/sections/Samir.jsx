import profileImg from "../../assets/profile.jpeg"
export default function BrandSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&display=swap');

        @keyframes brandFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .bc-fu  { animation: brandFadeUp 0.7s ease both; }
        .bc-fu1 { animation-delay: 0.05s; }
        .bc-fu2 { animation-delay: 0.18s; }
        .bc-fu3 { animation-delay: 0.30s; }
        .bc-fu4 { animation-delay: 0.42s; }

        .bc-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border: 0.5px solid #e5e7eb;
          padding: 5px 10px;
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6b7280;
        }

        .img-card {
          padding: 12px;
          background: #ffffff;
          border: 0.5px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 20px 40px -20px rgba(0,0,0,0.05);
          width: 100%;
          max-width: 320px;
        }
      `}</style>

      {/* Main container: Full-width and Translucent Background */}
      <div
        style={{
          position: "relative",
          width: "100%",
          background: "rgba(255, 255, 255, 0.2)",
          padding: "120px 8% 64px",
          fontFamily: "'DM Serif Display', serif",
        }}
      >
        {/* Content Flex Wrapper */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1100, // Reduced from 1400 to keep the layout cohesive
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center", // Changed from space-between to center
            gap: "80px", // Set a fixed, elegant gap between columns
          }}
        >
          {/* Left Column: Typography */}
          <div style={{ flex: "1 1 400px" }}>
            {/* Top label */}
            <div className="bc-fu bc-fu1" style={{ marginBottom: 20 }}>
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#d1d5db",
                }}
              >
                Portfolio — 2026
              </span>
            </div>

            {/* Name */}
            <h2
              className="bc-fu bc-fu2"
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: "clamp(56px, 8vw, 88px)",
                fontWeight: 900,
                color: "#111",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                margin: "0 0 12px",
              }}
            >
              Samir
            </h2>

            {/* Role */}
            <p
              className="bc-fu bc-fu3"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#9ca3af",
                margin: "0 0 32px",
              }}
            >
              Designer &amp; Developer
            </p>

            {/* Description */}
            <p
              className="bc-fu bc-fu4"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 14,
                color: "#6b7280",
                lineHeight: 1.8,
                maxWidth: 480,
                margin: "0 0 40px",
              }}
            >
              Building things that live at the intersection of code and craft.
              See you at the court(badminton-court) xD.
            </p>

            {/* Dots + Chip + Location (Moved here) */}
            <div
              className="bc-fu bc-fu4"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 24,
              }}
            >
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                {[
                  { size: 5, opacity: 0.1 },
                  { size: 7, opacity: 0.18 },
                  { size: 9, opacity: 0.26 },
                ].map((d, i) => (
                  <span
                    key={i}
                    style={{
                      display: "block",
                      width: d.size,
                      height: d.size,
                      borderRadius: "50%",
                      background: "#111",
                      opacity: d.opacity,
                    }}
                  />
                ))}
              </div>
              <span className="bc-chip">Open to work ◆</span>
              
              {/* Relocated Location Indicator */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span
                  style={{
                    display: "block",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#10b981",
                    boxShadow: "0 0 8px rgba(16, 185, 129, 0.4)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6b7280",
                  }}
                >
                  Based in Bengaluru, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Picture Card */}
          <div
            className="bc-fu bc-fu3"
            style={{ flex: "0 1 340px", display: "flex", justifyContent: "center" }}
          >
            <div className="img-card transform transition-transform hover:scale-[1.02] duration-500 ease-out">
              {/* Image Container */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "4px",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={profileImg}
                  alt="Samir"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}