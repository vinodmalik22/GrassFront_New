import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
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
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const timeoutRef = useRef(null);

  const cancelAutoHideTimer = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const startAutoHideTimer = () => {
    cancelAutoHideTimer();
    timeoutRef.current = setTimeout(() => {
      if (window.scrollY >= 50) {
        setHidden(true);
      }
    }, 2000);
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    if (latest < 50) {
      setHidden(false);
      cancelAutoHideTimer();
    } else if (latest > previous && latest > 100) {
      setHidden(true);
      cancelAutoHideTimer();
    } else if (latest < previous) {
      setHidden(false);
      startAutoHideTimer();
    }
  });

  useEffect(() => {
    return () => cancelAutoHideTimer();
  }, []);

  return (
    <>
      {/* Premium 3D Background Glow */}
      <div className="navbar-glow" />

      <motion.header 
        className="navbar"
        initial={{ x: "-50%" }}
        variants={{
          visible: { y: 0, x: "-50%" },
          hidden: { y: -150, x: "-50%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onMouseEnter={cancelAutoHideTimer}
        onMouseLeave={() => {
          if (window.scrollY >= 50) startAutoHideTimer();
        }}
      >
        <div className="navbar-container">
          {/* Top Reflection */}
          <div className="navbar-top-reflection" />
          
          {/* Apple Vision Pro Style Reflection */}
          <div className="navbar-shine-reflection" />

          <div className="navbar-inner">
            {/* Left */}
            <div className="nav-left">
              <a href="#" className="nav-logo">
                <img src="/assets/image.png" alt="GrassFront Logo" className="logo-image" />
              </a>
            </div>

            {/* Center Navigation */}
            <div className="nav-links-container desktop-only">
              <ul className="nav-links">
                {NAV_LINKS.map(l => (
                  <li key={l.label}><a href={l.href}>{l.label}</a></li>
                ))}
              </ul>
            </div>

            {/* Right Button & Mobile Hamburger */}
            <div className="nav-right">
              {/* Mobile hamburger */}
              <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu">
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="nav-drawer">
            <ul>
              {NAV_LINKS.map(l => (
                <li key={l.label}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
              ))}
            </ul>
            <a href="#contact" className="nav-cta-mobile" onClick={() => setOpen(false)}>
              Get Connected
            </a>
          </div>
        )}
      </motion.header>
    </>
  );
}