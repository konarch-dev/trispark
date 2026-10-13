import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { title: 'Home', url: '/' },
  {
    title: 'Services',
    submenu: [
      { title: 'Workforce Solutions', url: '/services/workforce-solutions' },
      { title: 'Project Based Hiring', url: '/services/project-based-hiring' },
    ],
  },
  { title: 'Industries', url: '/industries' },
  { title: 'Blogs', url: '/blogs' },
  { title: 'Jobs', url: '/jobs' },
  { title: 'About Us', url: '/about-us' },
  { title: 'Contact Us', url: '/contact-us' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 150);
  };

  const isCurrent = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const linkClass = (path) =>
    `group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 ${
      isCurrent(path)
        ? 'data-active text-primary font-semibold'
        : 'text-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/60">
      <div className="container">
        {/* Desktop Header */}
        <div className="hidden h-16 justify-between space-x-8 xl:flex xl:items-center">
          <div className="flex items-center space-x-8">
            <Link className="flex items-center" to="/">
              <img
                alt="Trispark logo"
                className="h-10 w-auto object-contain"
                src={logo}
              />
              <span className="sr-only">Trispark</span>
            </Link>

            <nav aria-label="Main" data-orientation="horizontal" dir="ltr" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <div style={{ position: 'relative' }}>
                <ul data-orientation="horizontal" className="group flex flex-1 list-none items-center justify-center space-x-1" dir="ltr">
                  {NAV_ITEMS.map((item) => {
                    if (item.submenu) {
                      return (
                        <li
                          key={item.title}
                          className="relative"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <button
                            id="radix-_R_4mfdb_-trigger-radix-_R_4smfdb_"
                            data-state={servicesOpen ? 'open' : 'closed'}
                            aria-expanded={servicesOpen}
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-transparent data-active:text-primary data-[state=open]:bg-accent/50 cursor-pointer"
                          >
                            {item.title}{' '}
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className={`relative top-px ml-1 h-3 w-3 transition duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                              aria-hidden="true"
                            >
                              <path
                                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>

                          {/* Clean, perfectly matching Radix Sub-nav popover */}
                          {servicesOpen && (
                            <div className="absolute left-0 top-full pt-2 z-50">
                              <div className="min-w-[220px] w-max rounded-md border border-slate-200 bg-white p-1.5 shadow-lg">
                                <ul className="flex flex-col gap-1">
                                  {item.submenu.map((sub) => (
                                    <li key={sub.title}>
                                      <Link
                                        to={sub.url}
                                        className="group flex items-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-primary"
                                      >
                                        {sub.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    }

                    return (
                      <li key={item.title}>
                        <Link
                          data-active={isCurrent(item.url) ? '' : undefined}
                          aria-current={isCurrent(item.url) ? 'page' : undefined}
                          className={linkClass(item.url)}
                          to={item.url}
                        >
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="absolute left-0 top-full flex justify-center" />
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              aria-label="Contact Us"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2"
              to="/contact-us"
            >
              Let's talk with us
              <span className="sr-only">Let's talk with us</span>
            </Link>
          </div>
        </div>

        {/* Mobile Header (xl:hidden) */}
        <div className="flex h-16 items-center justify-between xl:hidden">
          <Link className="flex items-center" to="/">
            <img
              alt="Trispark logo"
              className="h-9 w-auto object-contain"
              src={logo}
            />
            <span className="sr-only">Trispark</span>
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground h-9 w-9 cursor-pointer"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={mobileMenuOpen}
            data-state={mobileMenuOpen ? 'open' : 'closed'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-4 pb-8 space-y-3 animate-fade-in max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className={`block rounded-lg px-3 py-2 text-base font-medium ${
              location.pathname === '/' ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-800'
            }`}
          >
            Home
          </Link>

          <div>
            <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Services
            </div>
            <div className="pl-3 space-y-1">
              <Link
                to="/services/workforce-solutions"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary"
              >
                Workforce Solutions
              </Link>
              <Link
                to="/services/project-based-hiring"
                className="block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary"
              >
                Project Based Hiring
              </Link>
            </div>
          </div>

          <Link
            to="/industries"
            className={`block rounded-lg px-3 py-2 text-base font-medium ${
              location.pathname.startsWith('/industries') ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-800'
            }`}
          >
            Industries
          </Link>

          <Link
            to="/blogs"
            className={`block rounded-lg px-3 py-2 text-base font-medium ${
              location.pathname.startsWith('/blogs') ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-800'
            }`}
          >
            Blogs
          </Link>

          <Link
            to="/jobs"
            className={`block rounded-lg px-3 py-2 text-base font-medium ${
              location.pathname.startsWith('/jobs') ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-800'
            }`}
          >
            Jobs
          </Link>

          <Link
            to="/about-us"
            className={`block rounded-lg px-3 py-2 text-base font-medium ${
              location.pathname.startsWith('/about-us') ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-800'
            }`}
          >
            About Us
          </Link>

          <Link
            to="/contact-us"
            className={`block rounded-lg px-3 py-2 text-base font-medium ${
              location.pathname.startsWith('/contact-us') ? 'bg-primary/10 text-primary font-semibold' : 'text-slate-800'
            }`}
          >
            Contact Us
          </Link>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/contact-us"
              className="inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-10 px-4 py-2"
            >
              Let's talk with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
