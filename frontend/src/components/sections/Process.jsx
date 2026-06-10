import './Process.css';
import RadialOrbitalTimeline from './RadialOrbitalTimeline';
import { Compass, Layers, RefreshCw, ShieldCheck, Rocket } from 'lucide-react';

const TIMELINE_DATA = [
  {
    id: 1,
    num: '01',
    title: 'Discovery & Planning',
    desc: 'We audit your workflows, map business requirements, and define the project scope before a single line of code is written.',
    icon: Compass,
    relatedIds: [2],
    status: 'completed',
    energy: 100,
    category: 'planning',
    content: 'We audit your workflows, map business requirements, and define the project scope before a single line of code is written.',
    date: 'Phase 1'
  },
  {
    id: 2,
    num: '02',
    title: 'Architecture Design',
    desc: 'Scalable system architecture, data models, and API contracts are designed to support growth from day one.',
    icon: Layers,
    relatedIds: [1, 3],
    status: 'completed',
    energy: 85,
    category: 'design',
    content: 'Scalable system architecture, data models, and API contracts are designed to support growth from day one.',
    date: 'Phase 2'
  },
  {
    id: 3,
    num: '03',
    title: 'Agile Development',
    desc: 'Two-week sprints with client checkpoints ensure the product evolves with your feedback, not against it.',
    icon: RefreshCw,
    relatedIds: [2, 4],
    status: 'in-progress',
    energy: 90,
    category: 'development',
    content: 'Two-week sprints with client checkpoints ensure the product evolves with your feedback, not against it.',
    date: 'Phase 3'
  },
  {
    id: 4,
    num: '04',
    title: 'QA & Testing',
    desc: 'Automated and manual testing covers edge cases, load scenarios, and security before any release.',
    icon: ShieldCheck,
    relatedIds: [3, 5],
    status: 'pending',
    energy: 60,
    category: 'testing',
    content: 'Automated and manual testing covers edge cases, load scenarios, and security before any release.',
    date: 'Phase 4'
  },
  {
    id: 5,
    num: '05',
    title: 'Launch & Support',
    desc: 'Monitored deployment, onboarding, and a dedicated support window — so you\'re never left managing alone.',
    icon: Rocket,
    relatedIds: [4],
    status: 'pending',
    energy: 40,
    category: 'support',
    content: 'Monitored deployment, onboarding, and a dedicated support window — so you\'re never left managing alone.',
    date: 'Phase 5'
  },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-inner">
        {/* Left Side: Content */}
        <div className="process-left">
          <div className="process-head">
            <div className="section-tag">
              <span className="section-tag-line" />
              <span className="section-tag-label">How We Work</span>
            </div>
            <h2>Our process, your success</h2>
            <div className="process-heading-line"></div>
            <p className="process-sub">
              Every engagement follows the same five-phase methodology — refined across 100+ projects to eliminate surprises and deliver on time.
            </p>
          </div>
        </div>

        {/* Right Side: Orbital Timeline Animation */}
        <div className="process-right">
          <RadialOrbitalTimeline timelineData={TIMELINE_DATA} />
        </div>
      </div>
    </section>
  );
}