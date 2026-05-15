"use client";

import "./program.css";

export default function ProgramHighlight() {
  return (
    <section className="program-section">
      <div className="program-container">

        {/* LEFT CONTENT */}
        <div className="program-content">
          <p className="program-eyebrow">OMEGA DIGITAL LITERACY INITIATIVE</p>

          <h2 className="program-heading">
            Become a Programme Instructor
            <br />
            <span>Impact students with skills that matter</span>
          </h2>

          <p className="program-desc">
  Omega Digital Literacy Initiative equips secondary school students with practical digital skills for today’s evolving world.
  <br />
  Through a hands-on 3-day bootcamp in partner schools, students gain experience with modern technology and digital tools.
</p>

          <ul className="program-list">
            <li>✔ Machine Learning & Artificial Intelligence</li>
            <li>✔ Mobile App Development</li>
            <li>✔ Product Design</li>
            <li>✔ Graphic Design</li>
          </ul>

          <div className="program-actions">
            <a href="https://forms.gle/pLzNaCycknxxzpzU7" target="blank" className="program-btn primary">
              Apply Now →
            </a>

            <a href="/programs" className="program-btn secondary">
              Ask Questions
            </a>
          </div>
        </div>

        {/* RIGHT FLYER */}
        <div className="program-image">
          <img src="/program.jpg" alt="Programme flyer" />
        </div>

      </div>
    </section>
  );
}