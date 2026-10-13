import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <main className="space-y-24 lg:space-y-36">
        <section id="about-us">
          <div className="my-24">
            <div className="container">
              <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-start lg:gap-y-12">
                {/* Right Column (Sticky Image and Contact/Social Links on LG) */}
                <div className="contents lg:sticky lg:top-24 lg:block lg:pl-20">
                  <div className="order-1">
                    <img
                      alt="about-Trispark"
                      width="960"
                      height="1440"
                      decoding="async"
                      data-nimg="1"
                      className="aspect-square rounded-md object-cover object-top w-full"
                      src="/assets/images/build.webp"
                      style={{ color: 'transparent' }}
                    />
                  </div>
                  <div className="order-3 lg:mt-12">
                    <ul role="list">
                      <li className="text-muted-foreground mt-4">
                        <a
                          href="https://www.facebook.com/Trispark247"
                          target="_blank"
                          rel="noreferrer"
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                        >
                          <div className="group-hover:fill-primary">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 512 512">
                              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                            </svg>
                          </div>
                          <span>Follow us on Facebook</span>
                        </a>
                      </li>
                      <li className="text-muted-foreground mt-4">
                        <a
                          href="https://www.linkedin.com/company/patternshiring"
                          target="_blank"
                          rel="noreferrer"
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                        >
                          <div className="group-hover:fill-primary">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                            </svg>
                          </div>
                          <span>Follow us on LinkedIn</span>
                        </a>
                      </li>
                      <li className="text-muted-foreground mt-4">
                        <a
                          href="https://www.instagram.com/patternshiring/"
                          target="_blank"
                          rel="noreferrer"
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                        >
                          <div className="group-hover:fill-primary">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                            </svg>
                          </div>
                          <span>Follow us on Instagram</span>
                        </a>
                      </li>
                      <li className="text-muted-foreground mt-4">
                        <a
                          href="https://youtu.be/DSeT3Nb5-Hk"
                          target="_blank"
                          rel="noreferrer"
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                        >
                          <div className="group-hover:fill-primary">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 16 14">
                              <path d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5Zm2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48Z"></path>
                            </svg>
                          </div>
                          <span>Follow us on YouTube</span>
                        </a>
                      </li>
                      <li className="text-muted-foreground mt-4">
                        <a
                          href="https://api.whatsapp.com/send/?phone=13024850400&amp;text=Hello+Trispark%21%21+%0D%0ALike+to+know+more+information+about+https%3A%2F%2Fwww.patternshiring.com%2Fcontact-us%2F&amp;type=phone_number&amp;app_absent=0"
                          target="_blank"
                          rel="noreferrer"
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                        >
                          <div className="group-hover:fill-primary">
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"></path>
                            </svg>
                          </div>
                          <span>Chat with us on WhatsApp</span>
                        </a>
                      </li>
                      <li className="text-muted-foreground mt-8 border-t pt-8">
                        <a
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                          href="mailto:info@patternshiring.com"
                        >
                          <div className="group-hover:fill-primary">
                            <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                              <path d="M12 22q-2.05 0-3.875-.788t-3.188-2.15q-1.362-1.362-2.15-3.187T2 12q0-2.075.788-3.888t2.15-3.174Q6.3 3.575 8.124 2.788T12 2q2.075 0 3.888.788t3.174 2.15q1.363 1.362 2.15 3.175T22 12v1.45q0 1.475-1.012 2.513T18.5 17q-.9 0-1.675-.4t-1.275-1.05q-.675.675-1.588 1.063T12 17q-2.075 0-3.538-1.463T7 12q0-2.075 1.463-3.538T12 7q2.075 0 3.538 1.463T17 12v1.45q0 .725.45 1.137T18.5 15q.6 0 1.05-.413T20 13.45V12q0-3.275-2.363-5.638T12 4Q8.725 4 6.362 6.363T4 12q0 3.275 2.363 5.638T12 20h5v2h-5Zm0-7q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Z"></path>
                            </svg>
                          </div>
                          <span>info@patternshiring.com</span>
                        </a>
                      </li>
                      <li className="text-muted-foreground mt-4">
                        <a
                          className="group hover:text-primary flex items-center gap-4 font-medium transition"
                          href="tel:+13024850400"
                        >
                          <div className="group-hover:fill-primary">
                            <svg fill="currentColor" className="h-5 w-5" viewBox="0 0 24 24">
                              <path d="M19.95 21q-3.125 0-6.175-1.363t-5.55-3.862q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.338t.712-.062l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3Z"></path>
                            </svg>
                          </div>
                          <span> business@tecnoprism.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Left Column (Content) */}
                <div className="order-2 lg:order-first">
                  <p className="text-gradient mb-4 font-bold tracking-widest">Trispark</p>
                  <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                    Your Perfect <span className="text-gradient">Recruitment</span> Partner.
                  </h1>
                  <div className="text-muted-foreground mt-6 space-y-7">
                    <p>
                      What is the first thing you want from a recruitment company? Access to the largest talent pool? Hundreds of screening processes? A high-tech resume short-listing tool?
                    </p>
                    <p>
                      While these are important considerations, what you really need is a partner that understands your specific requirements, culture, and vision, and finds the right fit for your organization. And that's what we at Trispark strive to do. We know that the corporate landscape is always changing, but your recruitment needs and your existing talent pool might not always be in sync with those changes. And that's where we come in. We understand the Trispark of the ever-changing job market and adjust our recruitment approach and processes accordingly.
                    </p>
                    <p>
                      By choosing us, you can rest assured that you will find the perfect fit for your business, regardless of the market conditions.
                    </p>
                  </div>

                  <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                    What We <span className="text-gradient">Do</span>.
                  </h1>
                  <div className="text-muted-foreground mt-6 space-y-7">
                    <p>
                      We offer a full spectrum of workforce solutions and are able to cater to a wide variety of recruitment needs. Whether you are looking for temporary staff for a one-time project or a permanent addition to your team, you can count on us to deliver.
                    </p>
                    <p>
                      We also provide project-based recruitment solutions. Whether you need a specialized team or your project requires bulk hiring, we are equipped for the task. We leverage our state-of-the-art technical test tools for screening and assessment based on the criteria and ideal candidate profile(s) you share with us. With our managed staffing services, you won't need to split your core human resources for a new project.
                    </p>
                  </div>

                  <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                    Who We <span className="text-gradient">Are</span>.
                  </h1>
                  <div className="text-muted-foreground mt-6 space-y-7">
                    <p>
                      At our core, Trispark is a recruitment company with a decade of experience in connecting the right professionals to the right businesses, but we are more than that.
                    </p>
                    <p>
                      For businesses, we are a trustworthy recruitment partner that can simplify and streamline your recruitment process. We can connect you with the top tier of the talent pool, regardless of your industry. And we are equipped to cater to the ever-changing needs of the job market, such as finding people that can easily transition from an on-site position to a remote work environment.
                    </p>
                    <p>
                      For candidates, we are their “professional matchmakers” that can help them secure their dream jobs. Over the course of a decade, we have refined our recruitment and screening methodologies to perfection and have evolved alongside the changing market. This allows us to tackle any complex and unique recruitment needs that you and your HR might not be equipped to handle on their own.</p>
                  </div>

                  <p className="text-gradient mt-6 font-bold tracking-widest">FOR CANDIDATES</p>
                  <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                    Your Guide To Your Ideal <span className="text-gradient">Career Path</span>.
                  </h1>
                  <div className="text-muted-foreground mt-6 space-y-7">
                    <p>
                      At Trispark, we understand how important the right environment and an appropriate job role are for a professional to thrive and grow. Therefore, we aim to find the right fit for both employers and candidates.
                    </p>
                    <p>
                      To ensure that we can set you on the path to maximizing your potential, we look beyond your resume and your technical acumen. We look at YOU and try to gauge YOU as both a person and a professional.
                    </p>
                    <p>
                      This approach allows us to place candidates in positions where they can get more than just professional growth and grooming; they get the satisfaction and mental peace that comes with being in the right place and achieving their goals.
                    </p>
                  </div>
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
