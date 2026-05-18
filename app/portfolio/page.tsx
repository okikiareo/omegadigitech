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
    title: "Hobbly Website",
    category: "Design",
    image: "/design1.jpg",
  },
  {
    id: 4,
    title: "Crypto Currency",
    category: "Design",
    image: "/design.jpg",
  },
  {
    id: 5,
    title: "Travel & Tourism",
    category: "Design",
    image: "/design2.jpg",
  },
  {
    id: 6,
    title: "Mobile Banking App",
    category: "Web",
    image: "/project7.jpg",
  },
  {
    id: 7,
    title: "E-commerce UI System",
    category: "Web",
    image: "/project2.png",
  },
  {
    id: 8,
    title: "Crypto Dashboard",
    category: "Web",
    image: "/project8.jpg",
  },
  {
    id: 9,
    title: "Sales Data Insights",
    category: "Data",
    image: "/project9.jpg",
  },
  {
    id: 10,
    title: "Binx AI Chat",
    category: "App",
    image: "/app7.jpg",
  },
    {
    id: 11,
    title: "Rent A car",
    category: "App",
    image: "/app.jpg",
  },  {
    id: 12,
    title: "Wiki ride Hailing-App",
    category: "App",
    image: "/app1.jpg",
  },
  {
    id: 13,
    title: "Rydes By Mom  ",
    category: "App",
    image: "/app2.jpg",
  },
  {
    id: 14,
    title: "Rent A Property",
    category: "App",
    image: "/app3.jpg",
  },
  {
    id: 15,
    title: "Mediic AI",
    category: "App",
    image: "/app5.jpg",
  },
];

const filters = ["All", "Web", "App", "Design", "Data"];

export default function PortfolioPage() {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section className="portfolio-page">
      <div className="portfolio-container">
        {/* HEADER */}
        <div className="portfolio-header">
          <h1>Our Work</h1>
          <p>
            A selection of projects across design, development, and data           crafted to solve real-world problems.
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
