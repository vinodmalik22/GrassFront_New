import './Media.css';

const ARTICLES = [
  { cat: 'Infrastructure', thumb: 'Engineering', title: 'Designing for scale: how we architect multi-tenant SaaS platforms' },
  { cat: 'Automation', thumb: 'Product', title: 'From 40 hours to 4: automating procurement workflows for hospitality' },
  { cat: 'Announcement', thumb: 'Company', title: 'GrassFRONT expands technical consulting services for enterprise clients' },
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
            <div key={a.title} className="media-card">
              <div className="media-thumb">
                <span className="media-thumb-label">{a.thumb}</span>
              </div>
              <div className="media-content">
                <div className="media-cat">{a.cat}</div>
                <h4>{a.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}