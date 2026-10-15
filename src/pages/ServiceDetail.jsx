import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Users, ShieldCheck, FileCheck, RotateCw, Crown, TrendingUp, Lock, Cpu, Network, Activity } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();

  const validSlugs = [
    'contract-staffing',
    'permanent-staffing',
    'executive-search',
    'ai-services',
  ];
  if (!validSlugs.includes(slug)) {
    return <Navigate to="/services/contract-staffing" replace />;
  }

  const isContract = slug === 'contract-staffing';
  const isPermanent = slug === 'permanent-staffing';
  const isExecutive = slug === 'executive-search';
  const isAi = slug === 'ai-services';

  return (
    <>
      <main className="space-y-24 lg:space-y-36">
        <div className="container">
          <div className="my-12 lg:my-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Main Article Content (col-span-12 lg:col-span-8) */}
              <div className="col-span-12 lg:col-span-8">
                {isContract ? (
                  <article className="space-y-12">
                    {/* Hero Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                          Contract & Contingent Staffing
                        </span>
                      </div>
                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                        Add Talent When Your Business <span className="text-gradient">Needs It</span>
                      </h1>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Trispark provides flexible contract and contingent staffing that puts qualified professionals where businesses need them for the desired project duration.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Link
                          to="/contact-us"
                          className="btn-primary-action"
                        >
                          <span>Find Contract Talent</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <a
                          href="#process"
                          className="btn-secondary-action"
                        >
                          <span>Our Process</span>
                          <span aria-hidden="true">&darr;</span>
                        </a>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                      <img
                        alt="Contract Staffing - Flexible Talent"
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover object-center"
                        src="/assets/images/services/contract-staffing.jpg"
                      />
                    </div>

                    {/* Where Flexible Talent Fits & Delivers */}
                    { /*}   <div className="space-y-6 pt-2">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Where Flexible Talent Fits & What It Delivers
                        </h2>
                        <p className="text-muted-foreground mt-2 text-base">
                          See where flexible talent fits and what it delivers for your business.
                        </p>
                      </div>
  <div className="space-y-3.5">
                        {[
                          {
                            accent: 'border-l-blue-500 bg-blue-50/20',
                            need: 'Project-Based Hiring',
                            needDesc: 'Defined projects with a clear start and end.',
                            deliver: 'Right-Sized Teams',
                            deliverDesc: 'Bring in specialists for the duration of the work and release them when it is done.',
                          },
                          {
                            accent: 'border-l-purple-500 bg-purple-50/20',
                            need: 'Seasonal Demand',
                            needDesc: 'Busy periods that stretch your current team.',
                            deliver: 'Scalable Capacity',
                            deliverDesc: 'Scale up and down with demand without carrying extra headcount.',
                          },
                          {
                            accent: 'border-l-amber-500 bg-amber-50/20',
                            need: 'Business Expansion',
                            needDesc: 'New markets, locations or initiatives.',
                            deliver: 'Faster Growth',
                            deliverDesc: 'Add capacity quickly while you build your permanent team.',
                          },
                          {
                            accent: 'border-l-sky-500 bg-sky-50/20',
                            need: 'Coverage for Gaps',
                            needDesc: 'Vacancies, extended leave or hiring still underway.',
                            deliver: 'Continuity',
                            deliverDesc: 'Keep work moving with qualified professionals ready to start.',
                          },
                          {
                            accent: 'border-l-emerald-500 bg-emerald-50/20',
                            need: 'Specialized Skills',
                            needDesc: 'Roles that need niche technical or industry experience.',
                            deliver: 'Expert Access',
                            deliverDesc: 'Reach professionals with the specific experience a project calls for.',
                          },
                        ].map((row, i) => (
                          <div
                            key={i}
                            className={`rounded-xl border border-slate-200/90 border-l-4 ${row.accent} p-4 sm:p-5 shadow-2xs transition-all hover:shadow-xs`}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-3 md:gap-4">
                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                  Business Challenge
                                </span>
                                <h3 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.need}
                                </h3>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.needDesc}
                                </p>
                              </div>

                              <div className="hidden md:flex md:col-span-1 justify-center text-slate-400">
                                <ArrowRight className="h-5 w-5" />
                              </div>

                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                  What It Delivers
                                </span>
                                <h4 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.deliver}
                                </h4>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.deliverDesc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
{ */ }
                    {/* Our Contract Staffing Process */}
                    <div id="process" className="scroll-mt-24 space-y-6 pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                            Our Contract Staffing Process
                          </h2>
                          <p className="text-muted-foreground mt-2 text-base">
                            Structured workflows engineered for rapid, risk-free deployment.
                          </p>
                        </div>
                        <Link
                          to="/contact-us"
                          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80"
                        >
                          Start a Staffing Request &rarr;
                        </Link>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            num: '',
                            title: 'Understand Your Requirement',
                            desc: 'We define the position, required skills, experience, location, engagement terms, timeline, and business context.',
                          },
                          {
                            num: '',
                            title: 'Search Our Talent Pool',
                            desc: 'We begin with our existing candidate pool and internal talent database to identify professionals whose experience aligns with your requirements.',
                          },
                          {
                            num: '',
                            title: 'Screen and Shortlist',
                            desc: 'Our recruiting team uses structured screening workflows and internal systems to evaluate candidates against the defined criteria. Qualified professionals are shortlisted for your review.',
                          },
                          {
                            num: '',
                            title: 'Interview and Select',
                            desc: 'We coordinate the interview process and help move suitable candidates through the required stages.',
                          },
                          {
                            num: '',
                            title: 'Deploy',
                            desc: 'Once selected, the professional begins the contract engagement based on the agreed requirements and terms.',
                          },
                        ].map((step) => (
                          <div
                            key={step.title}
                            className="group flex items-start gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all hover:border-primary/40 hover:shadow-xs"
                          >
                            {step.num ? (
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-serif text-base font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {step.num}
                              </span>
                            ) : null}
                            <div className="space-y-1">
                              <h4 className="font-semibold text-slate-900 text-base leading-snug">
                                {step.title}
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Flexible Workforce Solutions / Full Scope Grid */}
                    <div className="space-y-6 pt-4">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Flexible Workforce Solutions
                        </h2>
                        <p className="text-slate-600 mt-2 text-base leading-relaxed">
                          Access qualified professionals for project-based, temporary, and evolving workforce needs — validated, compliant, and supported through every assignment.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Talent Coverage */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                              <Users className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Talent Coverage</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Contract professionals across technical, operational, and business functions.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Technology', 'Engineering', 'Operations', 'Skilled Professional'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Candidate Validation */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Candidate Validation</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Every contractor verified before the first day on site.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Skills assessment', 'Employment verification', 'Credential validation', 'Background screening'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Workforce Compliance */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                              <FileCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Workforce Compliance</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Documentation and authorization managed for each engagement.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Work authorization', 'Timekeeping', 'Assignment documentation', 'Payroll coordination'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Engagement Support */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                              <RotateCw className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Engagement Support</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Active management from start date to assignment close.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Contract extensions', 'Assignment changes', 'Replacements', 'Workforce coordination'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Card */}
                    <div className="service-bottom-cta">
                      <h3>
                        Build the Workforce Your Business Needs
                      </h3>
                      <p>
                        Tell us about the roles you need to fill, the skills required, and your expected timeline.
                      </p>
                      <div>
                        <Link
                          to="/contact-us"
                          className="btn-gold"
                        >
                          <span>Request Contract Staffing</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ) : isPermanent ? (
                  <article className="space-y-12">
                    {/* Hero Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                          Direct Hire Placement
                        </span>
                      </div>
                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                        Build a Workforce for <span className="text-gradient">Long-Term Growth</span>
                      </h1>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Trispark helps employers find qualified professionals for direct hire and full-time placement in permanent positions that support long-term business growth.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Link
                          to="/contact-us"
                          className="btn-primary-action"
                        >
                          <span>Find Permanent Talent</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <a
                          href="#process"
                          className="btn-secondary-action"
                        >
                          <span>Our Process</span>
                          <span aria-hidden="true">&darr;</span>
                        </a>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                      <img
                        alt="Permanent Staffing - Direct Hire Placement"
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover object-center"
                        src="/assets/images/services/permanent-staffing.jpg"
                      />
                    </div>

                    {/* Where Permanent Talent Delivers */}
                    <div className="space-y-6 pt-2">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Permanent Hires That Strengthen Your Team
                        </h2>
                        <p className="text-muted-foreground mt-2 text-base">
                          See where direct hire fits and what it brings to your business.
                        </p>
                      </div>
                      <div className="space-y-3.5">
                        {[
                          {
                            accent: 'border-l-blue-500 bg-blue-50/20',
                            need: 'Critical Full-Time Roles',
                            needDesc: 'Positions that need dedicated, long-term ownership.',
                            deliver: 'Lasting Commitment',
                            deliverDesc: 'Carefully matched professionals who take ownership of the role.',
                          },
                          {
                            accent: 'border-l-purple-500 bg-purple-50/20',
                            need: 'Business Expansion',
                            needDesc: 'New markets, locations or service lines.',
                            deliver: 'Teams Built to Last',
                            deliverDesc: 'Grow permanent capacity with people aligned to your direction.',
                          },
                          {
                            accent: 'border-l-amber-500 bg-amber-50/20',
                            need: 'Team Growth',
                            needDesc: 'Departments that need more hands.',
                            deliver: 'Cultural Fit',
                            deliverDesc: 'Add people who match your goals and culture.',
                          },
                          {
                            accent: 'border-l-sky-500 bg-sky-50/20',
                            need: 'Specialized Positions',
                            needDesc: 'Roles that demand deep technical or industry expertise.',
                            deliver: 'Right Expertise',
                            deliverDesc: 'Find the skills that long-term roles require.',
                          },
                          {
                            accent: 'border-l-emerald-500 bg-emerald-50/20',
                            need: 'Replacement Hiring',
                            needDesc: 'Key people leaving and seats left vacant.',
                            deliver: 'Continuity',
                            deliverDesc: 'Move from vacancy to hire faster and protect the business.',
                          },
                        ].map((row) => (
                          <div
                            key={row.need}
                            className={`rounded-xl border border-slate-200/90 border-l-4 ${row.accent} p-4 sm:p-5 shadow-2xs transition-all hover:shadow-xs`}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-3 md:gap-4">
                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                  Hiring Need
                                </span>
                                <h3 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.need}
                                </h3>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.needDesc}
                                </p>
                              </div>

                              <div className="hidden md:flex md:col-span-1 justify-center text-slate-400">
                                <ArrowRight className="h-5 w-5" />
                              </div>

                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                  What It Delivers
                                </span>
                                <h4 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.deliver}
                                </h4>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.deliverDesc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Our Direct Hire Placement Process */}
                    <div id="process" className="scroll-mt-24 space-y-6 pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                            Our Direct Hire Placement Process
                          </h2>
                          <p className="text-muted-foreground mt-2 text-base">
                            Connecting your business with talent for long-term success.
                          </p>
                        </div>
                        <Link
                          to="/contact-us"
                          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80"
                        >
                          Start a Hiring Request &rarr;
                        </Link>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            num: '',
                            title: 'Define Your Hiring Needs',
                            desc: 'Align on roles and responsibilities, required expertise, compensation, and organizational culture to establish the ideal candidate profile.',
                          },
                          {
                            num: '',
                            title: 'Source & Engage Talent',
                            desc: 'Combine our talent network, targeted sourcing, and passive candidate outreach to identify professionals aligned with your hiring goals.',
                          },
                          {
                            num: '',
                            title: 'Assess & Shortlist',
                            desc: 'Evaluate qualifications, career motivations, and organizational fit to present a focused shortlist of qualified candidates.',
                          },
                          {
                            num: '',
                            title: 'Interview & Select',
                            desc: 'Coordinate interviews, consolidate feedback, and support your team in selecting the right talent for long-term impact.',
                          },
                          {
                            num: '',
                            title: 'Offer & Placement Support',
                            desc: 'Facilitate offer negotiation, acceptance, and start-date coordination, with post-placement follow-ups to support a successful transition.',
                          },
                        ].map((step) => (
                          <div
                            key={step.title}
                            className="group flex items-start gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all hover:border-primary/40 hover:shadow-xs"
                          >
                            {step.num ? (
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-serif text-base font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {step.num}
                              </span>
                            ) : null}
                            <div className="space-y-1">
                              <h4 className="font-semibold text-slate-900 text-base leading-snug">
                                {step.title}
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Strategic Talent Acquisition */}
                    <div className="space-y-6 pt-4">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Strategic Talent Acquisition
                        </h2>
                        <p className="text-slate-600 mt-2 text-base leading-relaxed">
                          Connect with qualified professionals who align with your organization’s roles, capabilities, and long-term goals.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Talent Coverage */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                              <Users className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Talent Coverage</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Full-time hiring across core functions and seniority levels.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Technology', 'Engineering', 'Finance', 'Operations', 'Sales & Marketing'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Candidate Qualification */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Candidate Qualification</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Multi-layered evaluation against role and team requirements.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Employment verification', 'Skills assessment', 'Reference checks', 'Credential validation'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Hiring Support */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                              <FileCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Hiring Support</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Structured guidance at every decision point in the hire.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Interview coordination', 'Candidate communications', 'Offer support', 'Hiring documentation'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Placement Support */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                              <RotateCw className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Placement Support</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Continuity from accepted offer to a successful start.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Offer acceptance', 'Notice-period coordination', 'Start-date management', 'New-hire onboarding'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Card */}
                    <div className="service-bottom-cta">
                      <h3>
                        Build Your Long-Term Team
                      </h3>
                      <p>
                        Tell us about the positions you need to fill, the skills required, and your hiring timeline.
                      </p>
                      <div>
                        <Link
                          to="/contact-us"
                          className="btn-gold"
                        >
                          <span>Request Permanent Staffing</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ) : isExecutive ? (
                  <article className="space-y-12">
                    {/* Hero Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                          Executive Search &amp; Leadership Hiring
                        </span>
                      </div>
                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                        Find Leaders Who <span className="text-gradient">Shape What&apos;s Next</span>
                      </h1>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        Trispark helps employers identify and recruit senior leaders and specialized professionals for positions that have a direct impact on business performance.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Link
                          to="/contact-us"
                          className="btn-primary-action"
                        >
                          <span>Find Executive Talent</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <a
                          href="#process"
                          className="btn-secondary-action"
                        >
                          <span>Our Process</span>
                          <span aria-hidden="true">&darr;</span>
                        </a>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                      <img
                        alt="Executive Search & Leadership Hiring - Trispark"
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover object-center"
                        src="/assets/images/services/executive-search.jpg"
                      />
                    </div>

                    {/* Executive Search for Your Most Critical Roles */}
                    <div className="space-y-6 pt-2">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Executive Search for Your Most Critical Roles
                        </h2>
                        <p className="text-muted-foreground mt-2 text-base">
                          See where leadership search fits and what it delivers.
                        </p>
                      </div>
                      <div className="space-y-3.5">
                        {[
                          {
                            accent: 'border-l-blue-500 bg-blue-50/20',
                            need: 'C-Suite & Executive Roles',
                            needDesc: 'Positions with significant organizational responsibility.',
                            deliver: 'Proven Leaders',
                            deliverDesc: 'Identify senior leaders ready to carry that responsibility.',
                          },
                          {
                            accent: 'border-l-purple-500 bg-purple-50/20',
                            need: 'Functional Leadership',
                            needDesc: 'Heads of finance, operations, technology, sales and people.',
                            deliver: 'Depth of Experience',
                            deliverDesc: 'Recruit leaders who have run these functions before.',
                          },
                          {
                            accent: 'border-l-amber-500 bg-amber-50/20',
                            need: 'Specialized Leadership',
                            needDesc: 'Roles that need rare industry, technical or functional depth.',
                            deliver: 'Niche Access',
                            deliverDesc: 'Reach candidates most searches never find.',
                          },
                          {
                            accent: 'border-l-sky-500 bg-sky-50/20',
                            need: 'Confidential Searches',
                            needDesc: 'Sensitive appointments and succession needs.',
                            deliver: 'Discretion',
                            deliverDesc: 'Run searches quietly with no disruption to your team.',
                          },
                          {
                            accent: 'border-l-emerald-500 bg-emerald-50/20',
                            need: 'Growth & Transformation',
                            needDesc: 'New markets, expansion and major change.',
                            deliver: 'Ready for Change',
                            deliverDesc: 'Assemble leadership teams built for what comes next.',
                          },
                        ].map((row) => (
                          <div
                            key={row.need}
                            className={`rounded-xl border border-slate-200/90 border-l-4 ${row.accent} p-4 sm:p-5 shadow-2xs transition-all hover:shadow-xs`}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-3 md:gap-4">
                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                  Leadership Challenge
                                </span>
                                <h3 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.need}
                                </h3>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.needDesc}
                                </p>
                              </div>

                              <div className="hidden md:flex md:col-span-1 justify-center text-slate-400">
                                <ArrowRight className="h-5 w-5" />
                              </div>

                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                  What It Delivers
                                </span>
                                <h4 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.deliver}
                                </h4>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.deliverDesc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Our Executive & Leadership Search Process */}
                    <div id="process" className="scroll-mt-24 space-y-6 pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                            Our Executive &amp; Leadership Search Process
                          </h2>
                          <p className="text-muted-foreground mt-2 text-base">
                            Connecting organizations with leaders who drive strategy, performance, and growth.
                          </p>
                        </div>
                        <Link
                          to="/contact-us"
                          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80"
                        >
                          Start an Executive Search &rarr;
                        </Link>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            num: '',
                            title: 'Define the Leadership Mandate',
                            desc: 'Align on strategic priorities, leadership competencies, organizational culture, and success measures to define the ideal leader.',
                          },
                          {
                            num: '',
                            title: 'Identify & Engage Leaders',
                            desc: 'Conduct targeted market mapping and confidential outreach to accomplished executives and emerging leaders.',
                          },
                          {
                            num: '',
                            title: 'Evaluate & Shortlist',
                            desc: 'Assess leadership track record, functional expertise, strategic judgment, and cultural alignment to present a focused shortlist.',
                          },
                          {
                            num: '',
                            title: 'Facilitate Stakeholder Selection',
                            desc: 'Coordinate stakeholder interviews and consolidate feedback to support a well-informed leadership appointment.',
                          },
                          {
                            num: '',
                            title: 'Secure the Appointment',
                            desc: 'Support compensation negotiations, offer acceptance, and transition planning, with post-placement follow-ups.',
                          },
                        ].map((step) => (
                          <div
                            key={step.title}
                            className="group flex items-start gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all hover:border-primary/40 hover:shadow-xs"
                          >
                            {step.num ? (
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-serif text-base font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {step.num}
                              </span>
                            ) : null}
                            <div className="space-y-1">
                              <h4 className="font-semibold text-slate-900 text-base leading-snug">
                                {step.title}
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Executive Talent Intelligence */}
                    <div className="space-y-6 pt-4">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Executive Talent Intelligence
                        </h2>
                        <p className="text-slate-600 mt-2 text-base leading-relaxed">
                          Identify and engage proven leaders through focused research, market insight, and confidential search.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Leadership Coverage */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                              <Crown className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Leadership Coverage</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            C-suite, VP, and director-level searches across functions.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['C-suite', 'VP', 'Director', 'Senior Leadership', 'Specialized Executives'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Executive Assessment */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Executive Assessment</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            In-depth evaluation of leadership capability and fit.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Leadership track record', 'Functional expertise', 'References', 'Cultural alignment'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Search Intelligence */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                              <TrendingUp className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Search Intelligence</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Market data that informs every search strategy.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Market mapping', 'Target-company research', 'Compensation benchmarking', 'Talent intelligence'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Confidential Engagement */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                              <Lock className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Confidential Engagement</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Discreet, consultative handling of sensitive appointments.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Discreet outreach', 'Stakeholder coordination', 'Offer negotiation', 'Transition support'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Card */}
                    <div className="service-bottom-cta">
                      <h3>
                        Find Your Next Leader
                      </h3>
                      <p>
                        Tell us about the leadership position, experience required, and business objectives behind the hire.
                      </p>
                      <div>
                        <Link
                          to="/contact-us"
                          className="btn-gold"
                        >
                          <span>Request Executive Search</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ) : isAi ? (
                  <article className="space-y-12">
                    {/* Hero Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="inline-block rounded-full bg-blue-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                          AI Services &amp; Intelligent Automation
                        </span>
                      </div>
                      <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                        Move Beyond Automation. <span className="text-gradient">Build Intelligence That Acts.</span>
                      </h1>
                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                        From process automation and AI agents to generative AI, RAG, and MLOps, Trispark helps businesses design, build, and run AI that fits the way their teams already work.
                      </p>
                      <div className="flex flex-wrap items-center gap-3 pt-3">
                        <Link
                          to="/contact-us"
                          className="btn-primary-action"
                        >
                          <span>Explore AI Services</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                        <a
                          href="#process"
                          className="btn-secondary-action"
                        >
                          <span>Our Process</span>
                          <span aria-hidden="true">&darr;</span>
                        </a>
                      </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md">
                      <img
                        alt="AI Services & Intelligent Automation - Trispark"
                        loading="lazy"
                        decoding="async"
                        className="aspect-video w-full object-cover object-center"
                        src="/assets/images/services/ai-services.jpg"
                      />
                    </div>

                    {/* AI Services That Put Automation to Work */}
                    <div className="space-y-6 pt-2">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          AI Services That Put Automation to Work
                        </h2>
                        <p className="text-muted-foreground mt-2 text-base">
                          See where AI fits in your business and what it delivers.
                        </p>
                      </div>
                      <div className="space-y-3.5">
                        {[
                          {
                            accent: 'border-l-blue-500 bg-blue-50/20',
                            need: 'Back-Office Workflows',
                            needDesc: 'Invoices, approvals, onboarding and other repetitive tasks.',
                            deliver: 'Less Manual Work',
                            deliverDesc: 'Automate routine operations so teams can focus on higher-value work.',
                          },
                          {
                            accent: 'border-l-purple-500 bg-purple-50/20',
                            need: 'Autonomous Task Handling',
                            needDesc: 'Multi-step work across your CRM, ERP and internal tools.',
                            deliver: 'Work That Finishes Itself',
                            deliverDesc: 'AI agents plan and complete tasks from start to finish.',
                          },
                          {
                            accent: 'border-l-amber-500 bg-amber-50/20',
                            need: 'Content & Communication',
                            needDesc: 'Proposals, reports, summaries and customer messages.',
                            deliver: 'Faster Output',
                            deliverDesc: 'Draft at scale with generative AI while keeping your voice consistent.',
                          },
                          {
                            accent: 'border-l-sky-500 bg-sky-50/20',
                            need: 'Knowledge Access',
                            needDesc: 'Answers buried in your documents and data.',
                            deliver: 'Trusted Answers',
                            deliverDesc: 'Employees and customers find sourced answers with RAG and collaborative assistants.',
                          },
                          {
                            accent: 'border-l-emerald-500 bg-emerald-50/20',
                            need: 'Production Machine Learning',
                            needDesc: 'Models moving beyond the pilot stage.',
                            deliver: 'Reliable Performance',
                            deliverDesc: 'MLOps keeps models deployed, monitored and improving.',
                          },
                        ].map((row) => (
                          <div
                            key={row.need}
                            className={`rounded-xl border border-slate-200/90 border-l-4 ${row.accent} p-4 sm:p-5 shadow-2xs transition-all hover:shadow-xs`}
                          >
                            <div className="grid grid-cols-1 md:grid-cols-11 items-center gap-3 md:gap-4">
                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                                  Business Challenge
                                </span>
                                <h3 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.need}
                                </h3>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.needDesc}
                                </p>
                              </div>

                              <div className="hidden md:flex md:col-span-1 justify-center text-slate-400">
                                <ArrowRight className="h-5 w-5" />
                              </div>

                              <div className="md:col-span-5">
                                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                                  What It Delivers
                                </span>
                                <h4 className="font-semibold text-base text-slate-900 mt-0.5">
                                  {row.deliver}
                                </h4>
                                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                                  {row.deliverDesc}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Our AI Delivery Approach */}
                    <div id="process" className="scroll-mt-24 space-y-6 pt-4">
                      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <div>
                          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                            Our AI Delivery Approach
                          </h2>
                          <p className="text-muted-foreground mt-2 text-base">
                            End-to-end engineering from workflow evaluation to continuous model optimization.
                          </p>
                        </div>
                        <Link
                          to="/contact-us"
                          className="shrink-0 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80"
                        >
                          Start an AI Consultation &rarr;
                        </Link>
                      </div>

                      <div className="space-y-3">
                        {[
                          {
                            num: '',
                            title: 'Assess',
                            desc: 'We evaluate the workflow, business value, process complexity, available data, technical feasibility and implementation risks.',
                          },
                          {
                            num: '',
                            title: 'Design',
                            desc: 'We define the solution architecture, AI models, integrations, security controls, human checkpoints and success measures.',
                          },
                          {
                            num: '',
                            title: 'Build and Integrate',
                            desc: 'We develop the solution and connect it with enterprise platforms, APIs, ERP and CRM systems, knowledge bases, cloud services and legacy applications.',
                          },
                          {
                            num: '',
                            title: 'Deploy and Govern',
                            desc: 'We test performance, validate security, monitor AI outputs and establish the controls required for responsible production use.',
                          },
                          {
                            num: '',
                            title: 'Scale and Optimize',
                            desc: 'We improve performance, expand successful use cases, create reusable components and track operational impact over time.',
                          },
                        ].map((step) => (
                          <div
                            key={step.title}
                            className="group flex items-start gap-4 rounded-xl border border-slate-200/90 bg-white p-4 shadow-2xs transition-all hover:border-primary/40 hover:shadow-xs"
                          >
                            {step.num ? (
                              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 font-serif text-base font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                {step.num}
                              </span>
                            ) : null}
                            <div className="space-y-1">
                              <h4 className="font-semibold text-slate-900 text-base leading-snug">
                                {step.title}
                              </h4>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {step.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Applied AI Solutions */}
                    <div className="space-y-6 pt-4">
                      <div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                          Applied AI Solutions
                        </h2>
                        <p className="text-slate-600 mt-2 text-base leading-relaxed">
                          Design and deploy practical AI solutions that improve business processes, productivity, and decision-making.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* AI Capabilities */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
                              <Cpu className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">AI Capabilities</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Practical AI built for clearly defined business problems.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['AI agents', 'Generative AI', 'RAG systems', 'Workflow automation'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Solution Validation */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-purple-50 p-2 text-purple-600">
                              <ShieldCheck className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Solution Validation</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Feasibility, data, and risk assessed before build.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Use-case assessment', 'Data readiness', 'Technical feasibility', 'Security review'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Technology Integration */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-amber-50 p-2 text-amber-600">
                              <Network className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">Technology Integration</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Connected to the systems your teams already use.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['APIs', 'Enterprise platforms', 'Knowledge bases', 'Business workflows'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* AI Operations */}
                        <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-2xs space-y-3">
                          <div className="flex items-center gap-2.5">
                            <div className="rounded-lg bg-emerald-50 p-2 text-emerald-600">
                              <Activity className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base">AI Operations</h3>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Ongoing performance, governance, and ROI tracking.
                          </p>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {['Production deployment', 'Model monitoring', 'Performance evaluation', 'Optimization'].map((tag) => (
                              <span key={tag} className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Card */}
                    <div className="service-bottom-cta">
                      <h3>
                        Build Smarter Operations
                      </h3>
                      <p>
                        Tell us which workflows, agents, or AI initiatives you want to explore, and we will help you plan the right path.
                      </p>
                      <div>
                        <Link
                          to="/contact-us"
                          className="btn-gold"
                        >
                          <span>Request an AI Consultation</span>
                          <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                ) : null}
              </div>

              {/* Sidebar Column (col-span-12 lg:col-span-4) */}
              <div className="col-span-12 lg:col-span-4">
                <div className="sticky top-24">
                  <div className="space-y-12">
                    {/* Services Box */}
                    <div>
                      <div className="mb-4">
                        <h3 className="font-serif text-3xl font-extrabold text-slate-900">Services</h3>
                        <p className="text-sm text-muted-foreground">Here is a list of services that we provide.</p>
                      </div>
                      <ul className="relative divide-y divide-slate-100 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-gray-950/10">
                        <li className="py-3">
                          <Link className="group block" to="/services/contract-staffing">
                            <p className={`line-clamp-1 font-bold transition-colors ${slug === 'contract-staffing' ? 'text-primary' : 'group-hover:text-blue-600'}`}>
                              Contract Staffing
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              Trispark provides flexible contract and contingent staffing that puts qualified professionals where businesses need them for the desired project duration.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/services/permanent-staffing">
                            <p className={`line-clamp-1 font-bold transition-colors ${slug === 'permanent-staffing' ? 'text-primary' : 'group-hover:text-blue-600'}`}>
                              Permanent Staffing
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              Trispark helps employers find qualified professionals for direct hire and full-time placement in permanent positions that support long-term business growth.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/services/executive-search">
                            <p className={`line-clamp-1 font-bold transition-colors ${slug === 'executive-search' ? 'text-primary' : 'group-hover:text-blue-600'}`}>
                              Executive Search
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              Trispark helps employers identify and recruit senior leaders and specialized professionals for positions that have a direct impact on business performance.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/services/ai-services">
                            <p className={`line-clamp-1 font-bold transition-colors ${slug === 'ai-services' ? 'text-primary' : 'group-hover:text-blue-600'}`}>
                              AI Services
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              From process automation and AI agents to generative AI, RAG, and MLOps, Trispark helps businesses design, build, and run AI that fits the way their teams already work.
                            </small>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Industries Box */}
                    <div>
                      <div className="mb-4">
                        <h3 className="font-serif text-3xl font-extrabold text-slate-900">Industries</h3>
                        <p className="text-sm text-muted-foreground">Here is a list of industries that we have worked with.</p>
                      </div>
                      <ul className="relative divide-y divide-slate-100 before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-gray-950/10">
                        <li className="py-3">
                          <Link className="group block" to="/industries/medical-solutions">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Medical Solutions
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              The healthcare industry involves the provision of medical services, products, and technologies aimed at promoting health, preventing illnesses, and treating medical conditions.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/it-services">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              IT Services (Information Technology Services)
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              IT services encompass a broad range of services related to technology and information management.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/pharmaceuticals">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Pharma, Biotech &amp; Medical Devices
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              The Life Sciences sector comprises entities engaged in various disciplines, including biotechnology, pharmaceuticals, healthcare, and medical research.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/food-and-beverage">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Food &amp; Beverages
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              The Food &amp; Beverage sector encapsulates a diverse array of entities involved in the production, distribution, and consumption of food and beverages.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/supply-chain-management">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Supply Chain Management
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              Supply Chain Management (SCM) is a sector that encompasses the planning, execution, and optimization of processes.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/construction-energy-and-utility">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Construction, Energy &amp; Utility
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              We understand the intricate demands and challenges faced by core engineering companies.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              All Industries
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              View all industries that we have worked with.
                            </small>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Pre-Footer CTA */}
      <div className="bg-linear-to-br from-gray-900 to-blue-950 pre-footer-cta">
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using our services today.</span>
          </h2>
          <p className="leading-6 text-slate-300">
            Unlocking Success: Elevate Your Team with Trispark Staffing - From Tech to Healthcare Excellence!
          </p>
          <Link
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2"
            to="/contact-us"
          >
            Let's talk with us
            <span className="sr-only">Let's talk with us</span>
          </Link>
        </div>
      </div>
    </>
  );
}
