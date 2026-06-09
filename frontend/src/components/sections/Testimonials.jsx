import { useState, useEffect } from 'react';
import './Testimonials.css';

// pravatar.cc serves real photo avatars by ID (1–70).
// IDs chosen to get South Asian / Indian-looking faces for the first 4.
const TESTIMONIALS = [
  {
    quote:
      'GrassFRONT transformed our procurement workflow and significantly reduced operational overhead.',
    name: 'Rohan Mehta',
    role: 'Founder, Horeca Mall',
    image: 'https://i.pravatar.cc/80?img=12',   // Indian male
  },
  {
    quote:
      'Excellent communication, strong technical expertise, and reliable delivery every time.',
    name: 'Priya Agarwal',
    role: 'COO, Bizz Studio',
    image: 'https://i.pravatar.cc/80?img=47',   // Indian female
  },
  {
    quote:
      'Their support after launch was exceptional. Fast responses and real ownership.',
    name: 'Sameer Kapoor',
    role: 'Director, Platter Technologies',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=faces',   // Indian male
  },
  {
    quote:
      'The ERP platform simplified processes across departments and improved visibility.',
    name: 'Vikas Sharma',
    role: 'Operations Head',
    image: 'https://i.pravatar.cc/80?img=57',   // Indian male
  },
  {
    quote:
      'A highly professional team that focuses on business outcomes, not just code.',
    name: 'Anjali Gupta',
    role: 'Managing Director',
    image: 'https://i.pravatar.cc/80?img=44',   // South Asian female
  },
  {
    quote:
      'The final product exceeded expectations and was delivered ahead of schedule.',
    name: 'Rahul Verma',
    role: 'CEO',
    image: 'https://i.pravatar.cc/80?img=68',   // male
  },
];

function Stars() {
  return (
    <div className="testi-stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 12 12" fill="none">
          <path
            d="M6 1L7.5 4.5H11L8 7L9 11L6 9L3 11L4 7L1 4.5H4.5L6 1Z"
            fill="#1F00FF"
          />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  const visibleCards =
    typeof window !== 'undefined' && window.innerWidth <= 768 ? 1 : 3;

  const maxIndex = TESTIMONIALS.length - visibleCards;

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current, hovered]);

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Client Testimonials</span>
        </div>

        <h2>Relationships built on reliable delivery</h2>

        <div
          className="testi-carousel"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <button className="testi-nav prev" onClick={prevSlide}>←</button>
          <button className="testi-nav next" onClick={nextSlide}>→</button>

          <div className="testi-slider">
            <div
              className="testi-track"
              style={{
                transform: `translateX(calc(-${current} * (340px + 24px)))`,
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div className="testi-card" key={t.name}>
                  <Stars />

                  <p className="testi-quote">"{t.quote}"</p>

                  <div className="testi-author">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="testi-avatar"
                      onError={(e) => {
                        // Fallback to initials avatar if pravatar fails
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&size=80&background=e8edff&color=1f00ff&bold=true`;
                      }}
                    />
                    <div>
                      <div className="testi-name">{t.name}</div>
                      <div className="testi-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="testi-dots">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                className={current === i ? 'dot active' : 'dot'}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}