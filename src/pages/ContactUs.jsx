import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';

export default function ContactUs() {
  const { showToast } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    phone: '',
    smsUpdates: false,
    smsMarketing: false,
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.subject.trim() || !formData.message.trim() || !formData.email.trim()) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }
    if (!formData.agreeTerms) {
      showToast('Please agree to the Terms & Conditions and Privacy Policy.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast('Thank you! Your message has been sent successfully.');
      setFormData({
        name: '',
        subject: '',
        message: '',
        email: '',
        phone: '',
        smsUpdates: false,
        smsMarketing: false,
        agreeTerms: false,
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <>
      <main className="space-y-24 lg:space-y-36">
        <section id="about-us">
          <div className="my-24">
            <div className="container">
              <div className="space-y-24">
                {/* Header */}
                <div className="mx-auto w-full space-y-4 text-center lg:max-w-3xl">
                  <p className="text-gradient leading-6 font-semibold">Let's talk with us</p>
                  <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                    Get in touch<br />
                    <span className="text-gradient">Love to hear from you</span>.
                  </h1>
                </div>

                {/* 2-Column Grid */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                  {/* Left Column: Address & Contact Info */}
                  <div className="order-2 transform-none opacity-100 md:order-1">
                    <h2 className="font-display text-base font-semibold text-gray-900">Our address</h2>
                    <ul role="list" className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                      <li>
                        <address className="text-muted-foreground text-sm not-italic">
                          <strong className="text-foreground">Trispark</strong>
                          <br />
                          25298 FM 2978 Rd.,


                          <br />
                          Unit A, Tomball, TX 77375
                        </address>
                      </li>
                    </ul>

                    <div className="relative mt-16 pt-16 before:absolute before:top-0 before:left-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:top-0 after:right-0 after:left-8 after:h-px after:bg-gray-950/10">
                      <h2 className="font-display text-foreground text-base font-semibold">Contact Info</h2>
                      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                        <div>
                          <dt className="text-foreground font-semibold">Email address</dt>
                          <dd>
                            <a
                              className="text-muted-foreground hover:text-foreground"
                              href="mailto:business@tecnoprism.com
"
                            >
                              info@trisparkinc.com

                            </a>
                          </dd>
                        </div>
                        <div>
                          <dt className="text-foreground font-semibold">Call &amp; IM</dt>
                          <dd>
                            <a
                              className="text-muted-foreground hover:text-foreground"
                              href="tel:+12814002666"
                            >
                              +1 281-400-2666
                            </a>
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div className="before:bg-foreground relative mt-16 pt-16 before:absolute before:top-0 before:left-0 before:h-px before:w-6 after:absolute after:top-0 after:right-0 after:left-8 after:h-px after:bg-gray-950/10">
                      <h2 className="font-display text-foreground text-base font-semibold">Follow us</h2>
                      <ul role="list" className="text-foreground mt-6 flex gap-x-10">
                        {/* <li>
                          <a
                            href="https://www.facebook.com/Trispark247"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className="group text-muted-foreground hover:text-primary transition"
                          >
                            <div className="group-hover:fill-primary">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 512 512">
                                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                              </svg>
                            </div>
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://www.linkedin.com/company/trisparkinc"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="group text-muted-foreground hover:text-primary transition"
                          >
                            <div className="group-hover:fill-primary">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"></path>
                              </svg>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/trisparkinc/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className="group text-muted-foreground hover:text-primary transition"
                          >
                            <div className="group-hover:fill-primary">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                              </svg>
                            </div>
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="https://youtu.be/DSeT3Nb5-Hk"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="YouTube"
                            className="group text-muted-foreground hover:text-primary transition"
                          >
                            <div className="group-hover:fill-primary">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 16 14">
                                <path d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5Zm2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48Z"></path>
                              </svg>
                            </div>
                          </a>
                        </li> */}
                        <li>
                          <a
                            href="https://api.whatsapp.com/send/?phone=12814002666&amp;text=Hello+Trispark%21%21+%0D%0ALike+to+know+more+information+about+https%3A%2F%2Fwww.trisparkinc.com%2Fcontact-us%2F&amp;type=phone_number&amp;app_absent=0"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="WhatsApp"
                            className="group text-muted-foreground hover:text-primary transition"
                          >
                            <div className="group-hover:fill-primary">
                              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"></path>
                              </svg>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Contact Form */}
                  <form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className="order-1 space-y-4 md:order-2"
                  >
                    {isSuccess && (
                      <div className="p-4 rounded-md bg-green-50 border border-green-200 text-green-800 text-sm">
                        Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.
                      </div>
                    )}

                    {/* Full Name */}
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="name"
                      >
                        Full name <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        tabIndex={1}
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="subject"
                      >
                        Subject <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        tabIndex={4}
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="message"
                      >
                        Message <span className="text-red-600">*</span>
                      </label>
                      <textarea
                        className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        rows={3}
                        name="message"
                        tabIndex={5}
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="email"
                      >
                        Email address <span className="text-red-600">*</span>
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        tabIndex={2}
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="phone"
                      >
                        Mobile number (optional)
                      </label>
                      <input
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        autoComplete="tel"
                        tabIndex={3}
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    {/* SMS Agreement Checkboxes */}
                    <div className="space-y-3 pt-2">
                      <div className="flex flex-row items-start space-y-0 space-x-3">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={formData.smsUpdates}
                          data-state={formData.smsUpdates ? "checked" : "unchecked"}
                          onClick={() => setFormData({ ...formData, smsUpdates: !formData.smsUpdates })}
                          tabIndex={6}
                          id="smsUpdates"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground flex items-center justify-center cursor-pointer mt-0.5"
                        >
                          {formData.smsUpdates && (
                            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          )}
                        </button>
                        <label
                          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground text-sm leading-snug font-normal cursor-pointer select-none"
                          htmlFor="smsUpdates"
                          onClick={() => setFormData({ ...formData, smsUpdates: !formData.smsUpdates })}
                        >
                          I agree to receive text messages from Trispark about applications, interview scheduling, shift confirmations, onboarding, and candidate/hiring updates. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase or of applying for a job.
                        </label>
                      </div>

                      <div className="flex flex-row items-start space-y-0 space-x-3">
                        <button
                          type="button"
                          role="checkbox"
                          aria-checked={formData.smsMarketing}
                          data-state={formData.smsMarketing ? "checked" : "unchecked"}
                          onClick={() => setFormData({ ...formData, smsMarketing: !formData.smsMarketing })}
                          tabIndex={6}
                          id="smsMarketing"
                          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground flex items-center justify-center cursor-pointer mt-0.5"
                        >
                          {formData.smsMarketing && (
                            <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          )}
                        </button>
                        <label
                          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground text-sm leading-snug font-normal cursor-pointer select-none"
                          htmlFor="smsMarketing"
                          onClick={() => setFormData({ ...formData, smsMarketing: !formData.smsMarketing })}
                        >
                          I also agree to receive recurring marketing text messages from Trispark about new job openings and staffing opportunities (up to 4 msgs/week). Message and data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase or of applying for a job.
                        </label>
                      </div>

                      <p className="text-muted-foreground text-sm">
                        Your mobile information will not be sold or shared with third parties for promotional or marketing purposes. See our{' '}
                        <Link className="text-primary hover:underline" to="/privacy-policy">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link className="text-primary hover:underline" to="/terms-and-conditions#sms-terms">
                          SMS Terms
                        </Link>
                        .
                      </p>
                    </div>

                    {/* Terms & Conditions Agreement Checkbox */}
                    <div className="flex flex-row items-start space-y-0 space-x-3 pt-2">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={formData.agreeTerms}
                        data-state={formData.agreeTerms ? "checked" : "unchecked"}
                        onClick={() => setFormData({ ...formData, agreeTerms: !formData.agreeTerms })}
                        tabIndex={7}
                        id="agreeTerms"
                        className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow-sm focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground flex items-center justify-center cursor-pointer mt-0.5"
                      >
                        {formData.agreeTerms && (
                          <svg className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        )}
                      </button>
                      <div className="space-y-1 leading-none">
                        <p
                          className="text-muted-foreground text-sm cursor-pointer select-none"
                          onClick={() => setFormData({ ...formData, agreeTerms: !formData.agreeTerms })}
                        >
                          I agree to the{' '}
                          <Link
                            className="text-primary hover:underline"
                            to="/terms-and-conditions"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Terms &amp; Conditions
                          </Link>{' '}
                          and{' '}
                          <Link
                            className="text-primary hover:underline"
                            to="/privacy-policy"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Privacy Policy
                          </Link>
                          . <span className="text-red-600">*</span>
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 w-full cursor-pointer mt-4"
                      type="submit"
                      tabIndex={8}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                      <span className="sr-only">Submit</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Embedded Google Map */}
      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=25298%20FM%202978%20Rd.,%20Unit%20A,%20Tomball,%20TX%2077375&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        className="h-96 w-full border-none grayscale transition duration-300 ease-in-out hover:grayscale-0 block"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="TrisparkLocation"
      ></iframe>
    </>
  );
}
