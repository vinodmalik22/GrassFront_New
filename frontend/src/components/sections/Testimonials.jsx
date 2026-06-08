import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: '"GrassFRONT didn\'t just build a platform — they understood our operational model and built something we can scale for the next five years. Procurement work that previously took 6 hours daily is now completed in less than 2 hours. The system has significantly improved our operational efficiency."',
    name: 'Rohan Mehta',
    role: 'Founder, Horeca Mall',
  },
  {
    quote: '"Delivered on time, on spec, with no surprises. The QA process was rigorous and the handover was clean. We have been working with GrassFRONT on three projects now and the consistency is remarkable."',
    name: 'Priya Agarwal',
    role: 'COO, Bizz Studio',
  },
  {
    quote: '"The post-launch support has been outstanding. We had a critical issue at 2 AM during our busiest weekend and the GrassFRONT team resolved it within the hour. That level of partnership is rare."',
    name: 'Sameer Kapoor',
    role: 'Director, Platter Technologies',
  },
];

function Stars() {
  return (
    <div className="testi-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M6 1L7.5 4.5H11L8 7L9 11L6 9L3 11L4 7L1 4.5H4.5L6 1Z" fill="#1F00FF"/>
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Client Testimonials</span>
        </div>

        <h2>Relationships built on reliable delivery</h2>

        <div className="testi-grid">
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="testi-card">
              <Stars />
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-name">{t.name}</div>
                <div className="testi-role">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}