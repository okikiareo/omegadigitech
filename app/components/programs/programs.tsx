"use client";

import "./program.css";

export default function ProgramHighlight() {
  return (
    <section className="program-section">
      <div className="program-container">

        {/* LEFT CONTENT */}
        <div className="program-content">
          <p className="program-eyebrow">UPCOMING PROGRAM</p>

          <h2 className="program-heading">
            Become a Programme Instructor
            <br />
            <span>Impact students with skills that matter</span>
          </h2>

          <p className="program-desc">
            Are you passionate about impacting knowledge and raising young minds 
            in gaining tech skills? <br />
            Omega Digital is currently recruiting skilled and dedicated instructors 
            for our digital skills bootcamp.
          </p>

          <ul className="program-list">
            <li>✔ AI & Machine Learning</li>
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