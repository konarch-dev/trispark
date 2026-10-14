import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <main className="about-page">
      {/* About Main Section */}
      <section className="about-section">
        <div className="about-page-wrap">
          {/* Media on the left */}
          <div className="about__media">
            <div className="about__media-main">
              <img
                src="/assets/images/about-1.webp"
                alt="Trispark leadership team in a meeting"
                width="800"
                height="1000"
                loading="eager"
              />
            </div>
            <div className="about__media-second">
              <img
                src="/assets/images/about-2.webp"
                alt="Recruiter shaking hands with a client"
                width="720"
                height="720"
                loading="lazy"
              />
            </div>
            <div className="about__stat">
              <div className="about__stat-num">
                20<span>+</span>
              </div>
              <div className="about__stat-label">
                Years of leadership in staffing and recruiting
              </div>
            </div>
          </div>

          {/* Body on the right */}
          <div className="about__body">
            <h1>Staffing Expertise You Can Rely On.</h1>
            <p>
              Trispark brings more than 20 years of leadership experience across staffing, recruiting, and workforce solutions to help businesses find the people they need.
            </p>
            <div className="about__paras">
              <p>
                We work with organizations to understand workforce requirements, identify qualified professionals, and support hiring from the initial requirement through placement.
              </p>
              <p>
                Our approach combines experienced leadership, targeted recruiting, and a clear understanding of the business behind every hiring requirement.
              </p>
            </div>

            <h3>What Trispark Brings to the Table</h3>
            <div className="about__grid">
              <div className="about__feature">
                <div className="about__feature-title">
                  <span className="about__feature-dot" style={{ background: '#1f9ede' }}></span>
                  20+ Years of Leadership Experience
                </div>
                <p>
                  Experienced leadership across staffing, recruiting, workforce solutions, and talent acquisition.
                </p>
              </div>

              <div className="about__feature">
                <div className="about__feature-title">
                  <span className="about__feature-dot" style={{ background: '#8e2d8c' }}></span>
                  Talent Market Intelligence
                </div>
                <p>
                  An understanding of hiring requirements, talent markets, and workforce expectations across industries.
                </p>
              </div>

              <div className="about__feature">
                <div className="about__feature-title">
                  <span className="about__feature-dot" style={{ background: '#f2a93b' }}></span>
                  Targeted Sourcing
                </div>
                <p>
                  Recruiting focused on the skills, experience, location, seniority, and requirements of each position.
                </p>
              </div>

              <div className="about__feature">
                <div className="about__feature-title">
                  <span className="about__feature-dot" style={{ background: '#1f9ede' }}></span>
                  Flexible Workforce Solutions
                </div>
                <p>
                  Staffing and recruiting solutions that support immediate workforce requirements, long term hiring, and leadership appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="staging-final-cta">
        <div className="staging-final-cta__glow"></div>
        <div className="about-page-wrap">
          <div className="staging-final-cta__copy">
            <h2>Let's Start the Conversation.</h2>
            <p>Tell us whether you are building a team or looking for your next opportunity.</p>
          </div>
          <div className="staging-final-cta__ctas">
            <Link to="/contact-us" className="staging-btn staging-btn-gold">
              Hire Talent <span>&rarr;</span>
            </Link>
            <Link to="/jobs" className="staging-btn staging-btn-outline-white">
              Find Work <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
