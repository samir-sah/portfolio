import React from "react";

const ROW_ONE_SKILLS = [
  "React.js", "Next.js", "TypeScript", "JavaScript",
  "Tailwind CSS", "Framer Motion", "HTML5 & CSS3",
];

const ROW_TWO_SKILLS = [
  "Node.js", "Express",
  "PostgreSQL", "Git & GitHub", "Vercel"
];

export default function SkillsSection() {
  return (
    <>
      <style>{`
        /* Fade up animation for the header */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        
        .skills-header-fu {
          animation: fadeUp 0.8s ease both;
          animation-timeline: view();
          animation-range: entry 10% cover 30%;
        }

        /* Marquee Animations */
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 24px;
          /* Fading edges for a cleaner look */
          mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 10%,
            black 90%,
            transparent
          );
        }

        .marquee-track {
          display: flex;
          width: max-content;
          gap: 16px;
          padding: 4px 0;
        }

        /* Adjusted timings for a smooth, elegant glide */
        .track-left {
          animation: scrollLeft 35s linear infinite; 
        }

        .track-right {
          animation: scrollRight 30s linear infinite;
        }

        /* Pause animation on hover for better readability */
        .marquee-container:hover .marquee-track {
          animation-play-state: paused;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          border: 0.5px solid #e5e7eb;
          border-radius: 4px; 
          background: #ffffff;
          font-family: 'DM Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111;
          transition: all 0.2s ease;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
        }

        .skill-pill:hover {
          border-color: #111;
          color: #111;
          background: #f9fafb;
          transform: translateY(-2px);
        }
      `}</style>

      <section
        id="skills"
        style={{
          width: "100%",
          padding: "100px 0",
          backgroundColor: "rgba(255, 255, 255, 0.2)", 
        }}
      >
        
        <div style={{ width: "100%", padding: "0 8%" }}>

          <div style={{ maxWidth: 1100, margin: "0 auto" }}>

            <div style={{ marginBottom: "56px" }} className="skills-header-fu">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  display: "block",
                  marginBottom: "16px",
                }}
              >
                Capabilities
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 400,
                  color: "#111",
                  lineHeight: 1.1,
                  margin: 0,
                }}
              >
                The toolkit.
              </h2>
            </div>

          </div>
        </div>
        <div className="marquee-container">
          
          <div className="marquee-track track-left">
            {[
              ...ROW_ONE_SKILLS, 
              ...ROW_ONE_SKILLS, 
              ...ROW_ONE_SKILLS, 
              ...ROW_ONE_SKILLS
            ].map((skill, index) => (
              <div key={`row1-${index}`} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>

          <div className="marquee-track track-right">
            {[
              ...ROW_TWO_SKILLS, 
              ...ROW_TWO_SKILLS, 
              ...ROW_TWO_SKILLS, 
              ...ROW_TWO_SKILLS, 
              ...ROW_TWO_SKILLS, 
              ...ROW_TWO_SKILLS
            ].map((skill, index) => (
              <div key={`row2-${index}`} className="skill-pill">
                {skill}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}