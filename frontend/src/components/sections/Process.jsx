import './Process.css';

const STEPS = [
  { num: '01', title: 'Discovery & Planning', desc: 'Understanding business objectives, workflows, operational requirements, and technical expectations before development begins.' },
  { num: '02', title: 'System Design', desc: 'Planning scalable architecture, interface structure, and technical foundations aligned with long-term business growth.' },
  { num: '03', title: 'Agile Development', desc: 'Structured development cycles focused on performance, maintainability, collaboration, and iterative progress delivery.' },
  { num: '04', title: 'Quality Assurance', desc: 'Comprehensive testing, validation, optimization, and deployment readiness checks before production release.' },
  { num: '05', title: 'Launch & Support', desc: 'Deployment, monitoring, maintenance, and long-term technical support to ensure operational stability after launch.' },
];

export default function Process() {
  return (
    <section className="process" id="services">
      <div className="services-head">
        <div className="section-tag center">
          <span className="section-tag-line" />
          <span className="section-tag-label">How GrassFRONT Works</span>
          <span className="section-tag-line" />
        </div>
        <h2>Our process, your success.</h2>
        <p>We deliver scalable technology solutions designed to support operations, automation, customer platforms, and business growth.</p>
      </div>

      <div className="process-grid">
        {STEPS.map(s => (
          <div key={s.num} className="process-step">
            <div className="process-num">STEP {s.num}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}