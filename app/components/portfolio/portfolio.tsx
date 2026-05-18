"use client";

import { useState } from "react";
import "./portfolio.css";

const projects = [
  {
    id: 1,
    tag: "App Development",
    title: "Binx AI Chat",
    desc: "Binx AI is a groundbreaking WhatsApp chatbot developed  to elevate your daily communication experience.",
    year: "2024",
    stack: ["React Native", "Node.js", "PostgreSQL"],
    color: "#e01e6e",
    number: "01",
    image: "/app7.jpg",
    url: "https://usebinx.com",
  },
  {
    id: 2,
    tag: "Consultancy & Cloud",
    title: "MedCore Infrastructure",
    desc: "Cloud migration for a healthcare provider serving 12 hospitals.",
    year: "2024",
    stack: ["AWS", "Terraform", "Docker"],
    color: "#3b6fd4",
    number: "02",
    image: "/project.jpg",
  },
  {
    id: 3,
    tag: "Digital & Branding",
    title: "Hobbly For Kids",
    desc: "Kids center for exploring hobbies & learn different skills.",
    year: "2023",
    stack: ["React", "Sanity", "Stripe"],
    color: "#f59e0b",
    number: "03",
    image: "/design1.jpg",
  },
];

export default function Portfolio() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="port-section">
      <div className="port-container">

        {/* Header */}
        <div className="port-header">
          <div>
            <p className="port-eyebrow">OUR WORK</p>
            <h2 className="port-heading">
              A few things<br />
              we&apos;re <span className="port-highlight">proud of</span>
            </h2>
          </div>

          <a href="/portfolio" className="port-link-all">
            View all projects →
          </a>
        </div>

        {/* GRID */}
        <div className="port-list">
          {projects.map((p) => (
            <a
            href={p.url}
              key={p.id}
              className="port-item"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
            >

              {/* Image */}
              <div className="port-item-image">
                <img src={p.image} alt={p.title} />
                <span className="port-item-num">{p.number}</span>
              </div>

              {/* Content */}
              <div className="port-item-body">
                <div className="port-item-meta">
                  <span className="port-item-tag">{p.tag}</span>
                  <span className="port-item-year">{p.year}</span>
                </div>

                <h3 className="port-item-title">{p.title}</h3>
                <p className="port-item-desc">{p.desc}</p>

                <div className="port-item-stack">
                  {p.stack.map((tech) => (
                    <span key={tech} className="port-item-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}