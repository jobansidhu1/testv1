import { useState } from 'react';
import logoImg from '../assets/Logo.png';

const Navbar = ({ activePage = 'home', onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = page === 'home' ? '' : page;
    }
  };

  const handleSectionScroll = (selector, e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (activePage !== 'home' && onNavigate) {
      onNavigate('home');
      setTimeout(() => {
        document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${activePage !== 'home' ? 'navbar-page' : ''}`}>
      <div className="nav-links nav-left">
        <a
          href="#home"
          className={activePage === 'home' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('home', e)}
        >
          Home
        </a>
        <a
          href="#about"
          className={activePage === 'about' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('about', e)}
        >
          About
        </a>
        <a
          href="#services"
          className={activePage === 'services' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('services', e)}
        >
          Services
        </a>
      </div>

      <div
        className="nav-logo"
        onClick={(e) => handleNavClick('home', e)}
        style={{ cursor: 'pointer' }}
      >
        <img src={logoImg} alt="Tessa Morgan Photography" />
      </div>

      <div className="nav-links nav-right">
        <a
          href="#portfolio"
          onClick={(e) => handleSectionScroll('.portfolio-section', e)}
        >
          Portfolio
        </a>
        <a
          href="#testimonials"
          onClick={(e) => handleSectionScroll('.testimonials-section', e)}
        >
          Blog
        </a>
        <a
          href="#contact"
          className={activePage === 'contact' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('contact', e)}
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        type="button"
        className={`nav-hamburger ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      {/* Mobile Dropdown Menu */}
      <div className={`nav-mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a
          href="#home"
          className={activePage === 'home' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('home', e)}
        >
          Home
        </a>
        <a
          href="#about"
          className={activePage === 'about' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('about', e)}
        >
          About
        </a>
        <a
          href="#services"
          className={activePage === 'services' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('services', e)}
        >
          Services
        </a>
        <a
          href="#portfolio"
          onClick={(e) => handleSectionScroll('.portfolio-section', e)}
        >
          Portfolio
        </a>
        <a
          href="#testimonials"
          onClick={(e) => handleSectionScroll('.testimonials-section', e)}
        >
          Blog
        </a>
        <a
          href="#contact"
          className={activePage === 'contact' ? 'nav-active' : ''}
          onClick={(e) => handleNavClick('contact', e)}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

