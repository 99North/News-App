import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";

const sectionsConfig = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "terms", label: "Terms & Conditions" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "copyright", label: "Copyright Policy" },
];

const PrivacyPolicy = ({ theme = "light" }) => {
  const [activeSection, setActiveSection] = useState("privacy-policy");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section with the largest intersection ratio
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible && visible.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px", // trigger a bit before center
        threshold: [0.2, 0.4, 0.6],
      }
    );

    sectionsConfig.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`pp-page ${theme}`}>
      <div className="pp-container">
        {/* Header */}
        <header className="pp-header">
          <div className="pp-chip-row">
            <span className="pp-chip pp-chip-primary">Privacy Policy</span>
            <span className="pp-chip">Terms & Conditions</span>
            <span className="pp-chip">Disclaimer</span>
            <span className="pp-chip">Copyright Policy</span>
          </div>
          <h1 className="pp-title">
            Privacy Policy, Terms &amp; Conditions, Disclaimer &amp; Copyright
            Policy
          </h1>
          <p className="pp-updated">
            Last updated:&nbsp;
            <span>10 January 2025</span>
          </p>
        </header>

        {/* Layout */}
        <main className="pp-main">
          {/* Scroll‑spy nav */}
          <aside className="pp-nav">
            <p className="pp-nav-label">On this page</p>
            {sectionsConfig.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`pp-nav-link ${
                  activeSection === s.id ? "active" : ""
                }`}
              >
                {s.label}
              </a>
            ))}
          </aside>

          {/* Sections */}
          <section className="pp-sections">
            {/* PRIVACY POLICY */}
            <section id="privacy-policy" className="pp-card">
              <h2 className="pp-section-title">Privacy Policy</h2>
              <p>
                Akruti Media uses clear information management guidelines to
                define how it engages with readers, subscribers, visitors and all
                users of its digital platforms. These guidelines are reviewed
                regularly in line with changes in technology, regulation and
                privacy standards. If there is a material change in how personal
                information is handled, this page will be updated at least 30 days
                before the change becomes effective.
              </p>
              <p>
                The organisation recognises that privacy is important to you and
                is committed to maintaining the confidentiality and security of
                the information you share with us. Personal data is collected and
                used only as described below.
              </p>

              <h3 className="pp-subtitle">Information gathered and tracked</h3>
              <p>
                Information submitted through forms, subscriptions, feedback or
                registration on any Akruti Media platform may be stored in
                internal systems. This can include your name, email address, phone
                number (if provided), address or demographic details, interests
                and preferences, comments, messages and subscription details.
                Mandatory and optional fields are clearly marked on all forms.
              </p>
              <p>
                Such information helps improve content, deliver newsletters,
                manage subscriptions and understand audience needs. Personal data
                is not shared with third parties without your explicit consent,
                unless disclosure is required by law. Aggregated data may be used
                for analytics to measure interest in content and enhance future
                offerings.
              </p>

              <h3 className="pp-subtitle">Email and mailing lists</h3>
              <p>
                Email addresses provided during registration or subscription may
                be used to send newsletters, important announcements, account
                updates and occasional promotional messages. These addresses are
                not sold, rented or shared with third parties for their own
                marketing. Unsubscribe links are included in every bulk email, and
                you may also contact Akruti Media directly to opt out.
              </p>

              <h3 className="pp-subtitle">Subscription information</h3>
              <p>
                For premium services or newsletter subscriptions, you may be asked
                for your username, name, email address, phone number and state of
                residence. This data is used to manage your subscription and to
                understand the audience at an aggregate level. Payments are
                processed by independent, trusted payment gateways. Akruti Media
                does not store payment card numbers or CVV details, and the
                payment provider will always be visible to you during checkout.
              </p>

              <h3 className="pp-subtitle">Data security</h3>
              <p>
                Accounts are protected with encrypted passwords and additional
                security controls such as secure servers, restricted access,
                SSL-based encryption and periodic internal audits. Staff members
                can only access personal data where required for a specific
                support or operational task. While strong safeguards are used,
                users are responsible for keeping their login credentials private.
              </p>

              <h3 className="pp-subtitle">
                Opting out, corrections and cancellations
              </h3>
              <p>
                On request, Akruti Media can delete your personal information,
                correct inaccurate details or stop sending marketing emails while
                still allowing basic site access where possible. To request
                deletion, correction or unsubscription, you may send an email with
                the subject line “Unsubscribe” to the official contact address
                listed below.
              </p>

              <h3 className="pp-subtitle">
                Compliance with legal process / compelled disclosure
              </h3>
              <p>
                If required by law, court order or a competent government
                authority, Akruti Media may be obligated to disclose information
                that you have provided. Where legally permitted, reasonable
                efforts will be made to notify you before such disclosure so that
                you may respond or object. If no response is received within the
                permitted timeframe, the organisation must comply with the
                request.
              </p>

              <h3 className="pp-subtitle">Reservation of rights</h3>
              <p>
                Akruti Media may modify or update this Privacy Policy at any time
                to reflect legal, technical or operational changes. Continued use
                of the website or services after changes are published will be
                treated as acceptance of the revised policy.
              </p>

              <h3 className="pp-subtitle">Contact information</h3>
              <div className="pp-contact-box">
                <p className="pp-contact-name">Akruti Media</p>
                <p>Email: [your official email]</p>
                <p>Phone: [optional]</p>
                <p>Address: [optional]</p>
              </div>
            </section>

            {/* TERMS & CONDITIONS */}
            <section id="terms" className="pp-card">
              <h2 className="pp-section-title">Terms &amp; Conditions</h2>
              <p>
                By accessing or using the Akruti Media website, platform or
                services, you agree to these Terms and Conditions. They govern
                your use of our content, features and interactions with the
                platform, so please read them carefully.
              </p>

              <h3 className="pp-subtitle">Use of content</h3>
              <p>
                All articles, images, videos, graphics and other digital materials
                published by Akruti Media are provided for personal, informational
                and non-commercial use only. You may not copy, reproduce, modify,
                distribute, republish, upload or commercially exploit this content
                without express written permission. Unauthorised use may lead to
                legal action.
              </p>

              <h3 className="pp-subtitle">User responsibilities</h3>
              <p>
                You agree to provide accurate information when registering or
                interacting with our services, and not to upload harmful content,
                attempt unauthorised access or perform any action that could
                damage or disrupt the platform. The services must not be used for
                illegal or unethical purposes.
              </p>

              <h3 className="pp-subtitle">Account responsibilities</h3>
              <p>
                If you create an account, you are responsible for keeping your
                username and password confidential and for all activity that
                occurs under your account. You should notify Akruti Media promptly
                if you suspect unauthorised use or a security breach.
              </p>

              <h3 className="pp-subtitle">Subscription terms</h3>
              <p>
                Details of any paid subscription—including price, duration and
                renewal terms—will be presented at the time of purchase.
                Depending on your settings, subscriptions may renew
                automatically. Access associated with a subscription is
                non-transferable. Payments are processed by third-party gateways
                and are also subject to their terms and policies.
              </p>

              <h3 className="pp-subtitle">Third-party links</h3>
              <p>
                The website may include links to external sites for additional
                information or convenience. Akruti Media is not responsible for
                the content, security or privacy practices of external websites,
                and visiting them is at your own discretion.
              </p>

              <h3 className="pp-subtitle">Termination</h3>
              <p>
                Akruti Media may suspend or terminate your access to some or all
                services if it believes that these Terms and Conditions have been
                violated, that harmful activity has occurred or that the platform
                or content has been misused.
              </p>

              <h3 className="pp-subtitle">Governing law</h3>
              <p>
                These Terms and Conditions are governed by the laws of India. Any
                disputes will be subject to the exclusive jurisdiction of the
                appropriate courts in India.
              </p>
            </section>

            {/* DISCLAIMER */}
            <section id="disclaimer" className="pp-card">
              <h2 className="pp-section-title">Disclaimer</h2>
              <p>
                Akruti Media publishes news, opinion pieces, analysis and other
                informational content using data and sources considered to be
                credible. However, completeness, accuracy and timeliness cannot be
                guaranteed in every instance, and content may occasionally contain
                errors or outdated references.
              </p>
              <p>
                Opinions expressed in specific articles or programmes belong
                solely to the respective authors or contributors and do not
                necessarily reflect the official position of Akruti Media. The
                organisation is not liable for any loss, damage or inconvenience
                that may arise from reliance on the information available on its
                platforms.
              </p>
              <p>
                The website may include links to external websites. These links
                are provided for convenience only and do not amount to endorsement
                of the third-party content. Users access such sites at their own
                risk.
              </p>
            </section>

            {/* COPYRIGHT POLICY */}
            <section id="copyright" className="pp-card">
              <h2 className="pp-section-title">Copyright Policy</h2>
              <p>
                All content produced and published by Akruti Media—including
                articles, videos, images, graphics, logos, branding elements,
                website design, digital assets and source code—is protected under
                Indian copyright law and relevant international treaties.
              </p>
              <p>
                You may not reproduce, distribute, adapt, publish or use this
                material for commercial purposes without prior written permission
                from Akruti Media. Any attempt to misuse or unlawfully republish
                content may result in legal action.
              </p>
              <p>
                If you believe that your copyrighted work has been used on Akruti
                Media platforms without authorisation, you may send a notice
                including your name, contact details, proof of ownership and the
                exact URL of the allegedly infringing material. After reviewing
                the request, appropriate action will be taken as quickly as
                practicable.
              </p>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
