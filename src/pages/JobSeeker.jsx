import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import {
  UploadCloud,
  CheckCircle2,
  FileText,
  Briefcase,
  ChevronDown,
  ArrowRight,
  X,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  ShieldCheck,
  Building2,
  Clock,
} from 'lucide-react';

const INDUSTRIES_LIST = [
  {
    name: 'Technology',
    roles: 'Software Engineers, DevOps/Cloud, AI/ML Engineers, Cybersecurity, Forward Deployed Engineers',
    color: '#1f9ede',
  },
  {
    name: 'Healthcare',
    roles: 'Registered Nurses, Allied Health, Locum Tenens, Clinical Coordinators, Health Informatics',
    color: '#8e2d8c',
  },
  {
    name: 'Engineering',
    roles: 'Mechanical, Electrical, Civil, Automation, Robotics & Quality Engineers',
    color: '#f2a93b',
  },
  {
    name: 'Food & Beverages',
    roles: 'Food Safety & QA, Plant Operations, Packaging Technologists, Production Supervisors',
    color: '#1f9ede',
  },
  {
    name: 'Retail & Supply Chain',
    roles: 'Logistics Managers, Procurement Specialists, Distribution, Inventory Analysts',
    color: '#8e2d8c',
  },
  {
    name: 'Manufacturing',
    roles: 'Plant Operations, Continuous Improvement, Maintenance Technicians, Industrial Engineers',
    color: '#f2a93b',
  },
];

const FAQS = [
  {
    q: 'Does Trispark charge any fee to job seekers or candidates?',
    a: 'Never. Our recruiting, career consultation, resume evaluation, and interview placement services are 100% free for job seekers and candidates. All fees are paid by our partner client companies.',
  },
  {
    q: 'What types of job opportunities does Trispark represent?',
    a: 'We place professionals across flexible contract assignments, contract-to-hire arrangements, direct-hire permanent roles, and executive search leadership positions across technology, healthcare, engineering, manufacturing, and specialized sectors.',
  },
  {
    q: 'What happens after I submit my resume?',
    a: 'Our specialized recruiting team reviews your resume and profile against active and upcoming opportunities. If there is a potential match, a recruiter will reach out via phone or email within 24 to 48 business hours to discuss your career objectives and role details.',
  },
  {
    q: 'Can I apply for remote or hybrid positions?',
    a: 'Yes! We actively recruit for on-site, hybrid, and fully remote positions nationwide across the United States. You can specify your location preference when submitting your details.',
  },
  {
    q: 'What file formats and file size are accepted for resume uploads?',
    a: 'We accept PDF, DOC, and DOCX formats up to 8MB in size. Please ensure your contact details, work history, and primary technical competencies are clearly displayed.',
  },
];

