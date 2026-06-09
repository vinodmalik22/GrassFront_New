import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const PROJECTS = [
  {
    image: '/assets/horeca_meet_logo.jpg',
    url: 'https://www.horecameet.com',
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS'],
    title: 'Horeca Mall — B2B Procurement Platform',
    desc: 'Helped a hospitality business reduce procurement time by 68%, automate vendor management, and manage inventory across multiple locations through a centralized procurement platform. Multi-vendor marketplace with real-time stock tracking, automated reorder workflows, and an integrated payment gateway for bulk purchasing across 500+ SKUs.',
    outcome: 'Reduced procurement time by 68% · Onboarded 120+ vendors in first quarter',
    bg: '#ffffff',
  },
  {
    image: '/assets/bizzstudio.jpeg',
    tech: ['React', 'FastAPI', 'Redis'],
    title: 'Bizz Studio — Operations Dashboard',
    desc: 'Centralized operations intelligence platform with real-time KPI tracking, automated reporting, and multi-branch management tools for a growing creative services business.',
    outcome: 'Consolidated 6 spreadsheet tools into a single platform',
    bg: '#000000',
  },
  {
    image: '/assets/platter_pos.jpg',
    tech: ['React Native', 'Firebase'],
    title: 'Platter — Restaurant POS & Ordering',
    desc: 'End-to-end point-of-sale and digital ordering system with kitchen display integration, table management, and analytics reporting.',
    outcome: 'Deployed across 14 locations with 99.9% uptime',
    bg: '#ffffff',
  },
];

function calculateGap(width) {
  if (width < 600) return width * 0.15; // smaller gap on mobile to prevent overflow
  const minWidth = 1024;
  const maxWidth = 1456;
  const minGap = 60;
  const maxGap = 86;
  if (width <= minWidth) return minGap;
  if (width >= maxWidth)
    return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth));
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth));
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverPrev, setHoverPrev] = useState(false);
  const [hoverNext, setHoverNext] = useState(false);
  const [containerWidth, setContainerWidth] = useState(1200);

  const imageContainerRef = useRef(null);
  const autoplayIntervalRef = useRef(null);

  const projectsLength = useMemo(() => PROJECTS.length, []);
  const activeProject = useMemo(() => PROJECTS[activeIndex], [activeIndex]);

  // Responsive gap calculation
  useEffect(() => {
    function handleResize() {
      if (imageContainerRef.current) {
        setContainerWidth(imageContainerRef.current.offsetWidth);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay
  useEffect(() => {
    autoplayIntervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projectsLength);
    }, 5000);
    return () => {
      if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
    };
  }, [projectsLength]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex, projectsLength]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projectsLength) % projectsLength);
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);
  }, [projectsLength]);

  function getImageStyle(index) {
    const gap = calculateGap(containerWidth);
    const maxStickUp = gap * 0.8;
    const offset = (index - activeIndex + projectsLength) % projectsLength;
    const isActive = index === activeIndex;
    const isLeft = (activeIndex - 1 + projectsLength) % projectsLength === index;
    const isRight = (activeIndex + 1) % projectsLength === index;

    if (isActive) {
      return {
        zIndex: 3,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(0px) translateY(0px) scale(1) rotateY(0deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isLeft) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    if (isRight) {
      return {
        zIndex: 2,
        opacity: 1,
        pointerEvents: "auto",
        transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
        transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
      };
    }
    // Hide all other images
    return {
      zIndex: 1,
      opacity: 0,
      pointerEvents: "none",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    };
  }

  // Framer Motion variants for quote
  const contentVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="projects" id="projects">
      <div className="projects-section-inner">
        <div className="projects-head">
          <div>
            <div className="section-tag">
              <span className="section-tag-line" />
              <span className="section-tag-label">Featured Projects</span>
            </div>
            <h2>Delivering impact across industries.</h2>
          </div>
          <p className="projects-sub">A selection of systems and platforms delivered across different business environments.</p>
        </div>

        {/* Interactive Slider Grid */}
        <div className="projects-slider-grid">
          {/* Visual Panel on Left */}
          <div className="projects-visual-container" ref={imageContainerRef}>
            {PROJECTS.map((p, index) => (
              <div
                key={p.title}
                className="project-visual-card"
                style={{
                  ...getImageStyle(index),
                  backgroundColor: p.bg || 'var(--haiti)'
                }}
              >
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noreferrer" className="project-image-link">
                    <img src={p.image} alt={p.title} className="project-carousel-image" />
                  </a>
                ) : (
                  <img src={p.image} alt={p.title} className="project-carousel-image" />
                )}
              </div>
            ))}
          </div>

          {/* Details Panel on Right */}
          <div className="project-details-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={contentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="project-details-content"
              >
                <div className="project-tag-row">
                  {activeProject.tech.map(t => (
                    <span key={t} className="project-tech">{t}</span>
                  ))}
                </div>

                <h3 className="project-title">{activeProject.title}</h3>

                <motion.p className="project-desc">
                  {activeProject.desc.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.22,
                        ease: "easeInOut",
                        delay: 0.012 * i,
                      }}
                      style={{ display: "inline-block" }}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                <div className="project-outcome">
                  <span className="outcome-arrow">↗</span>
                  <span className="outcome-text">{activeProject.outcome}</span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <div className="arrow-buttons">
              <button
                className="arrow-button prev-button"
                onClick={handlePrev}
                style={{
                  backgroundColor: hoverPrev ? 'var(--blue)' : 'var(--white)',
                }}
                onMouseEnter={() => setHoverPrev(true)}
                onMouseLeave={() => setHoverPrev(false)}
                aria-label="Previous project"
              >
                <FaArrowLeft size={16} color={hoverPrev ? 'var(--white)' : 'var(--blue)'} />
              </button>
              <button
                className="arrow-button next-button"
                onClick={handleNext}
                style={{
                  backgroundColor: hoverNext ? 'var(--blue)' : 'var(--white)',
                }}
                onMouseEnter={() => setHoverNext(true)}
                onMouseLeave={() => setHoverNext(false)}
                aria-label="Next project"
              >
                <FaArrowRight size={16} color={hoverNext ? 'var(--white)' : 'var(--blue)'} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}