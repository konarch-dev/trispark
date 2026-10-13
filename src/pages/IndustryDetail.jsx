import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { INDUSTRY_DETAILS } from '../data/industryContent';

export default function IndustryDetail() {
  const { slug } = useParams();
  const data = INDUSTRY_DETAILS[slug];

  if (!data) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <>
      <main className="space-y-24 lg:space-y-36">
        <div className="container">
          <div className="my-12 lg:my-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              {/* Left Column: Article (col-span-12 lg:col-span-8) */}
              <div className="col-span-12 lg:col-span-8">
                <article className="prose max-w-none prose-li:marker:text-blue-600">
                  <h1 className="font-serif">{data.name}</h1>
                  <div>
                    <p>
                      <img
                        alt={data.name}
                        width="0"
                        height="0"
                        decoding="async"
                        data-nimg="1"
                        className="aspect-video w-full object-cover object-center rounded"
                        sizes="100vw"
                        src={data.image}
                        style={{ color: 'transparent', transform: 'none', transformOrigin: '50% 50% 0px' }}
                      />
                    </p>
                    {data.content}
                  </div>
                </article>
              </div>

              {/* Right Column: Sticky Sidebar (col-span-12 lg:col-span-4) */}
              <div className="col-span-12 lg:col-span-4">
                <div className="sticky top-24">
                  <div className="space-y-12">
                    {/* Services Widget */}
                    <div>
                      <div className="mb-4">
                        <h3 className="font-serif text-3xl font-extrabold">Services</h3>
                        <p className="text-sm text-muted-foreground">Here is a list of services that we provide.</p>
                      </div>
                      <ul className="relative divide-y before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-gray-950/10">
                        <li className="py-3">
                          <Link className="group block" to="/services/project-based-hiring">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Project Based Hiring</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              The way we do business is changing. Thanks to new and disruptive technologies and a rapidly evolving competitive landscape, companies have to adapt and become more agile or risk losing their business.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/services/workforce-solutions">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Workforce Solutions</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              Whether you face these generic workforce challenges or have specialized needs based on your industry requirements or business model, Trispark is the one-stop workforce solutions provider you are looking for.
                            </small>
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Industries Widget */}
                    <div>
                      <div className="mb-4">
                        <h3 className="font-serif text-3xl font-extrabold">Industries</h3>
                        <p className="text-sm text-muted-foreground">Here is a list of industries that we have worked with.</p>
                      </div>
                      <ul className="relative divide-y before:absolute before:left-0 before:top-0 before:h-px before:w-6 before:bg-gray-950 after:absolute after:left-8 after:right-0 after:top-0 after:h-px after:bg-gray-950/10">
                        <li className="py-3">
                          <Link className="group block" to="/industries/medical-solutions">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Medical Solutions</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              The healthcare industry involves the provision of medical services, products, and technologies aimed at promoting health, preventing illnesses, and treating medical conditions. This industry includes a wide spectrum of sectors, such as hospitals, clinics, pharmaceuticals, medical equipment manufacturing, biotechnology, telemedicine, and healthcare IT solutions.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/it-services">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">IT Services (Information Technology Services)</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              IT services encompass a broad range of services related to technology and information management. This industry involves the development, implementation, management, and maintenance of various IT solutions, including software development, system integration, cybersecurity, cloud computing, data analytics, and IT consulting.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/pharmaceuticals">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Pharma, Biotech &amp; Medical Devices</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              The Life Sciences sector comprises entities engaged in various disciplines, including biotechnology, pharmaceuticals, healthcare, and medical research. It holds a pivotal position in the global landscape by contributing to advancements in healthcare, drug development, and medical innovations. This dynamic industry is instrumental in addressing health challenges, conducting cutting-edge research, and developing
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/food-and-beverage">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Food &amp; Beverages</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              The Food &amp; Beverage sector encapsulates a diverse array of entities involved in the production, distribution, and consumption of food and beverages. This industry is integral to the global economy, serving as a vital component of daily life and cultural practices. Playing a pivotal role, it ensures the availability of a wide range of food
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/supply-chain-management">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Supply Chain Management</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              Supply Chain Management (SCM) is a sector that encompasses the planning, execution, and optimization of the processes involved in the flow of goods, services, and information from the point of origin to the end consumer. It holds a central role in global commerce by ensuring the efficient and seamless movement of products across various stages of production, distribution, and consumption. SCM plays a pivotal role in enhancing operational
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries/construction-energy-and-utility">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">Construction, Energy &amp; Utility</p>
                            <small className="line-clamp-2 text-muted-foreground">
                              At Trispark, we understand the intricate demands and challenges faced by core engineering companies in disciplines such as civil, mechanical, electrical, manufacturing, quality assurance/quality control, and process automation. Our mission is to forge meaningful connections between highly specialized niche talents and the preeminent companies at the forefront of these industries.
                            </small>
                          </Link>
                        </li>
                        <li className="py-3">
                          <Link className="group block" to="/industries">
                            <p className="line-clamp-1 font-bold group-hover:text-blue-600">All Industries</p>
                            <small className="line-clamp-2 text-muted-foreground">View all industries that we have worked with.</small>
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
