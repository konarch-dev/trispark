import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container">
        <div className="pt-12 pb-8 lg:pt-16 lg:pb-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Brand Column */}
            <div className="space-y-6 xl:col-span-1">
              <Link className="flex items-center" to="/">
                <img
                  alt="Trispark logo"
                  className="h-10 w-auto object-contain"
                  src={logo}
                />
                <span className="sr-only">Trispark</span>
              </Link>
              <p className="text-muted-foreground text-base leading-relaxed">
                Trispark is a recruitment company with a decade of experience in connecting the right professionals to the right businesses, but we are more than that.
              </p>
              <div className="flex space-x-6">
                {/* <a href="https://www.facebook.com/Trispark247" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" title="Facebook">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
                </a> */}
                <a href="https://www.linkedin.com/company/trisparkinc" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" title="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5c0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7c-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5c67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </a>
                <a href="https://www.instagram.com/trisparkinc/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" title="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
                {/* <a href="https://youtu.be/DSeT3Nb5-Hk" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" title="YouTube">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 16 14"><path d="M8 1.5c-6.88 0-7 .62-7 5.5s.12 5.5 7 5.5s7-.62 7-5.5s-.12-5.5-7-5.5Zm2.24 5.74L7.1 8.74c-.28.13-.5-.02-.5-.33V5.59c0-.31.23-.46.5-.33l3.14 1.5c.28.13.28.35 0 .48Z"></path></svg>
                </a> */}
                <a href="https://api.whatsapp.com/send/?phone=2814002666&text=Hello+Trispark%21%21+%0D%0ALike+to+know+more+information+about+https%3A%2F%2Fwww.trisparkinc.com%2Fcontact-us%2F&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition" title="WhatsApp">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222c0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4l-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2c0-101.7 82.8-184.5 184.6-184.5c49.3 0 95.6 19.2 130.4 54.1c34.8 34.9 56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18c-5.1-1.9-8.8-2.8-12.5 2.8c-3.7 5.6-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4c-32.6-16.3-54-29.1-75.5-66c-5.7-9.8 5.7-9.1 16.3-30.3c1.8-3.7.9-6.9-.5-9.7c-1.4-2.8-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5c-3.2-.2-6.9-.2-10.6-.2c-3.7 0-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3c0 27.3 19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8c35.2 15.2 49 16.5 66.6 13.9c10.7-1.6 32.8-13.4 37.4-26.4c4.6-13 4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Industries */}
                <div>
                  <h3 className="text-foreground text-sm font-semibold text-slate-900">Industries</h3>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries/medical-solutions">Healthcare</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries/it-services">Technology</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries/pharmaceuticals">Life Sciences</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries/food-and-beverage">F&amp;B</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries/supply-chain-management">SCM</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries/construction-energy-and-utility">Engineering</Link></li>
                    <li><Link className="text-primary font-medium hover:underline" to="/industries">View All Industries</Link></li>
                  </ul>
                </div>

                {/* Services */}
                <div className="mt-8 md:mt-0">
                  <h3 className="text-foreground text-sm font-semibold text-slate-900">Services</h3>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/services/contract-staffing">Contract Staffing</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/services/permanent-staffing">Permanent Staffing</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/services/executive-search">Executive Search</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/services/ai-services">AI Services</Link></li>
                  </ul>
                </div>
              </div>

              <div className="md:grid md:grid-cols-2 md:gap-8">
                {/* Quick Links */}
                <div>
                  <h3 className="text-foreground text-sm font-semibold text-slate-900">Quick Links</h3>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/">Home</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/industries">Industries</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/insights">Insights</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/jobs">Jobs</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/about-us">About Us</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>

                {/* Legal */}
                <div className="mt-8 md:mt-0">
                  <h3 className="text-foreground text-sm font-semibold text-slate-900">Legal</h3>
                  <ul role="list" className="mt-4 space-y-3 text-sm">
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/disclaimer">Claim</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/privacy-policy">Privacy</Link></li>
                    <li><Link className="text-muted-foreground hover:text-primary transition" to="/terms-and-conditions">Terms</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="mt-12 border-t border-slate-200 pt-8">
            <p className="text-muted-foreground text-center text-xs sm:text-sm">
              © 2026 Trispark(doing business as Trispark). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
