import './Contact.css';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        <h2>Building something ambitious?</h2>
        <p>Let's discuss your platform, infrastructure, or operational needs.</p>
        <div className="cta-btns">
          <a href="mailto:hello@grassfront.in" className="cta-btn-primary">Book a Free Call</a>
          <a href="mailto:hello@grassfront.in" className="cta-btn-outline">Contact Us Now</a>
        </div>
      </div>
    </section>
  );
}