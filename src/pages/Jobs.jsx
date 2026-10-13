import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function Jobs() {
  const { openResumeModal } = useModal();

  useEffect(() => {
    // Inject the Ceipal careers widget script if not present
    const existingScript = document.querySelector(
      'script[src*="jobsapi.ceipal.com/APISource/widget.js"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://jobsapi.ceipal.com/APISource/widget.js';
      script.defer = true;
      script.setAttribute('data-ceipal-api-key', 'c2UreHA5N0RGSHlWY244d3RjRUVLUT09');
      script.setAttribute('data-ceipal-career-portal-id', 'Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09');
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <main className="space-y-24 lg:space-y-36">
        <section id="jobs">
          <div className="my-24">
            <div className="container space-y-24">
              {/* Header */}
              <div className="mx-auto w-full space-y-4 text-center lg:max-w-3xl">
                <p className="text-gradient font-semibold leading-6">Looking for jobs?</p>
                <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                  Supporting job seekers &amp; employers<br />
                  <span className="text-gradient">Every step of the way</span>.
                </h1>
              </div>

              {/* Main Jobs Widget & How to apply */}
              <div className="space-y-24">
                {/* Ceipal Careers Iframe Container */}
                <div id="example-widget-container" style={{ minHeight: '900px' }}>
                  <iframe
                    id="careers_api_source"
                    width="100%"
                    height="1737.2px"
                    frameBorder="0"
                    title="Trispark Careers Portal"
                    style={{
                      borderWidth: 'medium',
                      borderStyle: 'none',
                      borderColor: 'currentcolor',
                      borderImage: 'none',
                      margin: '0px',
                      minHeight: '1717.2px',
                    }}
                    src="https://jobsapi.ceipal.com/APISource/v4/index.html?bgcolor=4284ff&amp;api_key=c2UreHA5N0RGSHlWY244d3RjRUVLUT09&amp;cp_id=Z3RkUkt2OXZJVld2MjFpOVRSTXoxZz09&amp;job_id="
                  />
                </div>

                {/* How to Apply Section */}
                <div id="how-to-apply" className="mx-auto w-full space-y-10 lg:max-w-5xl">
                  <div className="space-y-4 text-center">
                    <p className="text-gradient leading-6 font-semibold">How to apply</p>
                    <h2 className="font-serif text-2xl font-bold tracking-tight sm:text-3xl">
                      Register with <span className="text-gradient">Trispark</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Don't see the right role yet? New openings are added regularly.
                    </p>
                  </div>

                  <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <li className="space-y-2 rounded-lg border p-6 bg-white">
                      <p className="text-gradient text-sm font-semibold">Step 1</p>
                      <h3 className="text-foreground font-semibold">Browse current openings</h3>
                      <p className="text-muted-foreground text-sm">
                        Search the open positions listed above and select a role to see the full job description and requirements.
                      </p>
                    </li>
                    <li className="space-y-2 rounded-lg border p-6 bg-white">
                      <p className="text-gradient text-sm font-semibold">Step 2</p>
                      <h3 className="text-foreground font-semibold">Apply or register with us</h3>
                      <p className="text-muted-foreground text-sm">
                        Apply directly to a listed role, or submit your resume so our recruiters can match you with upcoming openings.
                      </p>
                    </li>
                    <li className="space-y-2 rounded-lg border p-6 bg-white">
                      <p className="text-gradient text-sm font-semibold">Step 3</p>
                      <h3 className="text-foreground font-semibold">Talk to a recruiter</h3>
                      <p className="text-muted-foreground text-sm">
                        A Trispark recruiter will review your profile and contact you about suitable roles, interviews and next steps.
                      </p>
                    </li>
                  </ol>

                  <p className="text-muted-foreground text-center text-sm">
                    <button
                      type="button"
                      onClick={openResumeModal}
                      className="text-primary hover:underline cursor-pointer bg-transparent border-0 p-0 font-medium inline"
                    >
                      Submit your resume
                    </button>{' '}
                    or{' '}
                    <Link className="text-primary hover:underline font-medium" to="/contact-us">
                      contact us
                    </Link>{' '}
                    and a recruiter will get back to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Pre-Footer CTA */}
      <div className="bg-linear-to-br from-gray-900 to-blue-950 pre-footer-cta">
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-background sm:text-4xl">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using our services today.</span>
          </h2>
          <p className="leading-6 text-muted-foreground">
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
