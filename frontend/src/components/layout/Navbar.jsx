import { useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', href: '#' },
  { label: 'How We Work', href: '#services' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Media', href: '#media' },
  { label: 'Support', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="nav-logo">
          grass<span>FRONT</span>
        </a>

        {/* Desktop links */}
        <ul className="nav-links">
          {NAV_LINKS.map(l => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta desktop-only" style={{ backgroundColor: 'var(--blue)', color: 'var(--white)' }}>
          Get Connected
        </a>

        {/* Mobile hamburger */}
        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="nav-drawer">
          <ul>
            {NAV_LINKS.map(l => (
              <li key={l.label}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
            ))}
          </ul>
          <a href="#contact" className="nav-cta-mobile" onClick={() => setOpen(false)}>Get Connected</a>
        </div>
      )}
    </nav>
  );
}