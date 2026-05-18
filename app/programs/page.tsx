"use client";

import "./programs.css";

const programmes = [
  {
    id: 1,
    badge: "Digital Literacy Initiative",
    title: "Omega Digital Skills Bootcamp",
    duration: "3 Days Intensive Training",
    mode: "On-Site School Training",
    // price: "₦150,000",
    showApplyButton: true,
    applyUrl: "https://forms.gle/pLzNaCycknxxzpzU7",
    // ✅ Drop flyer image
    flyerImage: "/program.jpg",
    gradient:
      "linear-gradient(135deg,rgb(10, 14, 26) 0%,rgb(10, 30, 61) 60%,rgba(30, 49, 224, 0.2) 100%)",
    accentColor: "#e01e6e",
    overview: `Omega Digital Literacy Initiative is a social-impact education programme designed to equip secondary school students with practical digital skills needed in today’s technology-driven world. Through a structured and hands-on bootcamp delivered in partner schools, students gain exposure to real-world digital tools, innovation, and career-ready skills.`,
    whatYouLearn: [
      "AI & Machine Learning",
      " Mobile App Development",
      "Product Design",
      "Graphic Design",
    ],
    whoFor:
      "This programme is designed for secondary school students who want to gain practical digital skills, improve career readiness, and explore opportunities in technology.",
      extraInfo: `The bootcamp is delivered through interactive facilitator-led sessions within partner schools, creating an engaging learning experience while helping schools position themselves as innovation-driven institutions.`,
    },
    {
      id: 2,
      badge: "Founders Academy",
      title: "Omega Founders Academy",
      duration: "Structured Founder Development Programme",
      mode: "Mentorship & Practical Training",
      showApplyButton: false,
      // applyUrl: "https://forms.gle/pLzNaCycknxxzpzU7",
      // flyerImage: "/founders-academy.jpg",
      gradient:
        "linear-gradient(135deg,rgb(18, 18, 18) 0%,rgb(28, 35, 52) 60%,rgba(59, 130, 246, 0.2) 100%)",
      accentColor: "#3b82f6",
    
      overview: `Omega Founders Academy is a structured learning and support programme designed for aspiring entrepreneurs, early-stage founders, and young professionals looking to build sustainable businesses and innovation-driven ventures. The programme combines practical training, mentorship, and community support to help participants move from ideas to execution.`,
      whatYouLearn: [
        "Business Development & Strategy",
        "Startup Execution",
        "Entrepreneurship & Innovation",
        "Growth & Leadership Skills",
      ],
    
      whoFor:
        "This programme is designed for recent graduates, early-stage startup founders, and young professionals seeking practical entrepreneurial pathways and business growth opportunities.",
    
      extraInfo: `Participants gain access to experienced mentors, execution-focused learning sessions, and a community of innovators that supports collaboration, growth, and long-term business development.`,
    },
    {
      id: 3,
      badge: "Innovation Labs",
      title: "Omega Innovation Labs",
      duration: "Startup Incubation & Venture Support",
      mode: "Idea Validation & Product Development",
      showApplyButton: false,
      // applyUrl: "https://forms.gle/pLzNaCycknxxzpzU7",
      // flyerImage: "/innovation-lab.jpg",
      gradient:
        "linear-gradient(135deg,rgb(8, 12, 20) 0%,rgb(22, 58, 45) 60%,rgba(16, 185, 129, 0.2) 100%)",
      accentColor: "#10b981",
    
      overview: `Omega Innovation Labs is the incubation arm of Omega, focused on helping innovators and founders transform raw ideas into scalable, structured, and impactful businesses. Through mentorship, product support, and business development guidance, participants receive the clarity and execution support needed to grow sustainable ventures.`,
    
      whatYouLearn: [
        "Idea Validation & Refinement",
        "Business Model Development",
        "Product Development Support",
        "Startup Growth & Scaling",
      ],
    
      whoFor:
        "This programme is designed for innovators, startup founders, and aspiring entrepreneurs looking to refine ideas, develop products, and build scalable businesses.",
    
      extraInfo: `The Labs provide hands-on support, mentorship access, and strategic guidance that help early-stage ventures move from concept to execution while contributing to Africa’s growing innovation ecosystem.`,
    },
];

type Programme = (typeof programmes)[0];

