import { useState, useEffect, useRef } from 'react';
import './Stats.css';

const STATS = [
  { value: '10', suffix: 'L+', label: 'Business Processes Digitized' },
  { value: '500', suffix: '+', label: 'Users Supported' },
  { value: '2000', suffix: '+', label: 'Hours Saved Through Automation ' },
  { value: '98', suffix: '%', label: 'Client Retention ' },
];

function Counter({ end, suffix = '', isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return (
    <>
      {end % 1 !== 0 ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </>
  );
}

export default function Stats() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // animate only once
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-frame">
        <span className="stats-eyebrow">Stats & Numbers</span>

        <div className="section-inner">
          <h2>Results that speak for themselves.</h2>

          <div className="stats-grid">
            {STATS.map((s) => (
              <div key={s.label} className="stat-big-card">
                <div className="stat-big-num">
                  <Counter
                    end={s.value}
                    suffix={s.suffix}
                    isVisible={isVisible}
                  />
                </div>
                <div className="stat-big-desc">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}