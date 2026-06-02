import './Capabilities.css';

const CAPS = [
  {
    title: 'Enterprise Systems',
    desc: 'Operational platforms, admin systems, ERP-style workflows, and scalable business tools engineered for efficiency and long-term maintainability.',
    tags: ['ERP', 'CRM', 'Admin Panels', 'Operational Workflows'],
  },
  {
    title: 'Intelligent Automation',
    desc: 'Automation workflows and AI-assisted systems designed to reduce manual processes, improve operational efficiency, and streamline repetitive tasks.',
    tags: ['Automation', 'AI Workflows', 'Process Optimization'],
  },
  {
    title: 'Cloud & Infrastructure',
    desc: 'Deployment architecture, hosting systems, monitoring workflows, and scalable infrastructure built for performance and operational stability.',
    tags: ['Cloud Hosting', 'DevOps', 'CI/CD'],
  },
  {
    title: 'Data & Analytics',
    desc: 'Business dashboards, operational reporting systems, and structured analytics solutions that support informed decision-making.',
    tags: ['Dashboards', 'Reports', 'Analytics'],
  },
  {
    title: 'API & Integrations',
    desc: 'Reliable integration architecture connecting platforms, services, operational systems, and third-party workflows into unified ecosystems.',
    tags: ['API Systems', 'Payment Gateways', 'Third-Party Services'],
  },
  {
    title: 'Technical Consulting',
    desc: 'Strategic guidance for architecture planning, infrastructure decisions, digital transformation, and scalable technology implementation.',
    tags: ['Architecture', 'Infrastructure', 'Scalability'],
  },
];

export default function Capabilities() {
  return (
    <section className="capabilities" id="capabilities">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Core Capabilities</span>
        </div>

        <div className="cap-frame">
          <h2>Powering digital operations.</h2>

          <div className="cap-grid">
            {CAPS.map(c => (
              <div key={c.title} className="cap-card">
                <div className="cap-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="1.5" y="2.5" width="17" height="15" rx="1" stroke="#1F00FF" strokeWidth="1.25"/>
                    <path d="M7 10h6M10 7v6" stroke="#1F00FF" strokeWidth="1.25" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="cap-tags">
                  {c.tags.map(t => (
                    <span key={t} className="cap-tag">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}