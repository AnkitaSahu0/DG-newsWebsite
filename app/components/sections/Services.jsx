"use client";

import { Newspaper, Award, Users, Globe } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Newspaper size={28} />,
      category: "Coverage",
      title: "24/7 Digital News Reporting",
      description:
        "Delivering verified, real-time updates across politics, business, health, culture, and national affairs with complete transparency.",
    },
    {
      icon: <Award size={28} />,
      category: "Recognition",
      title: "National Journalism Awards",
      description:
        "A transparent shortlisting and public voting platform recognizing excellence in journalism across India.",
    },
    {
      icon: <Users size={28} />,
      category: "Community",
      title: "Public Engagement Programs",
      description:
        "Encouraging citizen participation through voting systems, surveys, and open journalism initiatives.",
    },
    {
      icon: <Globe size={28} />,
      category: "Partnership",
      title: "Strategic Media Collaborations",
      description:
        "Working with leading media houses and organizations to promote ethical and impactful journalism.",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-white px-4 sm:px-6 lg:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="text-center mb-14">
          <p className="text-red-600 font-semibold uppercase tracking-widest text-sm">
            What We Do
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Services at <span className="text-red-600">DG News</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Committed to responsible journalism, innovation, and public trust
            through modern digital media solutions.
          </p>
        </div>

        {/* NEWS STYLE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {services.map((service, index) => (
            <div
              key={index}
              className="group border-b pb-8 hover:bg-gray-50 transition duration-300 hover:scale-105 p-4 rounded-lg"
            >
              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="text-red-600 mt-1">
                  {service.icon}
                </div>

                {/* CONTENT */}
                <div>
                  <span className="text-xs font-semibold text-red-600 uppercase tracking-wide">
                    {service.category}
                  </span>

                  <h3 className="text-xl font-semibold text-gray-900 mt-2 group-hover:text-red-600 transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="mt-4 text-red-600 font-medium text-sm hover:underline">
                    Read More →
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md transition duration-300">
            Explore All Services
          </button>
        </div>

      </div>
    </section>
  );
}
