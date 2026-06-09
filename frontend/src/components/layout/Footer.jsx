import './Footer.css';

const SERVICES = [
  'Enterprise Systems',
  'Intelligent Automation',
  'Cloud & Infrastructure',
  'Data & Analytics',
  'Technical Consulting',
];

const COMPANY = [
  'About',
  'Projects',
  'Case Studies',
  'Insights',
  'Careers',
  'FAQs',
  'Contact',
];

const LEGAL = [
  'Privacy Policy',
  'Terms & Conditions',
];

const CONTACT = [
  {
    type: 'Jaipur Office',
    label:
      'Third Floor, AB Heights-8, Teachers Colony, Baba Market, DCM, Ajmer Road, Vaishali Nagar, Jaipur, Rajasthan',
    href:
      'https://maps.google.com?q=Third+Floor,+AB+Heights-8,+Teachers+Colony,+Baba+Market,+DCM,+Ajmer+Road,+Vaishali+Nagar,+Jaipur,+Rajasthan',
  },
  {
    type: 'Gurugram Office',
    label:
      'Plot 23, Sector 18, Maruti Industrial Development Area, Gurugram, Haryana 122015',
    href:
      'https://maps.google.com?q=Plot+23,+Sector+18,+Maruti+Industrial+Development+Area,+Gurugram,+Haryana+122015',
  },
  {
    type: 'Email',
    label: 'info@grassfront.com',
    href: 'mailto:info@grassfront.com',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              grass<span>FRONT</span>
            </h3>

            <p>
              GrassFRONT builds scalable digital systems and operational
              infrastructure for businesses focused on long-term growth.
            </p>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {SERVICES.map((service) => (
                <li key={service}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>

            <ul>
              {CONTACT.map((contact) => (
                <li
                  key={contact.label}
                  className="footer-contact-item"
                >
                  {contact.type.toLowerCase() === 'email' ? (
                    <a
                      href={contact.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {contact.label}
                    </a>
                  ) : (
                    <>
                      <span className="footer-contact-type">
                        {contact.type}:
                      </span>
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {contact.label}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span className="footer-copy">
            © 2025 GrassFRONT Technologies Pvt. Ltd. All rights reserved.
          </span>

          <div className="footer-legal">
            {LEGAL.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}