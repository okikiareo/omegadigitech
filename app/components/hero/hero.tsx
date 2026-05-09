"use client";
import { useState, useEffect } from "react";
import "./hero.css";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Array of placeholder images - replace with your actual images
  const slides = [
    {
      // url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=700&fit=crop',
      url: "/hero2.jpg",
      alt: "Technology consulting",
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=700&fit=crop",
      alt: "Team collaboration",
    },
    {
      // url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=700&fit=crop',
      url: "/hero1.jpg",
      alt: "Digital solutions",
    },
  ];

  // Auto-slide effect - changes every 2 seconds
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Complete IT Solutions for all Businesses
          </h1>

          <p className="hero-description">
            The powerful technology partner that is designed to meet the needs
            of businesses & startups of all sizes, enabling you to transform
            digitally and innovate however you choose.
          </p>

          <div className="hero-buttons">
            <a href="#cta" className="btn-get-started">Get Started</a>
            <a href="/programs" className="btn-learn-more">Explore </a>
          </div>

          <div className="hero-badge">
            <span className="badge-icon">✓</span>
            <span className="badge-text">Certified Technology Partner</span>
          </div>
          {/* 
          <p className="hero-subtitle">
            TechSolutions is a complete IT service provider made for businesses in Africa. 
            It is a reliable, secure, and innovative technology platform that makes digital 
            transformation and business growth simpler.
          </p> */}
        </div>

        {/* Right Image Slider */}
        <div className="hero-image-section">
          <div className="image-container">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <img src={slide.url} alt={slide.alt} />
              </div>
            ))}

            {/* Floating UI Card Overlay */}
            <div className="floating-card">
              <div className="card-stats">
                <div className="stat-item">
                  <span className="stat-icon">🚀</span>
                  <span className="stat-label">Cloud Solutions</span>
                  <span className="stat-value positive">+25%</span>
                </div>
              </div>
            </div>

            {/* Bottom Notification Card */}
            <div className="notification-card">
              <span className="notif-icon">✨</span>
              <span className="notif-text">Project deployed successfully</span>
              <span className="notif-badge">Live</span>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
