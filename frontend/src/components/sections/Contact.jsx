import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2>Ready to Automate and Scale Your Business?</h2>
        <p>Let's discuss how custom software, ERP systems, AI automation, and business intelligence can improve your operations and support growth.</p>
        <div className="cta-btns">
          <a href="tel:+917014626389" className="cta-btn-primary">Talk to Our Experts</a>
          <a href="mailto:Info@grassfront.com" className="cta-btn-outline">Request a Project Estimate </a>
        </div>
      </div>
    </section>
  );
}