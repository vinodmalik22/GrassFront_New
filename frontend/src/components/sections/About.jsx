import './About.css';

const TRUST_POINTS = ['Registered Operations', 'Structured QA Workflow', 'Ongoing Technical Support'];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        {/* Image */}
        <div className="about-img-wrap">
          <img src="/assets/about.jpg" alt="Team · Gurugram Office · 2025" />
        </div>

        {/* Text */}
        <div className="about-content">
          <div className="section-tag">
            <span className="section-tag-line" />
            <span className="section-tag-label">About GrassFRONT</span>
          </div>

          <h2>Technology Built Around Business Outcomes</h2>

          <p>GrassFRONT helps organizations simplify operations through custom software, ERP systems, AI automation, and business intelligence solutions.

          We focus on reducing manual work, improving efficiency, and helping businesses make better decisions with data.</p>

          <div className="trust-points">
            {TRUST_POINTS.map(tp => (
              <div key={tp} className="trust-point">
                <div className="trust-icon">
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="#1F00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span>{tp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}