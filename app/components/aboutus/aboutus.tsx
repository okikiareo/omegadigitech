"use client";

import { useEffect, useRef, useState } from "react";
import "./about.css";

const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "340+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "60+", label: "Expert Consultants" },
];

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "IT Services",
    desc: "End-to-end infrastructure management, cloud migration, and enterprise-grade support.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Digital Services",
    desc: "From product design to full-stack development — we build digital experiences that convert.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Consultancy",
    desc: "Strategic technology roadmaps tailored to your growth stage and industry demands.",
  },
];

export default function AboutUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`about-section ${visible ? "about-visible" : ""}`} ref={sectionRef}>
      <div className="about-grid-bg" aria-hidden="true" />
      <div className="about-blob" aria-hidden="true" />

      <div className="about-container">

        {/* ── Left column ── */}
        <div className="about-image-col">
          <div className="about-image-wrap">
            <div className="about-image-border" aria-hidden="true" />
            <div className="about-image-inner">
              {/* Replace this div with <Image src="..." /> when ready */}
              <div className="about-img-placeholder">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" opacity="0.35">
                  <rect x="4" y="4" width="56" height="56" rx="4" stroke="white" strokeWidth="2"/>
                  <circle cx="32" cy="24" r="10" stroke="white" strokeWidth="2"/>
                  <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="white" strokeWidth="2"/>
                </svg>
                <p>Replace with your team photo</p>
              </div>
            </div>
            <div className="about-badge">
              <span className="about-badge-num">12</span>
              <span className="about-badge-text">Years<br/>in Tech</span>
            </div>
          </div>

          <div className="about-stats-row">
            {stats.map((s, i) => (
              <div className="about-stat" key={i} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
                <span className="about-stat-val">{s.value}</span>
                <span className="about-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="about-content">
          <p className="about-eyebrow">WHO WE ARE</p>

          <h2 className="about-heading">
            Technology that<br />
            <span className="about-highlight">moves your</span><br />
            business forward
          </h2>

          <p className="about-body">
            We are a results-driven technology firm combining deep IT expertise,
            creative digital craftsmanship, and sharp business consultancy.
            Since 2013, we&apos;ve helped startups and enterprises alike harness
            technology as their competitive edge — not just an operational tool.
          </p>

          <p className="about-body">
            Our multidisciplinary teams work at the intersection of strategy,
            design, and engineering to deliver solutions that are built to scale,
            built to last, and built for real people.
          </p>

          <div className="about-pillars">
            {pillars.map((p, i) => (
              <div className="about-pillar" key={i} style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
                <span className="about-pillar-icon">{p.icon}</span>
                <div>
                  <h4 className="about-pillar-title">{p.title}</h4>
                  <p className="about-pillar-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-ctas">
            <a href="#services" className="about-btn-primary">Our Services</a>
            <a href="#contact" className="about-btn-ghost">Let&apos;s Talk →</a>
          </div>
        </div>

      </div>
    </section>
  );
}