function FlyerBlock({ programme }: { programme: Programme }) {
  /* ── Real flyer image ── */
  if (programme.flyerImage) {
    return (
      <div className="prog-flyer prog-flyer--image">
        <img
          src={programme.flyerImage}
          alt={`${programme.title} flyer`}
          className="prog-flyer-img"
        />
      </div>
    );
  }

  /* ── Fallback generated flyer (shown until you add a real image) ── */
  return (
    <div className="prog-flyer" style={{ background: programme.gradient }}>
      <div className="prog-flyer-grid" aria-hidden="true" />

      <div className="prog-flyer-top">
        <span
          className="prog-flyer-badge"
          style={{
            background: `${programme.accentColor}22`,
            color: programme.accentColor,
            border: `1px solid ${programme.accentColor}44`,
          }}
        >
          {programme.badge}
        </span>
        {/* <span className="prog-flyer-logo">TechCo</span> */}
      </div>

      <div className="prog-flyer-centre">
        <h3 className="prog-flyer-title">{programme.title}</h3>
        <div className="prog-flyer-meta">
          <span className="prog-flyer-meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
            {programme.duration}
          </span>
          <span className="prog-flyer-meta-item">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <path d="M8 21h8M12 17v4" />
            </svg>
            {programme.mode}
          </span>
        </div>
      </div>

      {/* <div className="prog-flyer-bottom">
        <span className="prog-flyer-price-label">Programme fee</span>
        <span className="prog-flyer-price" style={{ color: programme.accentColor }}>
          {programme.price}
        </span>
      </div> */}

      <span className="prog-flyer-watermark">0{programme.id}</span>
    </div>
  );
}

function WriteupBlock({ programme }: { programme: Programme }) {
  return (
    <div className="prog-writeup">
      {/* <span
        className="prog-writeup-badge"
        style={{
          background: "#2196f3",
          color: "#fff",
          border: `1px solid ${programme.accentColor}33`,
        }}
      >
        {programme.badge}
      </span> */}

      <h2 className="prog-writeup-title">{programme.title}</h2>

      <div className="prog-writeup-pills">
        <span className="prog-writeup-pill">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {programme.duration}
        </span>
        <span className="prog-writeup-pill">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
          </svg>
          {programme.mode}
        </span>
        {/* <span
          className="prog-writeup-pill prog-writeup-pill--price"
          style={{
            color: programme.accentColor,
            borderColor: `${programme.accentColor}44`,
            background: `${programme.accentColor}10`,
          }}
        >
          {programme.price}
        </span> */}
      </div>

      <div className="prog-writeup-content">
  <p className="prog-writeup-overview">{programme.overview}</p>

  <p className="prog-writeup-overview">
    {programme.extraInfo}
  </p>
</div>

      <div className="prog-writeup-section">
        <h4 className="prog-writeup-section-title">Proficient In</h4>
        <ul className="prog-writeup-list">
          {programme.whatYouLearn.map((item, i) => (
            <li key={i} className="prog-writeup-list-item">
              <span className="prog-writeup-dot" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="prog-writeup-section">
        <h4 className="prog-writeup-section-title">Target Beneficiaries</h4>
        <p className="prog-writeup-who">{programme.whoFor}</p>
      </div>
      {programme.showApplyButton && (
      <a
        href={programme.applyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="prog-apply-btn"
      >
        Apply for this programme
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
      )}
    </div>
  );
}

export default function Programmes() {
  return (
    <main className="programmes-page">
      <div className="programmes-hero">
        <p className="programmes-eyebrow">
        EXPLORE OUR PROGRAMMES
        </p>
          <h1 className="programmes-hero-title">
          Empowering Future
<span className="programmes-hero-highlight"> Innovators</span>
          </h1>
        <p className="programmes-hero-sub">
        Practical and impact-driven programmes designed to equip learners,
    creators, and future founders with valuable digital skills, real-world
    exposure, and opportunities for growth in today’s evolving world.
        </p>
      </div>

      <div className="programmes-list">
        {programmes.map((p, i) => {
          const flyerFirst = i % 2 === 0;
          return (
            <div key={p.id} className="prog-entry">
              <div
                className={`prog-row ${flyerFirst ? "" : "prog-row--reverse"}`}
              >
                <FlyerBlock programme={p} />
                <WriteupBlock programme={p} />
              </div>
              {i < programmes.length - 1 && (
                <div className="prog-divider" aria-hidden="true" />
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
