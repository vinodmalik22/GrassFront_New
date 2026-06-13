import './CaseStudies.css';

export default function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Case Studies</span>
        </div>

        <h2>Horeca Mall</h2>

        <div className="case-grid">
          <div className="case-card">
            <h3>Challenge</h3>
            <p>Managing procurement manually across vendors.</p>
          </div>

          <div className="case-card">
            <h3>Solution</h3>
            <p>Custom procurement management platform.</p>
          </div>

          <div className="case-card">
            <h3>Outcome</h3>
            <p>Improved visibility and streamlined purchasing workflows.</p>
          </div>
        </div>

        <div className="case-cta">
          <a href="#projects" className="case-link">View Case Study →</a>
        </div>
      </div>
    </section>
  );
}
