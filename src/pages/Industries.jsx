import React from 'react';
import { Link } from 'react-router-dom';

const INDUSTRIES_LIST = [
  {
    ariaLabel: "Medical Solutions",
    badge: "Healthcare",
    title: "Medical Solutions",
    description:
      "The healthcare industry involves the provision of medical services, products, and technologies aimed at promoting health, preventing illnesses, and treating medical conditions. This industry includes a wide spectrum of sectors, such as hospitals, clinics, pharmaceuticals, medical equipment manufacturing, biotechnology, telemedicine, and healthcare IT solutions.",
    slug: "medical-solutions",
    image: "/assets/images/industries/5.webp",
  },
  {
    ariaLabel: "IT Services (Information Technology Services)",
    badge: "Technology",
    title: "IT Services (Information Technology Services)",
    description:
      "IT services encompass a broad range of services related to technology and information management. This industry involves the development, implementation, management, and maintenance of various IT solutions, including software development, system integration, cybersecurity, cloud computing, data analytics, and IT consulting.",
    slug: "it-services",
    image: "/assets/images/industries/6.webp",
  },
  {
    ariaLabel: "Pharma, Biotech & Medical Devices",
    badge: "Life Sciences",
    title: "Pharma, Biotech & Medical Devices",
    description:
      "The Life Sciences sector comprises entities engaged in various disciplines, including biotechnology, pharmaceuticals, healthcare, and medical research. It holds a pivotal position in the global landscape by contributing to advancements in healthcare, drug development, and medical innovations. This dynamic industry is instrumental in addressing health challenges, conducting cutting-edge research, and developing",
    slug: "pharmaceuticals",
    image: "/assets/images/industries/8.webp",
  },
  {
    ariaLabel: "Food & Beverages",
    badge: "F&B",
    title: "Food & Beverages",
    description:
      "The Food & Beverage sector encapsulates a diverse array of entities involved in the production, distribution, and consumption of food and beverages. This industry is integral to the global economy, serving as a vital component of daily life and cultural practices. Playing a pivotal role, it ensures the availability of a wide range of food",
    slug: "food-and-beverage",
    image: "/assets/images/industries/4.webp",
  },
  {
    ariaLabel: "Supply Chain Management",
    badge: "SCM",
    title: "Supply Chain Management",
    description:
      "Supply Chain Management (SCM) is a sector that encompasses the planning, execution, and optimization of the processes involved in the flow of goods, services, and information from the point of origin to the end consumer. It holds a central role in global commerce by ensuring the efficient and seamless movement of products across various stages of production, distribution, and consumption. SCM plays a pivotal role in enhancing operational",
    slug: "supply-chain-management",
    image: "/assets/images/industries/9.webp",
  },
  {
    ariaLabel: "Construction, Energy & Utility",
    badge: "Engineering",
    title: "Construction, Energy & Utility",
    description:
      "At Trispark, we understand the intricate demands and challenges faced by core engineering companies in disciplines such as civil, mechanical, electrical, manufacturing, quality assurance/quality control, and process automation. Our mission is to forge meaningful connections between highly specialized niche talents and the preeminent companies at the forefront of these industries.",
    slug: "construction-energy-and-utility",
    image: "/assets/images/industries/11.webp",
  },
  {
    ariaLabel: "Production Solutions",
    badge: "Manufacturing",
    title: "Production Solutions",
    description:
      "The manufacturing industry is responsible for producing goods by transforming raw materials into finished products through various processes. This sector covers a diverse array of industries, such as aerospace, electronics, textiles, machinery, chemicals, and more. Manufacturing involves processes like fabrication, assembly, quality control, and supply chain management.",
    slug: "production-solutions",
    image: "/assets/images/industries/7.webp",
  },
  {
    ariaLabel: "Telecommunication",
    badge: "Telecom",
    title: "Telecommunication",
    description:
      "The telecommunications industry deals with the transmission of information, data, and communication signals over long distances. This industry encompasses various technologies like telephone networks, mobile communication, internet services, satellite communication, and more. It plays a vital role in connecting people and businesses across the globe.",
    slug: "telecommunication",
    image: "/assets/images/industries/10.webp",
  },
  {
    ariaLabel: "Allied Service",
    badge: "Support",
    title: "Allied Service",
    description:
      "Allied services refer to a diverse range of supportive and complementary services that play a crucial role in various sectors. These services can include maintenance, repair, consulting, outsourcing, and other specialized assistance. Allied service providers cater to the needs of other industries by offering expertise, solutions, and resources that enhance overall efficiency and performance.",
    slug: "allied-service",
    image: "/assets/images/industries/1.webp",
  },
  {
    ariaLabel: "Automobile Industry",
    badge: "Development",
    title: "Automobile Industry",
    description:
      "The automobile industry encompasses the design, manufacturing, distribution, and sale of vehicles, including cars, trucks, motorcycles, and other motorized vehicles. This industry is known for its innovation, technological advancements, and global market presence. It comprises various segments, such as passenger vehicles, commercial vehicles, electric vehicles, and autonomous driving technologies.",
    slug: "automobile-industry",
    image: "/assets/images/industries/2.webp",
  },
  {
    ariaLabel: "BFSI (Banking, Financial Services, and Insurance)",
    badge: "Finance",
    title: "BFSI (Banking, Financial Services, and Insurance)",
    description:
      "BFSI is a sector that includes institutions involved in banking, financial services, and insurance. It plays a pivotal role in the global economy by facilitating capital allocation, risk management, and financial transactions. This industry covers a wide range of services, including retail banking, investment banking, asset management, insurance underwriting, and electronic payment systems.",
    slug: "bfsi",
    image: "/assets/images/industries/3.webp",
  },
];