export default function JobSeeker() {
  const { showToast } = useModal();
  const location = useLocation();
  const formRef = useRef(null);

  // Lead form tab: 'seeker' | 'employer'
  const [activeTab, setActiveTab] = useState('seeker');

  // Job Seeker Form State
  const [seekerForm, setSeekerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    expertise: '',
    engagementType: 'Contract & Permanent',
    location: '',
    notes: '',
    smsConsent1: true,
    agreeTerms: true,
  });

  // Employer Form State (secondary tab)
  const [employerForm, setEmployerForm] = useState({
    company: '',
    name: '',
    workEmail: '',
    phone: '',
    industry: '',
    positions: '',
    engagementType: '',
    location: '',
    timeline: '',
    requirements: '',
  });

  // Resume File State
  const [resumeFile, setResumeFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Handle URL hash navigation (#job-seekers or #contact)
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.toLowerCase();
      if (hash.includes('contact') || hash.includes('job-seekers') || hash.includes('submit')) {
        setTimeout(() => {
          formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [location]);

  // Drag and drop handlers
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const processFile = (file) => {
    const validExtensions = ['.pdf', '.doc', '.docx'];
    const fileName = file.name.toLowerCase();
    const isValidType = validExtensions.some((ext) => fileName.endsWith(ext));

    if (!isValidType) {
      showToast('Please upload a valid resume file (PDF, DOC, or DOCX).', 'error');
      return;
    }

    if (file.size > 8 * 1024 * 1024) {
      showToast('File size exceeds the 8MB limit.', 'error');
      return;
    }

    setResumeFile(file);
    showToast(`Attached: ${file.name}`);
  };

  // Seeker Form Submit
  const handleSeekerSubmit = (e) => {
    e.preventDefault();

    if (!seekerForm.firstName.trim() || !seekerForm.lastName.trim()) {
      showToast('Please provide your first and last name.', 'error');
      return;
    }
    if (!seekerForm.email.trim() || !seekerForm.email.includes('@')) {
      showToast('Please provide a valid email address.', 'error');
      return;
    }
    if (!seekerForm.phone.trim()) {
      showToast('Please provide your phone number.', 'error');
      return;
    }
    if (!seekerForm.expertise.trim()) {
      showToast('Please enter your area of expertise or target role.', 'error');
      return;
    }
    if (!resumeFile) {
      showToast('Please upload or attach your resume (PDF/DOC/DOCX).', 'error');
      return;
    }
    if (!seekerForm.agreeTerms) {
      showToast('Please agree to the Terms of Use and Privacy Policy.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      showToast('Resume submitted successfully! A recruiter will contact you shortly.');
      setSeekerForm({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        expertise: '',
        engagementType: 'Contract & Permanent',
        location: '',
        notes: '',
        smsConsent1: true,
        agreeTerms: true,
      });
      setResumeFile(null);
    }, 1200);
  };

  // Employer Form Submit
  const handleEmployerSubmit = (e) => {
    e.preventDefault();

    if (!employerForm.company.trim() || !employerForm.name.trim()) {
      showToast('Please provide your company name and contact name.', 'error');
      return;
    }
    if (!employerForm.workEmail.trim() || !employerForm.workEmail.includes('@')) {
      showToast('Please provide a valid work email address.', 'error');
      return;
    }
    if (!employerForm.phone.trim()) {
      showToast('Please provide your contact phone number.', 'error');
      return;
    }
    if (!employerForm.industry) {
      showToast('Please select your industry.', 'error');
      return;
    }
    if (!employerForm.engagementType) {
      showToast('Please select the engagement type.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      showToast('Hiring inquiry received! A Trispark specialist will contact you shortly.');
      setEmployerForm({
        company: '',
        name: '',
        workEmail: '',
        phone: '',
        industry: '',
        positions: '',
        engagementType: '',
        location: '',
        timeline: '',
        requirements: '',
      });
    }, 1200);
  };

  return (
    <div className="jobseeker-page-root">
      {/* -------------------------------------------------------------------
          1. HERO SECTION
          ------------------------------------------------------------------- */}
      <section className="jsk-hero">
        <div className="jsk-hero__glow" />

        <div className="jsk-hero__inner">
          {/* Eyebrow Badge */}
          <div className="jsk-badge">
            <span className="jsk-badge__dot" />
            For Job Seekers &amp; Candidates
          </div>

          {/* Main Title */}
          <h1>
            Take Your Next Career Step with <span className="accent-gradient">Confidence</span>.
          </h1>

          {/* Subtitle */}
          <p className="jsk-hero__subtitle">
            Tell us about your experience and the opportunity you are looking for. Whether you are
            seeking flexible contract work, direct-hire positions, or executive leadership roles,
            Trispark connects you with top employers nationwide.
          </p>

          {/* CTA Action Buttons */}
          <div className="jsk-hero__actions">
            <a
              href="#job-seekers"
              onClick={(e) => {
                e.preventDefault();
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="jsk-btn-gold"
            >
              Submit Your Resume
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link to="/jobs" className="jsk-btn-outline">
              Browse Current Openings
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Value Proposition Stat Grid */}
          <div className="jsk-stats-grid">
            <div className="jsk-stat-card">
              <div className="jsk-stat-num" style={{ color: '#38bdf8' }}>
                20+
              </div>
              <div className="jsk-stat-label">Years of Staffing Leadership</div>
            </div>

            <div className="jsk-stat-card">
              <div className="jsk-stat-num" style={{ color: '#c084fc' }}>
                100%
              </div>
              <div className="jsk-stat-label">Free Service for Candidates</div>
            </div>

            <div className="jsk-stat-card">
              <div className="jsk-stat-num" style={{ color: '#f5c451' }}>
                6+
              </div>
              <div className="jsk-stat-label">Core Specialized Industries</div>
            </div>

            <div className="jsk-stat-card">
              <div className="jsk-stat-num" style={{ color: '#34d399' }}>
                24-48h
              </div>
              <div className="jsk-stat-label">Rapid Recruiter Review</div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          2. CORE LEAD FORM SECTION (Direct from staging site #job-seekers)
          ------------------------------------------------------------------- */}
      <section id="contact" ref={formRef} className="jsk-contact">
        <span id="job-seekers" style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}>
          Job Seekers Anchor
        </span>

        <div className="jsk-contact__wrap">
          {/* Header */}
          <div className="jsk-contact__head">
            <h2>Connect With Us.</h2>
            <p>
              Whether you are looking for your next role or hiring talent, share a few details and a
              Trispark specialist will follow up.
            </p>
          </div>

          {/* Lead Form Card */}
          <div className={`jsk-lead-form ${activeTab === 'seeker' ? 'is-seeker' : 'is-employer'}`}>
            {/* Sliding Tab Switcher */}
            <div className="jsk-form-tabs">
              <div className="jsk-form-tabs__thumb" />
              <button
                type="button"
                className={activeTab === 'seeker' ? '' : 'is-inactive'}
                onClick={() => {
                  setActiveTab('seeker');
                  setSubmittedSuccess(false);
                }}
              >
                <span className="tab-dot tab-dot--seeker" />
                For Job Seekers
              </button>
              <button
                type="button"
                className={activeTab === 'employer' ? '' : 'is-inactive'}
                onClick={() => {
                  setActiveTab('employer');
                  setSubmittedSuccess(false);
                }}
              >
                <span className="tab-dot tab-dot--employer" />
                For Employers
              </button>
            </div>

            {/* Description Text */}
            <div className="jsk-lead-form__desc">
              <span>
                {activeTab === 'seeker'
                  ? 'Tell us about your experience and the opportunity you are looking for.'
                  : 'Tell us what you are hiring for and our team will help identify the right staffing or recruiting solution.'}
              </span>
              <span className="jsk-required-note">
                <span className="req">*</span> Required fields
              </span>
            </div>

            {submittedSuccess ? (
              <div className="jsk-success-card">
                <div className="jsk-success-icon">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3>
                  {activeTab === 'seeker'
                    ? 'Resume Successfully Received!'
                    : 'Inquiry Successfully Submitted!'}
                </h3>
                <p>
                  {activeTab === 'seeker'
                    ? 'Thank you for connecting with Trispark. A recruiting specialist specializing in your industry will evaluate your qualifications and contact you regarding matching opportunities.'
                    : 'Thank you for reaching out to Trispark. A workforce solutions specialist will be in touch with you shortly.'}
                </p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={() => setSubmittedSuccess(false)}
                    className="jsk-btn-outline"
                    style={{ background: '#f1f5f9', color: '#0f172a', borderColor: '#cbd5e1' }}
                  >
                    Submit Another Profile
                  </button>
                  <Link to="/jobs" className="jsk-btn-gold">
                    Explore Openings &rarr;
                  </Link>
                </div>
              </div>
            ) : activeTab === 'seeker' ? (
              /* ================= JOB SEEKER FORM ================= */
              <form onSubmit={handleSeekerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div className="jsk-fields-grid">
                  {/* First Name */}
                  <div className="jsk-field">
                    <label>
                      First Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={seekerForm.firstName}
                      onChange={(e) => setSeekerForm({ ...seekerForm, firstName: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="jsk-field">
                    <label>
                      Last Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Doe"
                      value={seekerForm.lastName}
                      onChange={(e) => setSeekerForm({ ...seekerForm, lastName: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  {/* Email */}
                  <div className="jsk-field">
                    <label>
                      Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john.doe@example.com"
                      value={seekerForm.email}
                      onChange={(e) => setSeekerForm({ ...seekerForm, email: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  {/* Phone */}
                  <div className="jsk-field">
                    <label>
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(281) 400-2666"
                      value={seekerForm.phone}
                      onChange={(e) => setSeekerForm({ ...seekerForm, phone: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  {/* Area of Expertise */}
                  <div className="jsk-field span-full">
                    <label>
                      Area of Expertise / Job Title <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Full Stack Developer, ICU Registered Nurse, Electrical Engineer"
                      value={seekerForm.expertise}
                      onChange={(e) => setSeekerForm({ ...seekerForm, expertise: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  {/* Preferred Location */}
                  <div className="jsk-field">
                    <label>Target Location / Remote</label>
                    <input
                      type="text"
                      placeholder="e.g. Houston, TX or Remote"
                      value={seekerForm.location}
                      onChange={(e) => setSeekerForm({ ...seekerForm, location: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  {/* Employment Preference */}
                  <div className="jsk-field">
                    <label>Employment Preference</label>
                    <select
                      value={seekerForm.engagementType}
                      onChange={(e) => setSeekerForm({ ...seekerForm, engagementType: e.target.value })}
                      className="jsk-select"
                    >
                      <option value="Contract & Permanent">Open to Any (Contract &amp; Permanent)</option>
                      <option value="Contract Staffing">Contract Staffing (Flexible/Hourly)</option>
                      <option value="Permanent Placement">Permanent / Direct Hire Only</option>
                      <option value="Executive Search">Executive &amp; Leadership Roles</option>
                    </select>
                  </div>

                  {/* Upload Resume */}
                  <div className="jsk-field span-full">
                    <label>
                      Upload Resume <span className="req">*</span>{' '}
                      <span className="hint">(PDF, DOC, DOCX up to 8MB)</span>
                    </label>

                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      className={`jsk-file-box ${resumeFile ? 'has-file' : ''}`}
                      style={{
                        borderColor: dragActive ? 'var(--c-purple)' : undefined,
                        background: dragActive ? '#faf5ff' : undefined,
                      }}
                    >
                      <div className="jsk-file-box__info">
                        {resumeFile ? (
                          <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
                        ) : (
                          <UploadCloud className="w-5 h-5 text-purple-600 shrink-0" />
                        )}
                        <span className="jsk-file-box__name">
                          {resumeFile
                            ? `${resumeFile.name} (${(resumeFile.size / 1024).toFixed(1)} KB)`
                            : 'Click to browse or drag and drop your resume file'}
                        </span>
                      </div>

                      {resumeFile ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setResumeFile(null);
                          }}
                          style={{
                            border: 0,
                            background: '#fee2e2',
                            color: '#b91c1c',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            fontSize: '12px',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                          }}
                        >
                          <X className="w-3.5 h-3.5" /> Remove
                        </button>
                      ) : (
                        <span className="jsk-file-box__btn">Browse</span>
                      )}

                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileInput}
                        title="Upload resume file"
                      />
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="jsk-field span-full">
                    <label>Additional Notes / LinkedIn Profile (Optional)</label>
                    <textarea
                      rows={3}
                      placeholder="Preferred salary range, notice period, or portfolio links..."
                      value={seekerForm.notes}
                      onChange={(e) => setSeekerForm({ ...seekerForm, notes: e.target.value })}
                      className="jsk-textarea"
                    />
                  </div>
                </div>

                {/* Consent Checkboxes */}
                <div className="jsk-consent-group">
                  <label className="jsk-checkbox-label">
                    <input
                      type="checkbox"
                      checked={seekerForm.smsConsent1}
                      onChange={(e) => setSeekerForm({ ...seekerForm, smsConsent1: e.target.checked })}
                    />
                    <span>
                      I agree to receive SMS notifications from Trispark regarding job alerts, application
                      updates, interview schedules, and placement details. Msg &amp; data rates may apply.
                      Reply STOP to opt out anytime.
                    </span>
                  </label>

                  <label className="jsk-checkbox-label">
                    <input
                      type="checkbox"
                      checked={seekerForm.agreeTerms}
                      onChange={(e) => setSeekerForm({ ...seekerForm, agreeTerms: e.target.checked })}
                    />
                    <span>
                      I acknowledge and agree to the{' '}
                      <Link to="/terms-and-conditions">Terms of Use</Link> and{' '}
                      <Link to="/privacy-policy">Privacy Policy</Link>. Trispark treats your private information with
                      strict confidentiality and never sells personal information.
                    </span>
                  </label>
                </div>

                {/* Submit Action Button */}
                <button type="submit" disabled={isSubmitting} className="jsk-submit-btn">
                  {isSubmitting ? (
                    <>Submitting Resume...</>
                  ) : (
                    <>
                      Submit Your Resume <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            ) : (
              /* ================= EMPLOYER FORM ================= */
              <form onSubmit={handleEmployerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div className="jsk-fields-grid">
                  <div className="jsk-field">
                    <label>
                      Company Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Health Corp"
                      value={employerForm.company}
                      onChange={(e) => setEmployerForm({ ...employerForm, company: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  <div className="jsk-field">
                    <label>
                      Contact Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={employerForm.name}
                      onChange={(e) => setEmployerForm({ ...employerForm, name: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  <div className="jsk-field">
                    <label>
                      Work Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sjenkins@acmehealth.com"
                      value={employerForm.workEmail}
                      onChange={(e) => setEmployerForm({ ...employerForm, workEmail: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  <div className="jsk-field">
                    <label>
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(281) 400-2666"
                      value={employerForm.phone}
                      onChange={(e) => setEmployerForm({ ...employerForm, phone: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  <div className="jsk-field">
                    <label>
                      Industry <span className="req">*</span>
                    </label>
                    <select
                      value={employerForm.industry}
                      onChange={(e) => setEmployerForm({ ...employerForm, industry: e.target.value })}
                      className="jsk-select"
                      required
                    >
                      <option value="">Select Industry</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Food & Beverages">Food &amp; Beverages</option>
                      <option value="Retail & Supply Chain">Retail &amp; Supply Chain</option>
                      <option value="Manufacturing">Manufacturing</option>
                      <option value="Other">Other Specialized Sector</option>
                    </select>
                  </div>

                  <div className="jsk-field">
                    <label>
                      Number of Positions <span className="req">*</span>
                    </label>
                    <input
                      type="number"
                      min={1}
                      required
                      placeholder="e.g. 3"
                      value={employerForm.positions}
                      onChange={(e) => setEmployerForm({ ...employerForm, positions: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  <div className="jsk-field">
                    <label>
                      Engagement Type <span className="req">*</span>
                    </label>
                    <select
                      value={employerForm.engagementType}
                      onChange={(e) => setEmployerForm({ ...employerForm, engagementType: e.target.value })}
                      className="jsk-select"
                      required
                    >
                      <option value="">Select Engagement Type</option>
                      <option value="Contract Staffing">Contract Staffing</option>
                      <option value="Permanent Staffing">Permanent Staffing</option>
                      <option value="Executive Search">Executive Search &amp; Leadership</option>
                      <option value="AI Services">AI &amp; Automation Services</option>
                      <option value="General Inquiry">General Staffing Consultation</option>
                    </select>
                  </div>

                  <div className="jsk-field">
                    <label>Target Location</label>
                    <input
                      type="text"
                      placeholder="City, State or Remote"
                      value={employerForm.location}
                      onChange={(e) => setEmployerForm({ ...employerForm, location: e.target.value })}
                      className="jsk-input"
                    />
                  </div>

                  <div className="jsk-field span-full">
                    <label>Hiring Requirements &amp; Candidate Profile</label>
                    <textarea
                      rows={3}
                      placeholder="Describe the skills, certifications, seniority level, and key responsibilities needed..."
                      value={employerForm.requirements}
                      onChange={(e) => setEmployerForm({ ...employerForm, requirements: e.target.value })}
                      className="jsk-textarea"
                    />
                  </div>
                </div>

                <button type="submit" disabled={isSubmitting} className="jsk-submit-btn">
                  {isSubmitting ? (
                    <>Submitting Request...</>
                  ) : (
                    <>
                      Talk to a Recruiter <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          3. CANDIDATE WORKFLOW PROCESS (4-Step Process)
          ------------------------------------------------------------------- */}
      <section className="jsk-process">
        <div className="jsk-process__wrap">
          <div className="jsk-section-head">
            <div className="jsk-section-eyebrow">Streamlined Process</div>
            <h2>How Trispark Works for Candidates</h2>
            <p>From submission to job offer, here is how we partner with you to find your next ideal role.</p>
          </div>

          <div className="jsk-process-grid">
            <div className="jsk-process-card">
              <span className="jsk-process-num" style={{ color: '#1f9ede' }}>
                01
              </span>
              <h3>Submit Your Profile</h3>
              <p>Upload your resume with your core competencies, compensation goals, and preferred location.</p>
            </div>

            <div className="jsk-process-card">
              <span className="jsk-process-num" style={{ color: '#8e2d8c' }}>
                02
              </span>
              <h3>Recruiter Consultation</h3>
              <p>A specialist recruiter reviews your background and aligns you with open and unadvertised client roles.</p>
            </div>

            <div className="jsk-process-card">
              <span className="jsk-process-num" style={{ color: '#f2a93b' }}>
                03
              </span>
              <h3>Direct Client Interview</h3>
              <p>We present your profile directly to hiring managers with tailored briefing and interview prep.</p>
            </div>

            <div className="jsk-process-card">
              <span className="jsk-process-num" style={{ color: '#10b981' }}>
                04
              </span>
              <h3>Offer &amp; Onboarding</h3>
              <p>We facilitate competitive offer negotiations, onboarding support, and continuous check-ins.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          4. INDUSTRIES & OPPORTUNITIES
          ------------------------------------------------------------------- */}
      <section className="jsk-industries">
        <div className="jsk-industries__wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <div className="jsk-section-eyebrow">Specialized Sectors</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, margin: 0, color: '#0f172a' }}>
                Opportunities Across Key Industries
              </h2>
            </div>
            <Link
              to="/industries"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '14.5px',
                fontWeight: 600,
                color: 'var(--c-blue-dark)',
                textDecoration: 'none',
              }}
            >
              Explore all industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="jsk-industries-grid">
            {INDUSTRIES_LIST.map((ind) => (
              <div key={ind.name} className="jsk-industry-card">
                <div className="jsk-industry-card__header">
                  <span className="jsk-industry-card__dot" style={{ background: ind.color }} />
                  <h3>{ind.name}</h3>
                </div>
                <p>{ind.roles}</p>
                <Link to="/jobs" className="jsk-industry-card__link">
                  View openings in {ind.name} &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          5. CANDIDATE TESTIMONIAL (Direct from staging site)
          ------------------------------------------------------------------- */}
      <section className="jsk-testimonial">
        <div className="jsk-testimonial__glow" />

        <div className="jsk-testimonial__wrap">
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#f5c451', marginBottom: '6px' }}>
              Candidate Feedback
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, margin: 0, color: '#ffffff' }}>
              Placed with Purpose
            </h2>
          </div>

          <div className="jsk-testimonial-card">
            <div className="jsk-testimonial-mark">&ldquo;</div>
            <p className="jsk-testimonial-quote">
              Trispark made my placement smooth from the very first conversation. They were
              professional, responsive, and kept me informed at every stage. I would gladly recommend
              Trispark to anyone looking for a reliable recruiting partner.
            </p>

            <div className="jsk-testimonial-author">
              <div className="jsk-author-info">
                <div className="jsk-author-avatar">UT</div>
                <div>
                  <h4 className="jsk-author-name">Ushasree T</h4>
                  <p className="jsk-author-role">MSSQL Database Developer</p>
                </div>
              </div>
              <span className="jsk-placement-tag">Major BFSI Client Placement</span>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          6. FAQ ACCORDION SECTION
          ------------------------------------------------------------------- */}
      <section className="jsk-faq">
        <div className="jsk-faq__wrap">
          <div className="jsk-section-head">
            <div className="jsk-section-eyebrow">Got Questions?</div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about working with Trispark as a job seeker.</p>
          </div>

          <div className="jsk-faq-list">
            {FAQS.map((faq, idx) => (
              <div key={faq.q} className={`jsk-faq-item ${openFaq === idx ? 'is-open' : ''}`}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="jsk-faq-q"
                >
                  <span>{faq.q}</span>
                  <span className="jsk-faq-icon">
                    <ChevronDown className="w-4 h-4" />
                  </span>
                </button>
                {openFaq === idx && <p className="jsk-faq-a">{faq.a}</p>}
              </div>
            ))}
          </div>

          <div className="jsk-faq-footer">
            Have a specific question?{' '}
            <a href="mailto:info@trisparkinc.com">Email our recruitment team &rarr;</a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------------
          7. FINAL BOTTOM CTA BANNER
          ------------------------------------------------------------------- */}
      <section className="jsk-final-cta">
        <div className="jsk-final-cta__glow" />

        <div className="jsk-final-cta__inner">
          <h2>Ready to Discover Your Next Opportunity?</h2>
          <p>Submit your resume today and let Trispark connect you with industry-leading employers nationwide.</p>
          <div className="jsk-final-cta__actions">
            <a
              href="#job-seekers"
              onClick={(e) => {
                e.preventDefault();
                formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="jsk-btn-gold"
            >
              Submit Your Resume Now &rarr;
            </a>
            <Link to="/jobs" className="jsk-btn-outline">
              Search Open Positions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
