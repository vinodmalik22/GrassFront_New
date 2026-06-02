import './Trusted.css';

const LOGOS = ['Horeca Mall', 'Bizz Studio', 'Platter', 'TechCorp', 'BuildUp'];

export default function Trusted() {
  return (
    <div className="trusted">
      <div className="trusted-inner">
        <span className="trusted-label">Trusted by growing businesses</span>
        <div className="trusted-divider" />
        <div className="trusted-logos">
          {LOGOS.map(l => (
            <div key={l} className="trusted-logo">{l}</div>
          ))}
        </div>
      </div>
    </div>
  );
}