"use client";

import "./services.css";

const services = [
  {
    title: "Web/App Development",
    subtitle: "Software Solutions",
  },
  {
    title: "Design & Digital Services",
    subtitle: "UI/UX & Branding",
  },
  {
    title: "Social Media Management",
    subtitle: "Growing Sovial Presence",
  },
  {
    title: "Data & Analytics",
    subtitle: "Insights & Reporting",
  },
  {
    title: "AI Automations",
    subtitle: "Integration Services",
  },
  {
    title: "IT Consultancy",
    subtitle: "Strategy & Advisory",
  },
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">

        {/* LEFT */}
        <div className="services-intro">
          <p className="services-eyebrow">WHAT WE DO</p>

          <h2 className="services-heading">
            Services for <span className="services-highlight">modern businesses</span>
          </h2>

          <p className="services-body">
            We design, build, and scale digital products from infrastructure to user experience.
          </p>

          <a href="https://wa.me/2348130240604" target="blank" className="services-cta">
            Get Started →
          </a>
        </div>

        {/* RIGHT GRID */}
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="services-card" key={i}>

              <div className="services-card-top">
                <h3 className="services-card-title">{s.title}</h3>
                <div className="services-card-icon" />
              </div>

              <p className="services-card-sub">{s.subtitle}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}