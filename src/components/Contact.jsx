import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to a form service (Formspree, Netlify Forms, etc.)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="section-ornament" aria-hidden="true" style={{ margin: '0 auto 2rem' }}>
          <span className="section-ornament__line" />
          <span className="section-ornament__diamond" />
          <span className="section-ornament__line" />
        </div>

        <h2 className="contact__title">Speak into the Dark</h2>
        <p className="contact__sub">For commissions, collaborations, and inquiries of substance</p>

        {submitted ? (
          <div className="contact__thankyou">
            <div className="contact__thankyou-ornament" aria-hidden="true">✦</div>
            <p>Your message has been received.</p>
            <p className="contact__thankyou-sub">A reply will follow.</p>
          </div>
        ) : (
          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" name="name" type="text" required placeholder="Your name" />
              </div>
              <div className="contact__field">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" required placeholder="your@email.com" />
              </div>
            </div>

            <div className="contact__field">
              <label htmlFor="cf-subject">Subject</label>
              <input id="cf-subject" name="subject" type="text" placeholder="Commission · Collaboration · Other" />
            </div>

            <div className="contact__field">
              <label htmlFor="cf-message">Message</label>
              <textarea id="cf-message" name="message" required rows={6} placeholder="Describe your vision..." />
            </div>

            <button type="submit" className="contact__submit">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
