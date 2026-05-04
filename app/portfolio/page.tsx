"use client";

import { useState } from "react";
import "./portfolio.css";

const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "Web",
    image: "/project.jpg",
  },
  {
    id: 2,
    title: "Healthcare Analytics",
    category: "Data",
    image: "/project4.jpg",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "App",
    image: "/project7.jpg",
  },
  {
    id: 4,
    title: "E-commerce UI System",
    category: "Design",
    image: "/project2.png",
  },
  {
    id: 5,
    title: "Crypto Dashboard",
    category: "Web",
    image: "/project8.jpg",
  },
  {
    id: 6,
    title: "Sales Data Insights",
    category: "Data",
    image: "/project9.jpg",
  },
];

const filters = ["All", "Web", "App", "Design", "Data"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="portfolio-page">
      <div className="portfolio-container">

        {/* HEADER */}
        <div className="portfolio-header">
          <h1>Our Work</h1>
          <p>
            A selection of projects across design, development, and data —
            crafted to solve real-world problems.
          </p>
        </div>

        {/* FILTERS */}
        <div className="portfolio-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={active === f ? "active" : ""}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="portfolio-grid">
          {filteredProjects.map((p) => (
            <div key={p.id} className="portfolio-card">

              <div className="portfolio-image">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="portfolio-overlay">
                <h3>{p.title}</h3>
                <span>{p.category}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}