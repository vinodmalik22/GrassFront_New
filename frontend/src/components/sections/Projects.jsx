import './Projects.css';

const PROJECTS = [
  {
    visual: 'B2B Marketplace',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    title: 'Horeca Mall — B2B Procurement Platform',
    desc: 'Full-stack procurement and inventory management system built for the hospitality sector. Multi-vendor marketplace with real-time stock tracking, automated reorder workflows, and an integrated payment gateway for bulk purchasing across 500+ SKUs.',
    outcome: 'Reduced procurement time by 68% · Onboarded 120+ vendors in first quarter',
  },
  {
    visual: 'Ops Dashboard',
    tech: ['React', 'FastAPI', 'Redis'],
    title: 'Bizz Studio — Operations Dashboard',
    desc: 'Centralized operations intelligence platform with real-time KPI tracking, automated reporting, and multi-branch management tools for a growing creative services business.',
    outcome: 'Consolidated 6 spreadsheet tools into a single platform',
  },
  {
    visual: 'POS System',
    tech: ['React Native', 'Firebase'],
    title: 'Platter — Restaurant POS & Ordering',
    desc: 'End-to-end point-of-sale and digital ordering system with kitchen display integration, table management, and analytics reporting.',
    outcome: 'Deployed across 14 locations with 99.9% uptime',
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-section-inner">
        <div className="projects-head">
          <div>
            <div className="section-tag">
              <span className="section-tag-line" />
              <span className="section-tag-label">Featured Projects</span>
            </div>
            <h2>Delivering impact across industries.</h2>
          </div>
          <p className="projects-sub">A selection of systems and platforms delivered across different business environments.</p>
        </div>

        <div className="projects-list">
          {PROJECTS.map(p => (
            <div key={p.title} className="project-card">
              <div className="project-visual">
                <div className="project-visual-inner">
                  <span className="project-img-label">Image</span>
                  <span className="project-visual-label">{p.visual}</span>
                </div>
              </div>
              <div className="project-body">
                <div className="project-tag-row">
                  {p.tech.map(t => <span key={t} className="project-tech">{t}</span>)}
                </div>
                <div className="project-body-content">
                  <h3>{p.title}</h3>
                  <div>
                    <p>{p.desc}</p>
                    <div className="project-outcome">
                      <span className="outcome-arrow">↗</span>
                      <span>{p.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}