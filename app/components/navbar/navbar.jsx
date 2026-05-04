'use client';
import { useState } from 'react';
import Link from 'next/link';
import './navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link href="/" onClick={closeMenu} className='flex'>
          <img src="/logo.png" alt="" />
          <h2 className='logo-text'>Omega Digital <br /> Tech Inovations</h2>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>
          <li><Link href="/programs" onClick={closeMenu}>Programs</Link></li>
          <li><Link href="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
        </ul>

        {/* CTA Button */}
        {/* <div className={`navbar-cta ${isMenuOpen ? 'active' : ''}`}>
          <button className="btn-primary">Get Started</button>
        </div> */}
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-overlay" onClick={closeMenu}></div>
      )}
    </nav>
  );
}