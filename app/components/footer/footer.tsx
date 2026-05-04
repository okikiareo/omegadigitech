"use client";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Top */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">Omega Digital Tech Innovations</h3>
            <p className="footer-tagline">
              Powering businesses and startups building modern digital experiences, scalable systems, and reliable tech solutions.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links">

            <div>
              <h4>Company</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/portfolio">Portfolio</a></li>
                <li><a href="/programs">Programs</a></li>
                <li><a href="">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#">Web/App Development</a></li>
                <li><a href="#">Branding</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Consulting</a></li>
              </ul>
            </div>

            <div>
              <h4>Contact</h4>
              <ul>
                <li>Lagos, Nigeria</li>
                <li>+2348130240604</li>
                <li>omegadigitaltechnologies.com</li>
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} OmegaTech. All rights reserved.</p>

          <div className="footer-socials">
            <a href="https://x.com/OmegaDigitals" target="blank">Twitter</a>
            <a href="https://www.linkedin.com/company/omega-digital-technology-innovations" target="blank">LinkedIn</a>
            <a href="#">Instagram</a>
          </div>
        </div>

      </div>
    </footer>
  );
}