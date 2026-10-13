import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { ArrowRight, CheckCircle2, Users, Briefcase, Zap, Shield, Target } from 'lucide-react';
import servicesData from '../data/services.json';

export default function Services() {
  const { openResumeModal } = useModal();

  return (
    <div className="space-y-20 lg:space-y-28 py-8">
      {/* Header */}
      <section className="container text-center max-w-3xl space-y-4">
        <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
          Our Staffing Capabilities
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Comprehensive Staffing & <span className="text-gradient">Workforce Solutions</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
          From on-demand temporary staffing to dedicated project-based recruiting teams, Trispark provides scalable talent infrastructure tailored to your exact business objectives.
        </p>
      </section>

      {/* Services Grid */}
      <section className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {servicesData.map((srv) => (
            <div
              key={srv.slug}
              className="group flex flex-col rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm hover-card"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={srv.image}
                  alt={srv.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/95 px-3.5 py-1 text-xs font-bold text-primary shadow-xs">
                    {srv.subtitle}
                  </span>
                </div>
              </div>

              <div className="flex-1 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 group-hover:text-primary transition-colors">
                    {srv.name}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Highlights:
                    </p>
                    {srv.slug === 'workforce-solutions' ? (
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Temporary & Contract Staffing for flexible coverage</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Temp-to-Hire options for cultural & skills validation</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Direct Hire & Permanent Placement for high-impact roles</span>
                        </li>
                      </ul>
                    ) : (
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Dedicated sprint recruitment for high-volume staffing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Niche technical screening & skill verification</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>Turnkey managed staffing without internal overhead</span>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
                  >
                    <span>View full service details</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    to="/contact-us"
                    className="rounded-lg bg-blue-50 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-50/80 py-16 border-y border-slate-100">
        <div className="container space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <h2 className="font-serif text-3xl font-bold text-slate-900">
              Why Choose Trispark For Your Staffing Needs?
            </h2>
            <p className="text-sm text-slate-600">
              We leverage data-backed screening, deep talent networks, and an agile recruitment engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Rapid Turnaround</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pre-vetted talent pipelines enable our teams to submit qualified candidate shortlists in as little as 24 to 48 hours.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary mb-4">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Rigorous Verification</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Background checks, medical licensing audits, technical skills validation, and thorough reference checks.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center text-primary mb-4">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-900 mb-2">Dedicated Recruiter</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A single point of contact who understands your company culture, technology stack, and hiring requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
