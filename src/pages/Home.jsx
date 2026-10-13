import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import testimonialsData from '../data/testimonials.json';

const HERO_SLIDES = [
  {
    title: 'Medical Solutions',
    src: 'https://www.patternshiring.com/assets/images/industries/5.webp',
  },
  {
    title: 'IT Services (Information Technology Services)',
    src: 'https://www.patternshiring.com/assets/images/industries/6.webp',
  },
  {
    title: 'Allied Service',
    src: 'https://www.patternshiring.com/assets/images/industries/1.webp',
  },
  {
    title: 'Automobile Industry',
    src: 'https://www.patternshiring.com/assets/images/industries/2.webp',
  },
  {
    title: 'BFSI (Banking, Financial Services, and Insurance)',
    src: 'https://www.patternshiring.com/assets/images/industries/3.webp',
  },
  {
    title: 'Construction, Energy & Utility',
    src: 'https://www.patternshiring.com/assets/images/industries/11.webp',
  },
  {
    title: 'Food & Beverage',
    src: 'https://www.patternshiring.com/assets/images/industries/4.webp',
  },
  {
    title: 'Pharma, Biotech & Medical Devices',
    src: 'https://www.patternshiring.com/assets/images/industries/8.webp',
  },
  {
    title: 'Production Solutions',
    src: 'https://www.patternshiring.com/assets/images/industries/7.webp',
  },
  {
    title: 'Supply Chain Management',
    src: 'https://www.patternshiring.com/assets/images/industries/9.webp',
  },
  {
    title: 'Telecommunication',
    src: 'https://www.patternshiring.com/assets/images/industries/10.webp',
  },
];

const ROLES_LIST = [
  'Medical Solutions',
  'IT Services',
  'Allied Service',
  'Automobile Industry',
  'BFSI (Banking, Financial Services, and Insurance)',
  'Construction, Energy & Utility',
  'Food & Beverage',
  'Pharma, Biotech & Medical Devices',
  'Production Solutions',
  'Supply Chain Management',
  'Telecommunication',
];

