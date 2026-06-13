import './Why.css';

const REASONS = [
  {
    icon: '/assets/why-target.png',
    title: 'Business-First Approach',
    desc: 'We start with your operations, not with code. Every decision is rooted in how your business actually works.',
  },
  {
    icon: '/assets/why-wrench.png',
    title: 'Custom-Built Solutions',
    desc: 'No templates, no off-the-shelf compromises. Every system is architected specifically for your requirements.',
  },
  {
    icon: '/assets/why-handshake.png',
    title: 'Dedicated Project Ownership',
    desc: 'A single accountable team owns your project from discovery to delivery — no handoffs, no gaps.',
  },
  {
    icon: '/assets/why-lightning.png',
    title: 'Agile Delivery Process',
    desc: 'Iterative sprints with regular check-ins keep you in control and ensure progress is always visible.',
  },
  {
    icon: '/assets/why-shield.png',
    title: 'Long-Term Support',
    desc: 'We stay with you post-launch — monitoring, maintaining, and evolving your systems as your business grows.',
  },
  {
    icon: '/assets/why-chat.png',
    title: 'Transparent Communication',
    desc: 'Clear timelines, honest updates, and no surprises. You always know exactly where your project stands.',
  },
];

export default function Why() {
  return (
    <section className="why" id="why">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Why GrassFRONT</span>
        </div>

        <div className="why-frame">
          <div className="why-header">
            <h2>Why Businesses Choose GrassFRONT</h2>
            <p className="why-intro">
              We combine technical depth with operational understanding —
              building systems that solve real problems and scale with your business.
            </p>
          </div>

          <div className="why-grid">
            {REASONS.map((r, i) => (
              <div className="why-card" key={i} style={{ '--delay': `${i * 0.07}s` }}>
                <div className="why-card-icon">
                  <img src={r.icon} alt={r.title} />
                </div>
                <div className="why-card-body">
                  <div className="why-card-title-row">
                    <span className="why-card-check">✓</span>
                    <h3>{r.title}</h3>
                  </div>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}