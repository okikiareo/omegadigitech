"use client";

import "./about.css";

export default function About() {
  return (
    <section className="alt-section">
      <div className="alt-container">

        {/* ── Left: Image ── */}
        <div className="alt-image-col">
          <div className="alt-image-wrap">
            <div className="alt-image-accent" aria-hidden="true" />
             <img src="/founder.jpg" alt="" />
          </div>
        </div>

        {/* ── Right: Content ── */}
        <div className="alt-content">
          <h2 className="alt-heading">
            Detailed and easy <span className="alt-highlight">About us</span>{" "}
            section designed for your business
          </h2>

          <p className="alt-body">
            We are a technology company built on the belief that great software
            changes businesses. We provide IT services, digital solutions, and
            strategic consultancy — giving you the ability to move fast, scale
            smart, and stay ahead.
          </p>

          {/* Step indicator — matches the design exactly */}
          <div className="alt-steps">
            <div className="alt-step">
              <div className="alt-step-dot alt-step-dot--active" />
              <span className="alt-step-label">Our Mission</span>
            </div>
            <div className="alt-step-line" />
            <div className="alt-step">
              <div className="alt-step-dot" />
              <span className="alt-step-label">Our Vision</span>
            </div>
            <div className="alt-step-line" />
            <div className="alt-step">
              <div className="alt-step-dot" />
              <span className="alt-step-label">Our Values</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}