import './Media.css';

const ARTICLES = [
  { cat: 'Infrastructure', image: '/assets/media1.jpg', title: 'ERP vs Excel: When Should Businesses Upgrade? ' },
  { cat: 'Automation', image: '/assets/media2.png', title: 'From 40 hours to 4: automating procurement workflows for hospitality' },
  { cat: 'Announcement', image: '/assets/media3.png', title: 'GrassFRONT expands technical consulting services for enterprise clients' },
];

export default function Media() {
  return (
    <section className="media" id="media">
      <div className="section-inner">
        <div className="section-tag">
          <span className="section-tag-line" />
          <span className="section-tag-label">Media & Insights</span>
        </div>

        <h2>Insights &amp; perspectives</h2>

        <p className="media-intro">
          Explore engineering insights, platform updates, infrastructure discussions, and company announcements from the GrassFRONT team.
        </p>

        <div className="media-grid">
          {ARTICLES.map(a => (
            <div key={a.title} className="media-card reveal">
              <div className="media-thumb">
                <img src={a.image} alt={a.title} />
              </div>
              <div className="media-content">
                <div className="media-cat">{a.cat}</div>
                <h4>{a.title}</h4>
                <span className="media-read">
                  Read <span className="media-read-arrow">↗</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}