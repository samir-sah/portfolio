import React from "react";
import logo1 from "../../assets/logo.jpg";
import logo3 from "../../assets/logo3.jpg"

const PROJECTS_DATA = [
  {
    id: 1,
    title: "The Three-Eyed Raven",
    description: "Unified Surveillance Framework for Human Detection and Re-Identification across Aerial and Ground Views",
    tech: ["FastApi", "Python", "PostGres"],
    link: "#",
    image:logo1, 
  },
  {
    id: 2,
    title: "Currency-Convertor",
    description: "Built a real-time currency converter using React that integrates with external exchange rate APIs to provide accurate and up-to-date currency conversions, featuring a responsive UI and seamless user experience.",
    tech: ["React.js", "Tailwind", "API Integration"],
    link: "#",
    image: logo3,
  },
  {
    id: 3,
    title: "Password Generator",
    description: "Built a dynamic password generator using React that allows users to generate strong and customizable passwords with options for length, symbols, numbers, and uppercase/lowercase characters.",
    tech: ["JavaScript", "React", "hooks"],
    link: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop", 
  }
];

export default function ProjectsSection() {
  return (
    <>
      <style>{`
        @keyframes projectFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        
        .proj-fu { 
          animation: projectFadeUp 0.8s ease both; 
          animation-timeline: view();
          animation-range: entry 10% cover 30%; /* Triggers when scrolled into view */
        }

        .proj-card {
          display: flex;
          flex-direction: column;
          gap: 24px;
          group;
        }

        .proj-img-wrapper {
          width: 100%;
          aspect-ratio: 4/3;
          background-color: #f3f4f6;
          border-radius: 4px;
          overflow: hidden;
          position: relative;
          border: 0.5px solid #e5e7eb;
        }

        .proj-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .proj-card:hover .proj-img {
          transform: scale(1.04);
        }

        .proj-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #111;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
          padding-bottom: 2px;
        }

        .proj-link:hover {
          border-color: #111;
        }
      `}</style>

      <section
        id="projects"
        style={{
          width: "100%",
          padding: "120px 8%",
       
        }}
      >
        <div
          style={{
            maxWidth: 1100, 
            margin: "0 auto",
          }}
        >
          
          <div style={{ marginBottom: "64px" }} className="proj-fu">
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
              Selected Works
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
              Crafted with purpose.
            </h2>
          </div>

          
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "64px 40px", // 64px vertical gap, 40px horizontal gap
            }}
          >
            {PROJECTS_DATA.map((project, index) => (

                <article key={project.id} className="proj-card proj-fu" style={{ animationDelay: `${index * 0.1}s` }}>                
                
                <a href={project.link} className="proj-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="proj-img"
                    loading="lazy"
                  />
                </a>

                
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <h3
                      style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "24px",
                        color: "#111",
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    <a href={project.link} className="proj-link">
                      View ↗
                    </a>
                  </div>

                  
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "13px",
                      color: "#6b7280",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "8px" }}>
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "9px",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: "#9ca3af",
                          padding: "4px 8px",
                          border: "0.5px solid #e5e7eb",
                          borderRadius: "2px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}