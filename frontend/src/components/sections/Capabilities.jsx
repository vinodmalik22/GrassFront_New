import { useState } from 'react';
import './Capabilities.css';

/* ─── Card data ─────────────────────────────────────────────────── */
const CAPS = [
  {
    shortTitle: 'Custom ERP & Business Management Systems',
    tagline: 'Centralize operations, inventory, sales, finance, procurement, and reporting in one platform to improve efficiency and eliminate manual processes.',
    tags: ['ERP', 'OPERATIONS', 'INVENTORY', 'REPORTING'],
    illus: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1F00FF" fillOpacity="0.08" />
        <rect x="8" y="10" width="32" height="24" rx="3" stroke="#1F00FF" strokeWidth="1.6" />
        <rect x="8" y="10" width="32" height="8" rx="3" fill="#1F00FF" fillOpacity="0.12" />
        <rect x="13" y="22" width="8" height="8" rx="1.5" stroke="#1F00FF" strokeWidth="1.3" />
        <rect x="25" y="22" width="10" height="3.5" rx="1" stroke="#1F00FF" strokeWidth="1.3" />
        <rect x="25" y="27" width="10" height="3.5" rx="1" stroke="#1F00FF" strokeWidth="1.3" />
        <circle cx="11" cy="14" r="1.5" fill="#1F00FF" fillOpacity="0.5" />
        <circle cx="15.5" cy="14" r="1.5" fill="#1F00FF" fillOpacity="0.3" />
      </svg>
    ),
  },
  {
    shortTitle: 'AI & Business Automation',
    tagline: 'Automate repetitive tasks, approvals, reporting, customer communication, and operational workflows to save time and reduce human errors.',
    tags: ['AI AUTOMATION', 'WORKFLOWS', 'PROCESS AUTOMATION'],
    illus: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1F00FF" fillOpacity="0.08" />
        <circle cx="24" cy="24" r="10" stroke="#1F00FF" strokeWidth="1.6" />
        <circle cx="24" cy="24" r="4" stroke="#1F00FF" strokeWidth="1.4" />
        <line x1="24" y1="8" x2="24" y2="14" stroke="#1F00FF" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="24" y1="34" x2="24" y2="40" stroke="#1F00FF" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="8" y1="24" x2="14" y2="24" stroke="#1F00FF" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="34" y1="24" x2="40" y2="24" stroke="#1F00FF" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="24" cy="8" r="2" fill="#1F00FF" />
        <circle cx="24" cy="40" r="2" fill="#1F00FF" />
        <circle cx="8" cy="24" r="2" fill="#1F00FF" />
        <circle cx="40" cy="24" r="2" fill="#1F00FF" />
      </svg>
    ),
  },
  {
    shortTitle: 'Reliable Cloud Solutions',
    tagline: 'Secure, scalable, and high-performance cloud systems that keep your business applications running smoothly without downtime.',
    tags: ['AWS/GCP', 'SECURE HOSTING', 'ZERO DOWNTIME'],
    illus: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1F00FF" fillOpacity="0.08" />
        <path d="M12 29 Q7 29 7 23 Q7 18 12 16.5 Q12 9 19 8 Q24 4 31 8 Q35 4 40 7 Q46 8.5 44.5 16 Q48 17.5 46.5 23 Q45 29 39 29Z" stroke="#1F00FF" strokeWidth="1.5" strokeLinejoin="round" />
        <line x1="17" y1="29" x2="17" y2="36" stroke="#1F00FF" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="25" y1="29" x2="25" y2="36" stroke="#1F00FF" strokeWidth="1.4" strokeLinecap="round" />
        <line x1="33" y1="29" x2="33" y2="36" stroke="#1F00FF" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="10" y="36" width="10" height="5" rx="1.5" stroke="#1F00FF" strokeWidth="1.3" />
        <rect x="20" y="36" width="10" height="5" rx="1.5" stroke="#1F00FF" strokeWidth="1.3" />
        <rect x="30" y="36" width="10" height="5" rx="1.5" stroke="#1F00FF" strokeWidth="1.3" />
      </svg>
    ),
  },
  {
    shortTitle: 'Business Intelligence & Reporting',
    tagline: 'Get real-time dashboards, KPI tracking, and actionable insights to make faster and smarter business decisions.',
    tags: ['BI DASHBOARDS', 'KPI TRACKING', 'ANALYTICS'],
    illus: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1F00FF" fillOpacity="0.08" />
        <rect x="7" y="10" width="34" height="26" rx="3" stroke="#1F00FF" strokeWidth="1.6" />
        <rect x="12" y="27" width="5" height="6" rx="1" fill="#1F00FF" fillOpacity="0.35" />
        <rect x="20" y="22" width="5" height="11" rx="1" fill="#1F00FF" fillOpacity="0.55" />
        <rect x="28" y="24" width="5" height="9" rx="1" fill="#1F00FF" fillOpacity="0.45" />
        <rect x="36" y="18" width="5" height="15" rx="1" fill="#1F00FF" fillOpacity="0.75" />
        <polyline points="14.5,27 22.5,22 30.5,24 38.5,18" stroke="#1F00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    shortTitle: 'System Integration Services',
    tagline: 'Connect your ERP, CRM, accounting software, payment gateways, and third-party applications into one seamless workflow.',
    tags: ['APIS', 'CRM/ERP SYNC', 'PAYMENT GATEWAYS'],
    illus: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1F00FF" fillOpacity="0.08" />
        <circle cx="24" cy="16" r="7" stroke="#1F00FF" strokeWidth="1.6" />
        <path d="M10 38 Q10 28 24 28 Q38 28 38 38" stroke="#1F00FF" strokeWidth="1.6" strokeLinecap="round" />
        <line x1="30" y1="22" x2="38" y2="14" stroke="#1F00FF" strokeWidth="1.4" strokeLinecap="round" />
        <polyline points="34,14 38,14 38,18" stroke="#1F00FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    shortTitle: 'Technology Consulting',
    tagline: 'Helping businesses choose the right technology, automation strategy, and digital roadmap to support long-term growth.',
    tags: ['TECH STRATEGY', 'DIGITAL ROADMAP', 'ARCHITECTURE'],
    illus: (
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1F00FF" fillOpacity="0.08" />
        <rect x="7" y="12" width="34" height="24" rx="3" stroke="#1F00FF" strokeWidth="1.6" />
        <polyline points="15,22 20,28 15,34" stroke="#1F00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="23" y1="33" x2="33" y2="33" stroke="#1F00FF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ArrowIcon = ({ open }) => (
  <svg
    width="15" height="15" viewBox="0 0 18 18" fill="none"
    style={{
      transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1)',
      transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
      flexShrink: 0,
    }}
  >
    <polyline points="6,4.5 11.5,9 6,13.5" stroke="#1F00FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Capabilities() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(prev => prev === i ? null : i);

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
            {CAPS.map((c, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={c.shortTitle}
                  className={`cap-card${isOpen ? ' cap-card--open' : ''}`}
                  style={{ '--delay': `${i * 0.07}s` }}
                  onClick={() => toggle(i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggle(i)}
                >
                  {/* ── Always visible: icon + title + arrow ── */}
                  <div className="cap-card-header">
                    <div className="cap-card-icon-wrap">{c.illus}</div>
                    <div className="cap-card-meta">
                      <h3>{c.shortTitle}</h3>
                    </div>
                    <div className="cap-card-arrow">
                      <ArrowIcon open={isOpen} />
                    </div>
                  </div>

                  {/* ── Expanded panel: description + tags ── */}
                  <div className={`cap-expand${isOpen ? ' cap-expand--visible' : ''}`}>
                    <div className="cap-expand-inner">
                      <p className="cap-card-desc">{c.tagline}</p>
                      <div className="cap-tags">
                        {c.tags.map(t => (
                          <span key={t} className="cap-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}