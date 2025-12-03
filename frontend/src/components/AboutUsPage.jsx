import React from "react";
import "./AboutUsPage.css";

const AboutUsPage = ({ theme = "light" }) => {
  return (
    <div className={`about-page ${theme}`}>
      <div className="about-container">
        {/* Header / Hero */}
        <header className="about-hero">
          <span className="about-pill">About Us</span>
          <h1 className="about-title">Akruti Media</h1>
          <p className="about-tagline">
            A dynamic digital news platform committed to truthful, transparent
            and impactful journalism.
          </p>
        </header>

        {/* Main layout */}
        <main className="about-main">
          {/* Left column */}
          <section className="about-main-left">
            {/* Who we are */}
            <section className="about-card">
              <h2 className="about-section-title">Who We Are</h2>
              <p>
                Welcome to Akruti Media, a digital news platform dedicated to
                delivering accurate, timely and unbiased news to readers across
                India and around the world. Founded with the vision of
                empowering society through responsible journalism, Akruti Media
                strives to be a trusted and credible source for people who seek
                clarity, depth and truth in today&apos;s fast‑paced information
                era.
              </p>
              <p>
                The team believes that authentic information shapes
                perspectives, drives meaningful decisions and inspires positive
                change. Every story is researched, fact‑checked and crafted with
                integrity so that readers receive news they can rely on.
              </p>
            </section>

            {/* What we cover */}
            <br/>
            <section className="about-card">
              <h2 className="about-section-title">What We Cover</h2>
              <p>
                Akruti Media offers wide‑ranging coverage of regional, national
                and international developments so that readers can follow
                everything that matters, from local stories to global events.
              </p>
              <div className="about-grid">
                <div className="about-chip-card">
                  <h3>Regional &amp; Local</h3>
                  <p>
                    Stories rooted in local culture, communities, governance,
                    social issues and people whose experiences shape everyday
                    life.
                  </p>
                </div>
                <div className="about-chip-card">
                  <h3>National Affairs</h3>
                  <p>
                    Detailed coverage of India&apos;s politics, policies,
                    economy and institutions with context and clarity.
                  </p>
                </div>
                <div className="about-chip-card">
                  <h3>World &amp; Geopolitics</h3>
                  <p>
                    Reporting on global affairs, diplomacy, conflicts and
                    breakthroughs that influence India and the wider world.
                  </p>
                </div>
                <div className="about-chip-card">
                  <h3>Health &amp; Environment</h3>
                  <p>
                    Reliable updates on health, wellness, climate change,
                    sustainability and environmental challenges.
                  </p>
                </div>
                <div className="about-chip-card">
                  <h3>Technology &amp; Lifestyle</h3>
                  <p>
                    The latest on technology, innovation, lifestyle trends and
                    culture in an increasingly digital world.
                  </p>
                </div>
                <div className="about-chip-card">
                  <h3>Entertainment &amp; More</h3>
                  <p>
                    Coverage of cinema, art, sports and other subjects that
                    reflect the changing pulse of society.
                  </p>
                </div>
              </div>
            </section>
          </section>

          {/* Right column */}
          <section className="about-main-right">
            {/* Mission */}
            <section className="about-card about-card-highlight">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-quote">
                “To deliver truthful, transparent and impactful journalism that
                informs, empowers and educates society.”
              </p>
              <ul className="about-list">
                <li>Uphold the highest standards of ethical journalism</li>
                <li>Present facts without bias or manipulation</li>
                <li>Amplify voices and stories that truly matter</li>
                <li>
                  Inspire meaningful conversations through well‑researched
                  reporting
                </li>
                <li>Bridge the gap between the public and verified information</li>
              </ul>
            </section>

            {/* Vision */}
            <br/>
            <section className="about-card">
              <h2 className="about-section-title">Our Vision</h2>
              <p>
                Akruti Media envisions a world in which everyone has access to
                credible, unbiased and high‑quality news—free from
                sensationalism, deliberate misinformation and undue influence.
              </p>
              <p>
                The organisation aims to stand as a symbol of trust, integrity
                and journalistic excellence for audiences in India and beyond.
              </p>
            </section>

            {/* Why choose us */}
            <br/>
            <section className="about-card">
              <h2 className="about-section-title">Why Choose Akruti Media?</h2>
              <ul className="about-list bullets">
                <li>Accurate &amp; verified news: every article is fact‑checked</li>
                <li>Unbiased reporting with neutrality and fairness</li>
                <li>24/7 updates that follow news as it unfolds</li>
                <li>
                  A dedicated editorial team driven by curiosity and integrity
                </li>
                <li>
                  A reader‑first approach where trust and experience come first
                </li>
              </ul>
            </section>
          </section>
        </main>

        {/* Call to action */}
        <section className="about-cta">
          <h2>Join Us in Our Journey</h2>
          <p>
            Akruti Media is more than a news website—it is a movement toward an
            informed, aware and empowered society. Readers are invited to explore
            stories, share perspectives and be part of a mission that places
            truth at the centre of journalism.
          </p>
          <p className="about-cta-note">
            Thank you for choosing Akruti Media. Together, let us build a world
            that values facts, transparency and truth.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