export default function Home() {
  const { showToast } = useModal();

  // Hero Image Slider State - automatically transitions images
  const [heroSlideIdx, setHeroSlideIdx] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Submit Resume Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    number: '',
    smsOptIn1: false,
    smsOptIn2: false,
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Testimonials Carousel State
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);
  const [expandedQuote, setExpandedQuote] = useState(false);

  const activeReview = testimonialsData[currentReviewIdx] || testimonialsData[0];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      showToast('Please fill out your full name and email.', 'error');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Your resume has been submitted successfully to Trispark!');
      setFormData({
        name: '',
        email: '',
        role: '',
        number: '',
        smsOptIn1: false,
        smsOptIn2: false,
      });
      setResumeFile(null);
    }, 1000);
  };

  const nextReview = () => {
    setExpandedQuote(false);
    setCurrentReviewIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevReview = () => {
    setExpandedQuote(false);
    setCurrentReviewIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <>
      {/* 1. HERO SECTION WITH CHANGING BACKGROUND IMAGES AND EMBEDDED SUBMIT RESUME FORM */}
      <section id="hero-section">
        <div className="relative">
          <div className="flex flex-col">
            {/* Top-Right Hero Image Overlay with cycling background images */}
            <div className="absolute inset-0 -top-16 -z-10 lg:-top-20">
              <div className="absolute inset-x-0 top-0 max-w-7xl overflow-hidden lg:right-0 lg:bottom-auto lg:left-auto lg:w-[80%]">
                <div className="scale-[1.7777777777777777] md:scale-100">
                  <div className="flex aspect-square items-center md:aspect-video">
                    <div className="aspect-video w-full">
                      <div className="relative pt-[56.25%]">
                        {HERO_SLIDES.map((slide, idx) => (
                          <img
                            key={slide.src}
                            alt={slide.title}
                            width="0"
                            height="0"
                            decoding="async"
                            data-nimg="1"
                            className="absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-1000 ease-in-out"
                            style={{
                              color: 'transparent',
                              opacity: idx === heroSlideIdx ? 1 : 0,
                              pointerEvents: 'none',
                            }}
                            src={slide.src}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-background/5 absolute -inset-0.5" />
                <div className="to-background absolute -inset-0.5 bg-linear-to-b from-transparent via-transparent" />
                <div className="to-background absolute -inset-0.5 hidden bg-linear-to-l from-transparent via-transparent lg:block" />
              </div>
            </div>

            {/* Hero Main Content */}
            <div className="mt-64 md:mt-60 lg:mt-48">
              <div className="container w-full space-y-8">
                <h1 className="max-w-7xl">
                  <span className="title inline-block align-top text-balance">
                    Welcome to&nbsp;<span className="text-gradient">Trispark</span>&nbsp;Your Talent Acquisition Partner.
                  </span>
                  <span className="sr-only">Welcome to Trispark Your Talent Acquisition Partner.</span>
                </h1>

                <p className="text-muted-foreground max-w-xl text-balance md:max-w-3xl">
                  We specialize in connecting businesses with exceptional talent that aligns perfectly with your unique needs. Our expert recruitment team understands the intricacies of your industry and the importance of finding candidates who not only possess the right skills but also fit seamlessly into your company culture. Discover a new way of hiring that's tailored, efficient, and effective. Let's shape success together.
                </p>

                <div className="flex flex-col gap-4 md:flex-row">
                  <a
                    aria-label="Contact Us"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2"
                    href="/jobs"
                  >
                    Apply Now &amp; Get Hired
                    <span className="sr-only">Apply now</span>
                  </a>
                </div>

                {/* Embedded Submit Resume Section (#submit-resume) */}
                <div id="submit-resume" className="scroll-mt-24 space-y-8">
                  <div className="space-y-4 text-center">
                    <p className="text-gradient leading-6 font-semibold">Job Seekers</p>
                    <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                      Submit Your <span className="text-gradient">Resume</span>
                    </h1>
                  </div>

                  <form onSubmit={handleFormSubmit} noValidate="" autoComplete="off" className="space-y-4" encType="multipart/form-data">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <input
                          type="text"
                          required
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Full name"
                          name="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      {/* Email Address */}
                      <div className="space-y-2">
                        <input
                          type="email"
                          required
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Email address"
                          name="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>

                      {/* Select a Role */}
                      <div className="space-y-2">
                        <select
                          className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs ring-offset-background placeholder:text-muted-foreground focus:outline-hidden focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 text-foreground"
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        >
                          <option value="" disabled>Select a role to apply for</option>
                          {ROLES_LIST.map((role) => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-2">
                        <input
                          type="tel"
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Mobile number (optional)"
                          autoComplete="tel"
                          name="number"
                          value={formData.number}
                          onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                        />
                      </div>

                      {/* File Upload with Browse button */}
                      <div className="space-y-2 md:col-span-1 lg:col-span-2">
                        <div className="border-input relative flex h-9 w-full items-center gap-2 rounded-md border bg-transparent px-3 text-sm shadow-xs transition-colors">
                          <input
                            type="file"
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
                            accept=".pdf,.doc,.docx"
                            name="file"
                            onChange={handleFileChange}
                          />
                          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground size-4 shrink-0" aria-hidden="true">
                            <path d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                          </svg>
                          <span className="text-muted-foreground min-w-0 flex-1 truncate">
                            {resumeFile ? resumeFile.name : 'Upload resume (PDF, DOC, DOCX)'}
                          </span>
                          <span className="bg-secondary text-secondary-foreground shrink-0 rounded-sm px-2 py-0.5 text-xs font-medium">
                            Browse
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Consents & Disclaimers */}
                    <div className="space-y-3">
                      <div className="flex flex-row items-start space-y-0 space-x-3">
                        <input
                          type="checkbox"
                          id="sms-opt-1"
                          checked={formData.smsOptIn1}
                          onChange={(e) => setFormData({ ...formData, smsOptIn1: e.target.checked })}
                          className="h-4 w-4 shrink-0 rounded-sm border border-primary text-primary mt-1 focus:ring-1 focus:ring-primary cursor-pointer"
                        />
                        <label className="text-muted-foreground text-sm leading-snug font-normal cursor-pointer" htmlFor="sms-opt-1">
                          I agree to receive text messages from Trispark (Trispark LLC) about applications, interview scheduling, shift confirmations, onboarding, and candidate/hiring updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase or of applying for a job.
                        </label>
                      </div>

                      <div className="flex flex-row items-start space-y-0 space-x-3">
                        <input
                          type="checkbox"
                          id="sms-opt-2"
                          checked={formData.smsOptIn2}
                          onChange={(e) => setFormData({ ...formData, smsOptIn2: e.target.checked })}
                          className="h-4 w-4 shrink-0 rounded-sm border border-primary text-primary mt-1 focus:ring-1 focus:ring-primary cursor-pointer"
                        />
                        <label className="text-muted-foreground text-sm leading-snug font-normal cursor-pointer" htmlFor="sms-opt-2">
                          I also agree to receive recurring marketing text messages from Trispark (Trispark LLC) about new job openings and staffing opportunities (up to 4 msgs/week). Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase or of applying for a job.
                        </label>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        Your mobile information will not be sold or shared with third parties for promotional or marketing purposes. See our{' '}
                        <Link className="text-primary hover:underline" to="/privacy-policy">Privacy Policy</Link>{' '}
                        and{' '}
                        <Link className="text-primary hover:underline" to="/terms-and-conditions">SMS Terms</Link>.
                      </p>
                    </div>

                    <button
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 w-full cursor-pointer"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4">
                        <path d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                      {isSubmitting ? 'Submitting Resume...' : 'Submit Resume'}
                      <span className="sr-only">Submit Resume</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE SECTION */}
      <section id="who-we-are" className="bg-gray-50 py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="order-2 space-y-6 lg:order-1">
              <div className="mx-auto w-full space-y-4 lg:max-w-3xl">
                <p className="text-gradient leading-6 font-semibold">Who we are?</p>
                <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Discover the Essence of <span className="text-gradient">Trispark</span>
                  <br />
                  Shaping Futures Through Strategic Connections
                </h1>
              </div>
              <div className="text-muted-foreground space-y-6">
                <p>
                  At <span className="text-gradient font-medium">Trispark</span>, we transcend traditional recruitment norms to redefine your path to success. We pride ourselves on being more than just a recruitment company, we are your dedicated strategic partner in navigating the dynamic landscape of talent acquisition. With an unwavering commitment to excellence, we employ cutting-edge data analytics and insights to identify Trispark that connect exceptional candidates with transformative opportunities.
                </p>
                <p>
                  Our approach goes beyond matching skills with job descriptions - we delve deep into understanding the unique DNA of both candidates and businesses. By recognizing the intricate interplay of expertise, culture, and aspirations, we curate partnerships that flourish in the long term. Trispark is your beacon of guidance, illuminating a new way forward in recruitment, where talent meets innovation and potential finds purpose. Join us in shaping a future where success is built on the art of Trispark.
                </p>
                <ul role="list" className="grid grid-cols-2 gap-2 md:grid-cols-3 md:pb-6">
                  {['Strategic', 'Connection', 'Insightful', 'Innovative', 'Tailored', 'Empowering'].map((item) => (
                    <li key={item} className="flex items-center gap-1">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0 text-yellow-500">
                        <path d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z" fill="currentColor" />
                      </svg>
                      <span className="text-green-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <img
              alt="Trispark"
              width="1440"
              height="960"
              decoding="async"
              className="order-1 h-full overflow-hidden rounded-md object-cover object-center lg:order-2"
              style={{ color: 'transparent' }}
              src="https://vihav.com/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-3.webp"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES SECTION */}
      <section id="services">
        <div className="container space-y-24">
          <div className="space-y-4 text-center">
            <p className="text-gradient leading-6 font-semibold">Services We Provide</p>
            <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              We Deliver End to End <span className="text-gradient">Solutions</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Workforce Solutions */}
            <div className="group flex flex-col overflow-hidden rounded-md border">
              <Link className="shrink-0" to="/services/workforce-solutions">
                <img
                  alt="Workforce Solutions"
                  width="0"
                  height="0"
                  decoding="async"
                  className="aspect-video w-full object-cover"
                  style={{ color: 'transparent' }}
                  src="https://www.patternshiring.com/assets/images/posts/services/workforce-solutions.jpg"
                />
              </Link>
              <Link className="flex flex-col justify-between p-8 transition-all group-hover:bg-primary-foreground" to="/services/workforce-solutions">
                <p className="text-gradient font-semibold">Service</p>
                <h1 className="font-serif text-2xl font-extrabold transition-all group-hover:text-primary lg:text-4xl">
                  Workforce Solutions
                </h1>
                <p className="mt-3 line-clamp-3 text-muted-foreground">
                  Whether you face these generic workforce challenges or have specialized needs based on your industry requirements or business model, Trispark is the one-stop workforce solutions provider you are looking for.
                </p>
              </Link>
            </div>

            {/* Project Based Hiring */}
            <div className="group flex flex-col overflow-hidden rounded-md border">
              <Link className="shrink-0" to="/services/project-based-hiring">
                <img
                  alt="Project Based Hiring"
                  width="0"
                  height="0"
                  decoding="async"
                  className="aspect-video w-full object-cover"
                  style={{ color: 'transparent' }}
                  src="https://www.patternshiring.com/assets/images/posts/services/project-based-hiring.jpg"
                />
              </Link>
              <Link className="flex flex-col justify-between p-8 transition-all group-hover:bg-primary-foreground" to="/services/project-based-hiring">
                <p className="text-gradient font-semibold">Service</p>
                <h1 className="font-serif text-2xl font-extrabold transition-all group-hover:text-primary lg:text-4xl">
                  Project Based Hiring
                </h1>
                <p className="mt-3 line-clamp-3 text-muted-foreground">
                  The way we do business is changing. Thanks to new and disruptive technologies and a rapidly evolving competitive landscape, companies have to adapt and become more agile or risk losing their business.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TESTIMONIALS SECTION */}
      <section>
        <div className="relative isolate overflow-hidden bg-background py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-blue-100),white)] opacity-20" />
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-background shadow-xl shadow-primary/10 ring-1 ring-primary/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

          <div className="space-y-24">
            <div className="space-y-4 text-center">
              <p className="text-gradient font-semibold leading-6">Testimonials</p>
              <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Our customer <span className="text-gradient">reviews</span>
              </h1>
            </div>

            <div className="container flex flex-col items-center gap-x-8 gap-y-10 sm:gap-y-8 xl:flex-row">
              {/* Left Side: Trispark office building */}
              <div className="w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                <div className="relative h-[500px] w-full">
                  <img
                    alt="Trispark office building"
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl object-cover object-top shadow-md"
                    style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }}
                    src="https://vihav.com/images/project-images/projects/supremus-project-images/gallery/supremus-gallery-image-3.webp"
                  />
                </div>
              </div>

              {/* Right Side: Quote Carousel */}
              <div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                <div className="relative isolate pt-6 sm:pt-12">
                  <svg fill="none" viewBox="0 0 162 128" aria-hidden="true" className="absolute left-0 top-0 -z-10 h-32 stroke-primary/20">
                    <path
                      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                    />
                    <use x="86" href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" />
                  </svg>

                  <div className="relative w-full">
                    <div className="relative overflow-hidden">
                      <div className="w-full" draggable="false" style={{ opacity: 1, transform: 'none', userSelect: 'none', touchAction: 'pan-y', zIndex: 1 }}>
                        <blockquote className="font-serif text-xl/8 font-medium sm:text-2xl/8">
                          <p className="text-balance">
                            {expandedQuote
                              ? activeReview.description
                              : activeReview.description.slice(0, 240) + (activeReview.description.length > 240 ? '...' : '')}
                          </p>
                          {activeReview.description.length > 240 && (
                            <button
                              onClick={() => setExpandedQuote(!expandedQuote)}
                              className="mt-3 text-base font-medium text-primary transition-colors duration-200 hover:text-primary/80 cursor-pointer block"
                            >
                              {expandedQuote ? 'Show Less' : 'Read More'}
                            </button>
                          )}
                        </blockquote>

                        <figcaption className="mt-8 text-base">
                          <div className="font-semibold text-primary">
                            {activeReview.type} • {activeReview.name}
                          </div>
                          <div className="mt-1 text-muted-foreground">
                            {activeReview.designation}
                          </div>
                        </figcaption>
                      </div>
                    </div>

                    <button
                      onClick={prevReview}
                      className="absolute left-0 top-1/2 z-10 -translate-x-12 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition-all duration-200 cursor-pointer hover:bg-gray-50 border border-slate-100"
                      aria-label="Previous testimonial"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary">
                        <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button
                      onClick={nextReview}
                      className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-12 rounded-full bg-white p-2 shadow-lg transition-all duration-200 cursor-pointer hover:bg-gray-50 border border-slate-100"
                      aria-label="Next testimonial"
                    >
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary">
                        <path d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRE-FOOTER CTA SECTION */}
      <div className="bg-linear-to-br from-gray-900 to-blue-950 pre-footer-cta">
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-background sm:text-4xl text-white">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using our services today.</span>
          </h2>
          <p className="leading-6 text-muted-foreground text-slate-300">
            Unlocking Success: Elevate Your Team with Trispark Staffing - From Tech to Healthcare Excellence!
          </p>
          <a
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 cursor-pointer"
            href="/contact-us"
          >
            Let's talk with us
            <span className="sr-only">Let's talk with us</span>
          </a>
        </div>
      </div>
    </>
  );
}
