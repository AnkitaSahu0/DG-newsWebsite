"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="w-full px-4 sm:px-6 lg:px-16 py-16 bg-gray-50">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/img3.webp"
            alt="About DG News"
            fill
            className="object-fill"
          />
        </div>

        {/* RIGHT SIDE CONTENT */}
        <div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">DG News</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            DG News is a leading digital journalism platform committed to
            transparency, credibility, and excellence in media reporting.
            We provide verified news coverage, investigative stories, and
            real-time updates from across the nation.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            With a growing network of reporters, editors, and contributors,
            DG News empowers journalists and informs millions of readers daily.
            Our platform also promotes public participation in journalism awards
            and recognition programs.
          </p>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition">
            Learn More
          </button>

        </div>
      </div>

      {/* STATS SECTION */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        <div>
          <h3 className="text-3xl font-bold text-red-600">500+</h3>
          <p className="text-gray-600 mt-2 text-sm">Registered Journalists</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-600">1M+</h3>
          <p className="text-gray-600 mt-2 text-sm">Monthly Readers</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-600">25+</h3>
          <p className="text-gray-600 mt-2 text-sm">Media Partners</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-red-600">10+</h3>
          <p className="text-gray-600 mt-2 text-sm">Award Categories</p>
        </div>

      </div>

    </section>
  );
}
