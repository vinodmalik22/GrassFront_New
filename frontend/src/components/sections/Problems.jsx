import './Problems.css';

const problems = [
  {
    icon: '/assets/prob-excel.png',
    title: 'Too Much Work in Excel?',
    desc: 'Manual spreadsheets slow operations and increase errors.',
  },
  {
    icon: '/assets/prob-radar.png',
    title: 'Lack of Real-Time Visibility?',
    desc: 'Make decisions faster with centralized dashboards and reporting.',
  },
  {
    icon: '/assets/prob-link.png',
    title: 'Disconnected Systems?',
    desc: 'Connect ERP, CRM, accounting, and operations into one workflow.',
  },
  {
    icon: '/assets/prob-scale.png',
    title: 'Struggling to Scale?',
    desc: 'Build systems that grow with your business.',
  },
];

export default function Problems() {
  return (
    <section className="problems" id="problems">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Problems We Solve</span>
        </div>

        <h2>Is Your Business Facing These Challenges?</h2>

        <div className="problems-grid">
          {problems.map((p, i) => (
            <div className="problem-card" key={i}>
              <div className="problem-card__icon">
                <img src={p.icon} alt="" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}