import './Stats.css';

const STATS = [
  { num: '100+', label: 'Projects Delivered' },
  { num: '20+', label: 'Business Clients' },
  { num: '98%', label: 'On-Time Delivery' },
  { num: '4.9', label: 'Client Satisfaction' },
];

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-frame">
        <span className="stats-eyebrow">Stats & Numbers</span>

        <div className="section-inner">
          <h2>Results that speak for themselves.</h2>

          <div className="stats-grid">
            {STATS.map(s => (
              <div key={s.label} className="stat-big-card">
                <div className="stat-big-num">{s.num}</div>
                <div className="stat-big-desc">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}