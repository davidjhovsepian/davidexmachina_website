import { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav({ activeSection, onNav }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (section) => {
    onNav(section);
    setMenuOpen(false);
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <button className="nav__sigil" onClick={() => handleNav('home')} aria-label="Home">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 2 L18 34 M6 14 Q18 4 30 14" stroke="currentColor" strokeWidth="1" fill="none"/>
          <circle cx="18" cy="18" r="3" fill="currentColor" fillOpacity="0.6"/>
          <path d="M10 22 L18 10 L26 22" stroke="currentColor" strokeWidth="0.8" fill="none" strokeOpacity="0.5"/>
        </svg>
      </button>

      <div className="nav__name">
        <span>David Ex Machina</span>
      </div>

      <button
        className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        {['works', 'about', 'contact'].map((s) => (
          <li key={s}>
            <button
              className={`nav__link ${activeSection === s ? 'nav__link--active' : ''}`}
              onClick={() => handleNav(s)}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
