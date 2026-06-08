import { useRef, useCallback } from 'react';
import './Hero.css';

export default function Hero() {
  const heroRef = useRef(null);
  const spotRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    spotRef.current.style.background = `radial-gradient(600px circle at ${x}px ${y}px,
      rgba(31, 0, 255, 0.13) 0%,
      rgba(31, 0, 255, 0.06) 35%,
      transparent 70%)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    spotRef.current.style.background = 'transparent';
  }, []);

  return (
    <section
      className="hero"
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* spotlight overlay */}
      <div className="hero-spotlight" ref={spotRef} />

      <div className="section-inner hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Registered IT Company · Gurugram, India</span>
          </div>

          <h1 className="hero-heading">
            Build Software, ERP &<br />AI Automation Solutions<br />
            That Help Businesses<br />
            <span className="hero-heading-accent">Grow Faster.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
              GrassFRONT helps businesses automate operations, improve efficiency, reduce manual work, and scale with custom software, ERP systems, AI solutions, and business automation.
            </p>

            <div className="hero-btns">
              <a href="#contact" className="btn-primary">Get Free Consultation</a>
              <a href="#contact" className="btn-outline">Book Discovery Call</a>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-num">100+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">50+</span>
                <span className="stat-label">Clients</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">100%</span>
                <span className="stat-label">On-Time Delivery</span>
              </div>
              <div className="hero-stat">
                <span className="stat-num">4.9</span>
                <span className="stat-label">Client Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}