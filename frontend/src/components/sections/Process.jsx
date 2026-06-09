import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Discovery & Planning',
    desc: 'We audit your workflows, map business requirements, and define the project scope before a single line of code is written.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="6.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M15 15L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 7.5V10.5L11.5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Architecture Design',
    desc: 'Scalable system architecture, data models, and API contracts are designed to support growth from day one.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="7.5" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5.5 9V12.5C5.5 13 6 13.5 6.5 13.5H11M16.5 9V12.5C16.5 13 16 13.5 15.5 13.5H11M11 13.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with client checkpoints ensure the product evolves with your feedback, not against it.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H18M4 11H14M4 16H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="17" cy="15.5" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 15.5L17 16.5L18.5 14.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'QA & Testing',
    desc: 'Automated and manual testing covers edge cases, load scenarios, and security before any release.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 2L13.5 7.5H19.5L14.5 11.5L16.5 17L11 13.5L5.5 17L7.5 11.5L2.5 7.5H8.5L11 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Launch & Support',
    desc: 'Monitored deployment, onboarding, and a dedicated support window — so you\'re never left managing alone.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3C11 3 15.5 5 17 9.5C17.5 11.5 17 14 15 16L11 20L7 16C5 14 4.5 11.5 5 9.5C6.5 5 11 3 11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-inner">

        {/* ── Head ── */}
        <div className="process-head">
          <div className="section-tag">
            <span className="section-tag-line" />
            <span className="section-tag-label">How We Work</span>
          </div>
          <h2>Our process, your success</h2>
          <p className="process-sub">
            Every engagement follows the same five-phase methodology — refined across 100+ projects to eliminate surprises and deliver on time.
          </p>
        </div>

        {/* ── Timeline ── */}
        <div className="process-timeline">
          {/* Connecting line behind the nodes */}
          <div className="process-line" />

          {STEPS.map((step, index) => (
            <div className="process-step" key={step.num}>
              {/* Node */}
              <div className="process-node">
                <div className="process-node-icon">{step.icon}</div>
              </div>

              {/* Card below the node */}
              <div className="process-card">
                <span className="process-step-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}