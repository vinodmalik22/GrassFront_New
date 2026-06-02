import './Footer.css';

const SERVICES = ['Enterprise Systems', 'Intelligent Automation', 'Cloud & Infrastructure', 'Data & Analytics', 'Technical Consulting'];
const COMPANY = ['About', 'Projects', 'Insights', 'Careers', 'Contact'];
const CONTACT = [
  { type: 'Jaipur Office', label: 'Third Floor, AB Heights-8, Teachers Colony, Baba Market, DCM, Ajmer Road, Vaishali Nagar, Jaipur, Rajasthan', href: 'https://maps.google.com?q=Third+Floor,+AB+Heights-8,+Teachers+Colony,+Baba+Market,+DCM,+Ajmer+Road,+Vaishali+Nagar,+Jaipur,+Rajasthan' },
  { type: 'Gurugram Office', label: 'Plot 23, Sector 18, Maruti Industrial Development Area, Gurugram, Haryana 122015', href: 'https://maps.google.com?q=Plot+23,+Sector+18,+Maruti+Industrial+Development+Area,+Gurugram,+Haryana+122015' },
  // { type: 'Phone', label: '+91 70146 26389', href: 'tel:+917014626389' },
  { type: 'Email', label: 'Info@grassfront.com', href: 'mailto:Info@grassfront.com' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">grass<span>FRONT</span></h3>
            <p>GrassFRONT builds scalable digital systems and operational infrastructure for businesses focused on long-term growth.</p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>{SERVICES.map(s => <li key={s}><a href="#services">{s}</a></li>)}</ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>{COMPANY.map(c => <li key={c}><a href="#">{c}</a></li>)}</ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>{CONTACT.map(c => (
              <li key={c.label} className="footer-contact-item">
                <span className="footer-contact-type">{c.type}:</span>
                <a href={c.href} target="_blank" rel="noreferrer">{c.label}</a>
              </li>
            ))}</ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">© 2025 GrassFRONT Technologies Pvt. Ltd. All rights reserved.</span>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}