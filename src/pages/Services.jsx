import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  ShieldCheck, 
  Users, 
  TrendingUp, 
  Sparkles, 
  Briefcase, 
  Crown, 
  Cpu, 
  Layers,
  Search,
  Clock,
  PhoneCall
} from 'lucide-react';
import servicesData from '../data/services.json';

const FILTER_PILLS = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'contract-staffing', label: 'Contract Staffing' },
  { id: 'permanent-staffing', label: 'Permanent Staffing' },
  { id: 'executive-search', label: 'Executive Search' },
  { id: 'ai-services', label: 'AI Services' },
];

const INDUSTRIES_TICKER = [
  { name: 'Technology & AI', slug: 'it-services' },
  { name: 'Healthcare & Life Sciences', slug: 'medical-solutions' },
  { name: 'Food & Beverage', slug: 'food-and-beverage' },
  { name: 'Engineering & Energy', slug: 'construction-energy-and-utility' },
  { name: 'Supply Chain & Logistics', slug: 'supply-chain-management' },
  { name: 'Advanced Manufacturing', slug: 'production-solutions' },
];

export default function Services() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredServices = activeFilter === 'all'
    ? servicesData
    : servicesData.filter((s) => s.slug === activeFilter);

  const getServiceIcon = (slug) => {
    switch (slug) {
      case 'contract-staffing':
        return <Users className="h-4 w-4 text-sky-600" />;
      case 'permanent-staffing':
        return <Briefcase className="h-4 w-4 text-emerald-600" />;
      case 'executive-search':
        return <Crown className="h-4 w-4 text-amber-600" />;
      case 'ai-services':
        return <Cpu className="h-4 w-4 text-indigo-600" />;
      default:
        return <Sparkles className="h-4 w-4 text-sky-600" />;
    }
  };

  return (
    <main className="services-page">
      {/* 1. HERO BANNER */}
      <section className="services-hero">
        <div className="services-hero__wrap">
          <span className="services-hero__pill">
            <Sparkles className="h-4 w-4 text-amber-500" />
            <span>Specialized Workforce Solutions</span>
          </span>

          <h1>
            Comprehensive Staffing &amp; <span className="text-gradient">Workforce Solutions</span>
          </h1>

          <p>
            From on-demand temporary staffing to retained executive search and custom autonomous AI workflows, Trispark engineers scalable talent infrastructure tailored to your exact business objectives.
          </p>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="services-stats-wrap">
        <div className="services-stats-grid">
          <div className="services-stat-item">
            <div className="services-stat-number">20+</div>
            <div className="services-stat-label">Years Staffing Leadership</div>
          </div>
          <div className="services-stat-item">
            <div className="services-stat-number">24–48h</div>
            <div className="services-stat-label">Average Shortlist Delivery</div>
          </div>
          <div className="services-stat-item">
            <div className="services-stat-number">98%</div>
            <div className="services-stat-label">Placement Retention Rate</div>
          </div>
          <div className="services-stat-item">
            <div className="services-stat-number">4 Pillars</div>
            <div className="services-stat-label">Specialized Service Offerings</div>
          </div>
        </div>
      </section>

      {/* 3. CAPABILITY FILTER BAR */}
      <section className="services-filter-bar">
        {FILTER_PILLS.map((pill) => {
          const isActive = activeFilter === pill.id;
          return (
            <button
              key={pill.id}
              type="button"
              onClick={() => setActiveFilter(pill.id)}
              className={`services-filter-pill ${isActive ? 'is-active' : ''}`}
            >
              {pill.id !== 'all' && getServiceIcon(pill.id)}
              <span>{pill.label}</span>
            </button>
          );
        })}
      </section>

      {/* 4. CORE SERVICES GRID */}
      <section className="services-cards-grid">
        {filteredServices.map((srv) => (
          <article key={srv.slug} className="service-card-modern">
            {/* Visual Media Header */}
            <div className="service-card__media">
              <img
                src={srv.image}
                alt={srv.name}
                loading="lazy"
                width="800"
                height="475"
              />
              <span className="service-card__badge-left">
                {getServiceIcon(srv.slug)}
                <span>{srv.badge || srv.subtitle}</span>
              </span>
              <span className="service-card__badge-right">
                {srv.metric}
              </span>
            </div>

            {/* Card Content */}
            <div className="service-card__body">
              <div className="service-card__header">
                <h2 className="service-card__title">
                  <Link to={`/services/${srv.slug}`}>
                    {srv.name}
                  </Link>
                </h2>
                <p className="service-card__desc">
                  {srv.description}
                </p>
              </div>

              {/* Highlights Box */}
              {srv.highlights && srv.highlights.length > 0 && (
                <div className="service-card__highlights">
                  {srv.highlights.map((hl, idx) => (
                    <div key={idx} className="service-highlight-row">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong>{hl.title}: </strong>
                        <span>{hl.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Target Roles Tag Cloud */}
              {srv.targetRoles && srv.targetRoles.length > 0 && (
                <div className="service-card__roles">
                  <span className="service-card__roles-label">Common Roles Placed</span>
                  <div className="service-roles-pills">
                    {srv.targetRoles.map((role, idx) => (
                      <span key={idx} className="service-role-tag">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="service-card__actions">
                <Link
                  to={`/services/${srv.slug}`}
                  className="btn-service-primary"
                >
                  <span>Explore {srv.name.split(' ')[0]}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  to="/contact-us"
                  className="btn-service-secondary"
                >
                  <span>Request Consultation</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* 5. 4-STEP STAFFING DELIVERY LIFECYCLE */}
      <section className="services-process">
        <div className="services-process__wrap">
          <div className="services-process__header">
            <span className="services-hero__pill">
              <Layers className="h-4 w-4 text-primary" />
              <span>Our Delivery Methodology</span>
            </span>
            <h2>How We Deliver Precision Talent</h2>
            <p>
              Our battle-tested recruiting pipeline combines seasoned leadership, extensive talent networks, and structured technical audits.
            </p>
          </div>

          <div className="services-process__grid">
            <div className="services-process__card">
              <span className="services-process__step-num">01</span>
              <div className="services-process__icon-box">
                <Search className="h-5 w-5" />
              </div>
              <h3>Talent Mapping</h3>
              <p>
                We dissect your technical scope, project duration, team culture, and compensation benchmarks to map optimal talent pools.
              </p>
            </div>

            <div className="services-process__card">
              <span className="services-process__step-num">02</span>
              <div className="services-process__icon-box">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3>Rigorous Vetting</h3>
              <p>
                Multi-stage screening evaluating technical competence, credentials, licensing, background verification, and peer references.
              </p>
            </div>

            <div className="services-process__card">
              <span className="services-process__step-num">03</span>
              <div className="services-process__icon-box">
                <Clock className="h-5 w-5" />
              </div>
              <h3>Rapid Shortlist</h3>
              <p>
                Presenting interview-ready, pre-screened candidate profiles in as little as 24 to 48 hours for immediate stakeholder review.
              </p>
            </div>

            <div className="services-process__card">
              <span className="services-process__step-num">04</span>
              <div className="services-process__icon-box">
                <Users className="h-5 w-5" />
              </div>
              <h3>Onboarding Support</h3>
              <p>
                Structured transition support, payroll compliance, and proactive check-ins to ensure sustained retention and project success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE TRISPARK */}
      <section className="services-why">
        <div className="services-process__header">
          <span className="services-hero__pill">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>The Trispark Advantage</span>
          </span>
          <h2>Why Industry Leaders Choose Trispark</h2>
          <p>
            We go beyond matching resumes — we provide reliable workforce capacity that reduces hiring risk and accelerates business execution.
          </p>
        </div>

        <div className="services-why__grid">
          <div className="services-why__card">
            <div className="services-why__icon">
              <Zap className="h-5 w-5 text-sky-600" />
            </div>
            <h3>Rapid 24–48h Turnaround</h3>
            <p>
              Pre-vetted talent pipelines enable our teams to submit qualified candidate shortlists in as little as 24 to 48 hours.
            </p>
          </div>

          <div className="services-why__card">
            <div className="services-why__icon">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
            </div>
            <h3>Multi-Tiered Verification</h3>
            <p>
              Comprehensive background checks, medical licensing audits, technical skills validation, and thorough reference checks.
            </p>
          </div>

          <div className="services-why__card">
            <div className="services-why__icon">
              <Users className="h-5 w-5 text-amber-600" />
            </div>
            <h3>Dedicated Practice Lead</h3>
            <p>
              A single point of contact who understands your company culture, technology stack, and hiring specifications.
            </p>
          </div>

          <div className="services-why__card">
            <div className="services-why__icon">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
            </div>
            <h3>Elastic Scalability</h3>
            <p>
              Flex team sizes up or down without permanent overhead liabilities, allowing you to react dynamically to business demand.
            </p>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES CROSS-LINK TICKER */}
      <section className="py-12 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">
            Providing Specialized Staffing Across Core Industries
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {INDUSTRIES_TICKER.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200/80 text-xs font-semibold text-slate-700 hover:text-primary hover:border-primary/40 hover:shadow-xs transition-all"
              >
                <span>{ind.name}</span>
                <ArrowRight className="h-3 w-3 text-slate-400 group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="services-cta-banner">
        <div className="services-cta-box">
          <h2>Ready to Scale Your Workforce With Proven Talent?</h2>
          <p>
            Whether you need agile contract talent next week, a senior executive to steer a critical division, or custom AI workflow automation, Trispark is your trusted partner.
          </p>
          <div className="services-cta-actions">
            <Link to="/contact-us" className="btn-cta-white">
              <span>Schedule a Talent Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/jobs" className="btn-cta-outline">
              <Briefcase className="h-4 w-4" />
              <span>Explore Open Roles</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
