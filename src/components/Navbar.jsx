import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu, X, ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

const NAV_ITEMS = [
  { title: 'Home', url: '/' },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      { title: 'Contract Staffing', url: '/services/contract-staffing' },
      { title: 'Permanent Staffing', url: '/services/permanent-staffing' },
      { title: 'Executive Search', url: '/services/executive-search' },
      { title: 'AI Services', url: '/services/ai-services' },
    ],
  },
  { title: 'Industries', url: '/industries' },
  { title: 'Insights', url: '/insights' },
  { title: 'Jobs', url: '/jobs' },
  { title: 'About Us', url: '/about-us' },
  { title: 'Contact Us', url: '/contact-us' },
];

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({ Services: true });
  const timeoutRef = useRef(null);

  // Close menus on route change and auto-expand active submenus
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);

    NAV_ITEMS.forEach((item) => {
      if (item.submenu) {
        const matchesChild = item.submenu.some((sub) => location.pathname === sub.url);
        const matchesParent = item.url && location.pathname.startsWith(item.url);
        if (matchesChild || matchesParent) {
          setOpenSubmenus((prev) => ({ ...prev, [item.title]: true }));
        }
      }
    });
  }, [location.pathname]);

  const toggleMobileSubmenu = (title) => {
    setOpenSubmenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

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
    if (!path) return false;
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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm supports-backdrop-filter:bg-white/60 border-b border-slate-100">
      <div className="container">
        {/* Desktop Header (xl and above) */}
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

            <nav aria-label="Main" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <div style={{ position: 'relative' }}>
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  {NAV_ITEMS.map((item) => {
                    if (item.submenu) {
                      const isParentActive =
                        (item.url && location.pathname.startsWith(item.url)) ||
                        item.submenu.some((sub) => location.pathname === sub.url);

                      return (
                        <li
                          key={item.title}
                          className="relative"
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                        >
                          <button
                            id="desktop-services-trigger"
                            data-state={servicesOpen ? 'open' : 'closed'}
                            aria-expanded={servicesOpen}
                            onClick={() => setServicesOpen(!servicesOpen)}
                            className={`group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary focus:outline-hidden cursor-pointer ${
                              isParentActive ? 'text-primary font-semibold' : 'text-foreground'
                            }`}
                          >
                            {item.title}{' '}
                            <ChevronDown
                              className={`relative top-px ml-1 h-3.5 w-3.5 transition duration-200 ${
                                servicesOpen ? 'rotate-180 text-primary' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </button>

                          {/* Desktop Submenu Popover */}
                          {servicesOpen && (
                            <div className="absolute left-0 top-full pt-2 z-50 animate-slide-down">
                              <div className="min-w-[230px] w-max rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                                <ul className="flex flex-col gap-1">
                                  {item.url && (
                                    <>
                                      <li>
                                        <Link
                                          to={item.url}
                                          className={`group flex items-center justify-between whitespace-nowrap rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                                            location.pathname === item.url
                                              ? 'bg-slate-100 text-primary'
                                              : 'text-slate-500 hover:bg-slate-50 hover:text-primary'
                                          }`}
                                        >
                                          <span>All {item.title} Overview</span>
                                          <ArrowRight className="h-3 w-3 opacity-60 group-hover:translate-x-0.5 transition-transform" />
                                        </Link>
                                      </li>
                                      <li className="h-px bg-slate-100 my-0.5" />
                                    </>
                                  )}
                                  {item.submenu.map((sub) => {
                                    const isSubActive = location.pathname === sub.url;
                                    return (
                                      <li key={sub.title}>
                                        <Link
                                          to={sub.url}
                                          className={`group flex items-center justify-between whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                                            isSubActive
                                              ? 'bg-primary/10 text-primary font-semibold'
                                              : 'text-slate-700 hover:bg-slate-100 hover:text-primary'
                                          }`}
                                        >
                                          <span>{sub.title}</span>
                                          {isSubActive && (
                                            <span className="h-1.5 w-1.5 rounded-full bg-primary ml-2" />
                                          )}
                                        </Link>
                                      </li>
                                    );
                                  })}
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
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              aria-label="Contact Us"
              className="inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-colors bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2"
              to="/contact-us"
            >
              Let's talk with us
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
            className={`trispark-hamburger ${mobileMenuOpen ? 'is-open' : ''}`}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span className="sr-only">{mobileMenuOpen ? 'Close Menu' : 'Open Menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-100 bg-white/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-1.5 animate-slide-down max-h-[85vh] overflow-y-auto shadow-xl">
          {NAV_ITEMS.map((item) => {
            // Case A: Item with Submenu (Parent & Child structure)
            if (item.submenu) {
              const isOpen = !!openSubmenus[item.title];
              const isParentActive =
                (item.url && location.pathname.startsWith(item.url)) ||
                item.submenu.some((sub) => location.pathname === sub.url);

              return (
                <div key={item.title} className="rounded-xl overflow-hidden transition-all duration-200">
                  {/* Parent Accordion Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleMobileSubmenu(item.title)}
                    className={`w-full flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium transition-all cursor-pointer text-left ${
                      isParentActive
                        ? 'bg-primary/10 text-primary font-semibold'
                        : 'text-slate-800 hover:bg-slate-50 active:bg-slate-100'
                    }`}
                    aria-expanded={isOpen}
                    aria-label={`Toggle ${item.title} menu`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{item.title}</span>
                      {isParentActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-normal">
                        {item.submenu.length}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-primary' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Child Submenu Card Panel */}
                  {isOpen && (
                    <div className="mt-1 mb-2 ml-3 bg-slate-50/90 rounded-xl p-1.5 border border-slate-200/60 border-l-[3px] border-l-primary space-y-0.5 animate-fade-in">
                      {/* Overview link */}
                      {item.url && (
                        <Link
                          to={item.url}
                          className={`group flex items-center justify-between rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                            location.pathname === item.url
                              ? 'bg-primary text-white shadow-xs'
                              : 'text-slate-500 hover:text-primary hover:bg-white'
                          }`}
                        >
                          <span>All {item.title} Overview</span>
                          <ArrowRight
                            className={`h-3 w-3 transition-transform ${
                              location.pathname === item.url
                                ? 'text-white'
                                : 'opacity-60 group-hover:translate-x-0.5'
                            }`}
                          />
                        </Link>
                      )}

                      {/* Child Links */}
                      {item.submenu.map((sub) => {
                        const isChildActive = location.pathname === sub.url;
                        return (
                          <Link
                            key={sub.title}
                            to={sub.url}
                            className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                              isChildActive
                                ? 'bg-primary text-white font-semibold shadow-xs'
                                : 'text-slate-700 hover:text-primary hover:bg-white/80 active:bg-slate-100'
                            }`}
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className={`h-2 w-2 rounded-full transition-all ${
                                  isChildActive
                                    ? 'bg-white scale-110'
                                    : 'bg-slate-300 group-hover:bg-primary/70'
                                }`}
                              />
                              <span>{sub.title}</span>
                            </div>
                            <ChevronRight
                              className={`h-3.5 w-3.5 transition-transform duration-150 ${
                                isChildActive
                                  ? 'text-white translate-x-0.5'
                                  : 'text-slate-400 group-hover:text-primary group-hover:translate-x-0.5'
                              }`}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // Case B: Standard Top-Level Menu Item (Single Link)
            const active = isCurrent(item.url);
            return (
              <Link
                key={item.title}
                to={item.url}
                className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-[15px] font-medium transition-all ${
                  active
                    ? 'bg-primary/10 text-primary font-semibold'
                    : 'text-slate-800 hover:bg-slate-50 active:bg-slate-100'
                }`}
              >
                <span>{item.title}</span>
                {active && (
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}

          {/* Bottom CTA */}
          <div className="pt-3 border-t border-slate-100 mt-2">
            <Link
              to="/contact-us"
              className="flex w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold transition-all bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-11 px-4 py-2"
            >
              <span>Let's talk with us</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
