import './Capabilities.css';

const CAPS = [
  {
    title: 'Custom ERP & Business Management Systems',
    desc: 'Centralize operations, inventory, sales, finance, procurement, and reporting in one platform to improve efficiency and eliminate manual processes.',
    tags: ['ERP', 'Operations', 'Inventory', 'Reporting'],
    illus: (
      <svg className="cap-illus" width="88" height="88" viewBox="0 0 80 80" fill="none">
        <rect x="4" y="8" width="72" height="56" rx="6" stroke="#1F00FF" strokeWidth="2" />
        <rect x="4" y="8" width="72" height="18" rx="6" fill="#1F00FF" fillOpacity="0.08" />
        <rect x="16" y="36" width="20" height="20" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="44" y="36" width="20" height="8" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="44" y="50" width="20" height="8" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <circle cx="12" cy="17" r="2.5" fill="#1F00FF" fillOpacity="0.4" />
        <circle cx="20" cy="17" r="2.5" fill="#1F00FF" fillOpacity="0.25" />
      </svg>
    ),
  },
  {
    title: 'AI & Business Automation',
    desc: 'Automate repetitive tasks, approvals, reporting, customer communication, and operational workflows to save time and reduce human errors.',
    tags: ['AI Automation', 'Workflows', 'Process Automation'],
    illus: (
      <svg className="cap-illus" width="88" height="88" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="40" r="20" stroke="#1F00FF" strokeWidth="2" />
        <circle cx="40" cy="40" r="8" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="40" y1="8" x2="40" y2="20" stroke="#1F00FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="40" y1="60" x2="40" y2="72" stroke="#1F00FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="8" y1="40" x2="20" y2="40" stroke="#1F00FF" strokeWidth="2" strokeLinecap="round" />
        <line x1="60" y1="40" x2="72" y2="40" stroke="#1F00FF" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="8" r="3" fill="#1F00FF" />
        <circle cx="40" cy="72" r="3" fill="#1F00FF" />
        <circle cx="8" cy="40" r="3" fill="#1F00FF" />
        <circle cx="72" cy="40" r="3" fill="#1F00FF" />
      </svg>
    ),
  },
  {
    title: 'Reliable Cloud Solutions',
    desc: 'Secure, scalable, and high-performance cloud systems that keep your business applications running smoothly without downtime.',
    tags: ['AWS/GCP', 'Secure Hosting', 'Zero Downtime'],
    illus: (
      <svg className="cap-illus" width="88" height="88" viewBox="0 0 80 80" fill="none">
        <path d="M20 52 Q12 52 12 42 Q12 34 20 32 Q20 20 32 18 Q40 10 52 16 Q58 10 66 14 Q76 16 74 28 Q80 30 78 40 Q76 52 66 52Z" stroke="#1F00FF" strokeWidth="2" />
        <line x1="28" y1="52" x2="28" y2="64" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="40" y1="52" x2="40" y2="64" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="52" y1="52" x2="52" y2="64" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="20" y="64" width="16" height="8" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="32" y="64" width="16" height="8" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="44" y="64" width="16" height="8" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: 'Business Intelligence & Reporting',
    desc: 'Get real-time dashboards, KPI tracking, and actionable insights to make faster and smarter business decisions.',
    tags: ['BI Dashboards', 'KPI Tracking', 'Analytics'],
    illus: (
      <svg className="cap-illus" width="88" height="88" viewBox="0 0 80 80" fill="none">
        <rect x="8" y="16" width="64" height="48" rx="4" stroke="#1F00FF" strokeWidth="2" />
        <rect x="18" y="46" width="8" height="10" rx="1" fill="#1F00FF" fillOpacity="0.35" />
        <rect x="30" y="36" width="8" height="20" rx="1" fill="#1F00FF" fillOpacity="0.55" />
        <rect x="42" y="40" width="8" height="16" rx="1" fill="#1F00FF" fillOpacity="0.45" />
        <rect x="54" y="28" width="8" height="28" rx="1" fill="#1F00FF" fillOpacity="0.75" />
        <polyline points="22,46 34,36 46,40 58,28" stroke="#1F00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'System Integration Services',
    desc: 'Connect your ERP, CRM, accounting software, payment gateways, and third-party applications into one seamless workflow.',
    tags: ['APIs', 'CRM/ERP Sync', 'Payment Gateways'],
    illus: (
      <svg className="cap-illus" width="88" height="88" viewBox="0 0 80 80" fill="none">
        <rect x="6" y="28" width="24" height="24" rx="4" stroke="#1F00FF" strokeWidth="2" />
        <rect x="50" y="12" width="24" height="16" rx="3" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="50" y="36" width="24" height="16" rx="3" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="50" y="60" width="24" height="16" rx="3" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="30" y1="36" x2="50" y2="20" stroke="#1F00FF" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="30" y1="40" x2="50" y2="44" stroke="#1F00FF" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="30" y1="44" x2="50" y2="68" stroke="#1F00FF" strokeWidth="1.5" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: 'Technology Consulting',
    desc: 'Helping businesses choose the right technology, automation strategy, and digital roadmap to support long-term growth.',
    tags: ['Tech Strategy', 'Digital Roadmap', 'Architecture'],
    illus: (
      <svg className="cap-illus" width="88" height="88" viewBox="0 0 80 80" fill="none">
        <rect x="20" y="8" width="40" height="28" rx="4" stroke="#1F00FF" strokeWidth="2" />
        <line x1="40" y1="36" x2="40" y2="48" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="40" y1="48" x2="18" y2="48" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="40" y1="48" x2="62" y2="48" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="18" y1="48" x2="18" y2="58" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="40" y1="48" x2="40" y2="58" stroke="#1F00FF" strokeWidth="1.5" />
        <line x1="62" y1="48" x2="62" y2="58" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="10" y="58" width="16" height="14" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="32" y="58" width="16" height="14" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
        <rect x="54" y="58" width="16" height="14" rx="2" stroke="#1F00FF" strokeWidth="1.5" />
      </svg>
    ),
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
            {CAPS.map((c, i) => (
              <div
                key={c.title}
                className="cap-card"
                style={{ '--delay': `${i * 0.07}s` }}
              >
                {c.illus}

                <div className="cap-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="1.5" y="2.5" width="17" height="15" rx="1" stroke="#1F00FF" strokeWidth="1.25" />
                    <path d="M7 10h6M10 7v6" stroke="#1F00FF" strokeWidth="1.25" strokeLinecap="round" />
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