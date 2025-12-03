import React from "react";
import "./ContactUsPage.css";

const ContactUsPage = ({ theme = "light" }) => {
  return (
    <div className={`contact-page ${theme}`}>
      <div className="contact-container">
        {/* Header */}
        <header className="contact-header">
          <span className="contact-pill">Contact Us</span>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            We’d love to hear from you. Share your questions, ideas or feedback
            with the Akruti Media team.
          </p>
        </header>

        <main className="contact-main">
          {/* Left side: text + social */}
          <section className="contact-left">
            <div className="contact-card">
              <h2 className="contact-section-title">We’d Love to Hear From You!</h2>
              <p>
                If you have any inquiries, feedback, suggestions or simply want
                to connect with us, feel free to reach out. Whether your message
                is about our news coverage, partnerships or general questions,
                we are always here to listen.
              </p>
              <p>
                Just say “Hi” and send us a message using the contact form on
                this page — our team at Akruti Media will get back to you as
                soon as possible.
              </p>
              <p>Thank you for reaching out to us!</p>
            </div>

            <div className="contact-card contact-social-card">
              <h3 className="contact-section-title small">Connect on Social</h3>
              <p className="contact-social-text">
                Follow Akruti Media for news highlights, updates and behind‑the‑scenes
                stories.
              </p>
              <div className="contact-social-row">
                <a
                  href="#"
                  className="contact-social-link fb"
                  aria-label="Akruti Media on Facebook"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="contact-social-link ig"
                  aria-label="Akruti Media on Instagram"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="contact-social-link tw"
                  aria-label="Akruti Media on Twitter"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="contact-social-link yt"
                  aria-label="Akruti Media on YouTube"
                >
                  YouTube
                </a>
              </div>
            </div>
          </section>

          {/* Right side: form */}
          <section className="contact-right">
            <form
              className="contact-form-card"
              onSubmit={(e) => {
                e.preventDefault();
                // hook up to your API here
              }}
            >
              <h2 className="contact-section-title">Send Us a Message</h2>

              <div className="contact-grid-2">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email ID</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <button type="submit" className="contact-submit-btn">
                Send Message
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ContactUsPage;