export default function Industries() {
  return (
    <>
      <div className="space-y-24 lg:space-y-36">
        <section id="industries">
          <div className="my-24">
            <div className="container space-y-24">
              {/* Header Title Section */}
              <div className="mx-auto w-full space-y-4 text-center lg:max-w-3xl">
                <p className="text-gradient font-semibold leading-6">Industries We Work With!</p>
                <h1 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                  From Tech to Healthcare Trispark<br />
                  <span className="text-gradient">Recruitment's Cross-Industry Expertise</span>
                </h1>
              </div>

              {/* Industries 11 Alternating Cards */}
              <div className="space-y-24">
                {INDUSTRIES_LIST.map((ind, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={ind.slug}
                      aria-label={ind.ariaLabel}
                      className="grid grid-cols-1 gap-6 lg:grid-cols-2"
                    >
                      {/* Text Column */}
                      <div className={`order-2 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                        <small className="text-gradient text-lg font-semibold leading-none tracking-wide">
                          {ind.badge}
                        </small>
                        <h2 className="font-serif text-3xl font-extrabold lg:text-4xl text-slate-900">
                          {ind.title}
                        </h2>
                        <div className="w-1/4 border-b-2 border-gray-200"></div>
                        <p className="line-clamp-4 text-base text-muted-foreground">
                          {ind.description}
                        </p>
                        <Link
                          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-9 px-4 py-2 group hover:no-underline"
                          to={`/industries/${ind.slug}`}
                        >
                          Read more&nbsp;&nbsp;
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2 h-4 w-4 transition group-hover:translate-x-2"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                              fill="currentColor"
                              fillRule="evenodd"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="sr-only">Read more</span>
                        </Link>
                      </div>

                      {/* Image Column */}
                      <div className={`order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                        <img
                          alt={ind.title}
                          className="aspect-video w-full rounded object-cover object-center"
                          src={ind.image}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Pre-Footer CTA */}
      <div className="bg-linear-to-br from-gray-900 to-blue-950 pre-footer-cta">
        <div className="mx-auto max-w-2xl space-y-4 px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl text-white">
            <span className="block">Boost your productivity.</span>
            <span className="block">Start using our services today.</span>
          </h2>
          <p className="leading-6 text-slate-300">
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
