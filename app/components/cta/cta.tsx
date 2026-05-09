"use client";

import "./cta.css";

export default function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-container">

        <div className="cta-box">

          {/* Text */}
          <div className="cta-content">
            <p className="cta-eyebrow">LET'S WORK</p>

            <h2 className="cta-heading">
              Got an idea?
              <br />
              <span>Let’s build something great.</span>
            </h2>

            <p className="cta-subtext">
              Whether you're launching a startup, scaling a product, or improving an existing system — we can help bring your vision to life.
            </p>

            {/* Buttons */}
            <div className="cta-actions">
              <a href="https://wa.me/2348130240604" target="blank" className="cta-btn primary">
                Start a Project →
              </a>

              <a href="/portfolio" className="cta-btn secondary">
                View Our Work
              </a>
            </div>
          </div>

          {/* Decorative glow */}
          <div className="cta-glow" />

        </div>

      </div>
    </section>
  );
}