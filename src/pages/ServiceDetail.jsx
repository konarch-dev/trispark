import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

export default function ServiceDetail() {
  const { slug } = useParams();

  // If not matching one of the services, redirect to services index or workforce-solutions
  if (slug !== 'workforce-solutions' && slug !== 'project-based-hiring') {
    return <Navigate to="/services/workforce-solutions" replace />;
  }

  const isWorkforce = slug === 'workforce-solutions';

  return (
    <>
      <main className="space-y-24 lg:space-y-36">
        <div className="container">
          <div className="my-12 lg:my-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Main Article Content (col-span-12 lg:col-span-8) */}
              <div className="col-span-12 lg:col-span-8">
                {isWorkforce ? (
                  <article className="prose col-span-8 max-w-none">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                      Workforce Solutions
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      Empowering Your Business with Strategic Workforce Solutions: Maximizing Efficiency, Productivity, and Growth Opportunities.
                    </p>
                    <div className="space-y-6 text-slate-700 leading-relaxed text-base">
                      <p>
                        <img
                          alt="Workforce Solutions"
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="aspect-video w-full object-cover object-center rounded shadow-xs"
                          sizes="100vw"
                          src="https://www.patternshiring.com/assets/images/posts/services/workforce-solutions.jpg"
                          style={{ color: 'transparent' }}
                        />
                      </p>
                      <h2 id="a-new-way-of-human-resource" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4">
                        A New Way of Human Resource
                      </h2>
                      <p>In today's competitive landscape, every business faces unique workforce challenges. Some businesses:</p>
                      <ul className="list-disc pl-6 space-y-2 my-4 text-slate-700">
                        <li>Struggle to find the right talent/skill set.</li>
                        <li>Have difficulty finding the right cultural fit.</li>
                        <li>Lack access to the best candidate pool.</li>
                        <li>Cannot find employees who share their values.</li>
                        <li>Encounter payroll costs they can't justify for the talent they have.</li>
                        <li>Face challenges finding employees who can evolve with the industry.</li>
                      </ul>
                      <p>
                        Whether you're dealing with these generic workforce challenges or have specialized needs based on your industry requirements or business model, <strong>Trispark</strong> is the ultimate workforce solutions provider you've been searching for.
                      </p>
                      <p>
                        Businesses of all sizes and industries encounter workforce-related challenges. In today's dynamic market, talent and workforce need to evolve to stay ahead. Even if you have an HR department, you may need to outsource tasks and leverage effective workforce solutions that <strong>Trispark</strong> is equipped to provide.
                      </p>
                      <p>
                        With over a decade of experience helping various businesses with their workforce challenges, you can rely on us to find solutions tailored to your needs. Our access to a larger talent pool, advanced testing and screening capabilities, and adherence to the best hiring practices make our workforce solutions highly productive and efficient.
                      </p>
                      <h2 id="our-workforce-solutions" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4">
                        Our Workforce Solutions
                      </h2>
                      <p>
                        Each organization has unique talent needs and requirements, resulting in different workforce solutions falling under specific categories.
                      </p>
                      <h2 id="temporary-staffing" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                        Temporary Staffing
                      </h2>
                      <p>
                        Acquiring temporary staff can contribute significantly to the "life-cycle" cost of an employee. We provide optimal time and cost solutions for your temporary staffing needs, preventing short-term hires from needlessly inflating your project costs. We also handle complex workforce requirements like consultants, specialized skilled workers, freelancers, contract staffing, teams, and contingent staffing.
                      </p>
                      <h2 id="temp-to-hire-solutions" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                        Temp-To-Hire Solutions
                      </h2>
                      <p>
                        Witness the potential of temporary employees firsthand before considering them for permanent positions. This saves time, money, and onboarding efforts, as we ease the transition from temporary to permanent positions.
                      </p>
                      <h2 id="permanent-placement-services" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                        Permanent Placement Services
                      </h2>
                      <p>
                        Finding the right permanent resource can be challenging, especially for senior-level positions. We leverage a broad talent pool through traditional recruiting and passive candidate sourcing, focusing on candidates ideally suited for your organization.
                      </p>
                      <p className="mt-8 font-semibold text-lg text-slate-900">
                        <strong>We Are Trispark</strong> – Your Ideal Workforce Solutions Provider.
                      </p>
                    </div>
                  </article>
                ) : (
                  <article className="prose col-span-8 max-w-none">
                    <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                      Project Based Hiring
                    </h1>
                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      Efficient Project-Based Hiring: Unlock Success by Matching Specialized Talent with Your Unique Project Requirements.
                    </p>
                    <div className="space-y-6 text-slate-700 leading-relaxed text-base">
                      <p>
                        <img
                          alt="Project Based Hiring"
                          loading="lazy"
                          width="0"
                          height="0"
                          decoding="async"
                          data-nimg="1"
                          className="aspect-video w-full object-cover object-center rounded shadow-xs"
                          sizes="100vw"
                          src="https://www.patternshiring.com/assets/images/posts/services/project-based-hiring.jpg"
                          style={{ color: 'transparent' }}
                        />
                      </p>
                      <h2 id="adapting-for-success" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4">
                        Project-Based Hiring: Adapting for Success
                      </h2>
                      <p>
                        The way we do business is changing. Thanks to new and disruptive technologies and a rapidly evolving competitive landscape, companies have to adapt and become more agile or risk losing their business.
                      </p>
                      <p>
                        Project-based hiring is no longer industry-specific. As companies recognize its benefits, it fuels growth across sectors. Every company's hiring needs are unique. Project-based hiring demands excellence in operational and competency standards. At Trispark, we specialize in this complexity. Beyond hiring, we help define project recruitment needs, team structures, hierarchies, and communication practices.
                      </p>
                      <p>
                        With a decade of experience, we've evolved alongside industry demands. Our practices find the best fit for your business.
                      </p>
                      <h2 id="our-approaches" className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mt-8 mb-4">
                        Our Specialized Approaches
                      </h2>
                      <h2 id="bulk-hiring" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                        1. Bulk Hiring
                      </h2>
                      <p>
                        Efficiently recruit high-quality candidates in quantity. We employ pre-screened "clusters" or rapid technical tests to onboard ready-to-deploy talent at scale.
                      </p>
                      <h2 id="team-services" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                        2. Team Services
                      </h2>
                      <p>
                        Excel in building specialized teams for high-priority projects, especially growth-focused tech and infrastructure ventures.
                      </p>
                      <h2 id="managed-staffing" className="font-serif text-xl sm:text-2xl font-bold text-slate-900 mt-6 mb-3">
                        3. Managed Staffing
                      </h2>
                      <p>
                        Partner with us for long-term projects. Leverage our managed staffing model for end-to-end recruitment operations, compliance, and ongoing performance delivery.
                      </p>
                      <p className="mt-8 font-semibold text-lg text-slate-900">
                        <strong>We Are Trispark</strong> – Your Solution for Project-Based Hiring Needs.
                      </p>
                    </div>
                  </article>
                )}
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
                          <Link className="group block" to="/services/project-based-hiring">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Project Based Hiring
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              The way we do business is changing. Thanks to new and disruptive technologies and a rapidly evolving competitive landscape, companies have to adapt and become more agile or risk losing their business.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/services/workforce-solutions">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Workforce Solutions
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              Whether you face these generic workforce challenges or have specialized needs based on your industry requirements or business model, Trispark is the one-stop workforce solutions provider you are looking for.
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
                              The healthcare industry involves the provision of medical services, products, and technologies aimed at promoting health, preventing illnesses, and treating medical conditions. This industry includes a wide spectrum of sectors, such as hospitals, clinics, pharmaceuticals, medical equipment manufacturing, biotechnology, telemedicine, and healthcare IT solutions.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/it-services">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              IT Services (Information Technology Services)
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              IT services encompass a broad range of services related to technology and information management. This industry involves the development, implementation, management, and maintenance of various IT solutions, including software development, system integration, cybersecurity, cloud computing, data analytics, and IT consulting.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/pharmaceuticals">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Pharma, Biotech &amp; Medical Devices
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              The Life Sciences sector comprises entities engaged in various disciplines, including biotechnology, pharmaceuticals, healthcare, and medical research. It holds a pivotal position in the global landscape by contributing to advancements in healthcare, drug development, and medical innovations. This dynamic industry is instrumental in addressing health challenges, conducting cutting-edge research, and developing
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/food-and-beverage">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Food &amp; Beverages
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              The Food &amp; Beverage sector encapsulates a diverse array of entities involved in the production, distribution, and consumption of food and beverages. This industry is integral to the global economy, serving as a vital component of daily life and cultural practices. Playing a pivotal role, it ensures the availability of a wide range of food
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/supply-chain-management">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Supply Chain Management
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              Supply Chain Management (SCM) is a sector that encompasses the planning, execution, and optimization of the processes involved in the flow of goods, services, and information from the point of origin to the end consumer. It holds a central role in global commerce by ensuring the efficient and seamless movement of products across various stages of production, distribution, and consumption. SCM plays a pivotal role in enhancing operational
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/construction-energy-and-utility">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600 transition-colors">
                              Construction, Energy &amp; Utility
                            </p>
                            <small className="line-clamp-2 text-muted-foreground block mt-1 leading-snug">
                              At Trispark, we understand the intricate demands and challenges faced by core engineering companies in disciplines such as civil, mechanical, electrical, manufacturing, quality assurance/quality control, and process automation. Our mission is to forge meaningful connections between highly specialized niche talents and the preeminent companies at the forefront of these industries.
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
