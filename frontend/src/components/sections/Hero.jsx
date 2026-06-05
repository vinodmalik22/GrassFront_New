import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="section-inner hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            <span>Registered IT Company · Gurugram, India</span>
          </div>

          <h1 className="hero-heading">
            Digital systems<br />engineered for<br />
            <span className="hero-heading-accent">trust.</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-sub">
              We design, build, and maintain scalable software platforms, operational systems, and modern digital infrastructure for startups, growing businesses, and enterprise teams.
            </p>

            <div className="hero-btns">
              <a href="#projects" className="btn-primary">View Our Work</a>
              <a href="#contact" className="btn-outline">Book a Discovery Call</a>
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

        <div className="hero-right">
          <div className="hero-visual">
           <img src="/assets/hero.jpg" alt="Hero Visual" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}