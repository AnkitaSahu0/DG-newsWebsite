"use client";

import Image from "next/image";
import { Play, Calendar, Globe } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [playVideo, setPlayVideo] = useState(false);

  const textNews = [
    "DG News opens nominations for National Journalism Awards 2026.",
    "Over 500 journalists registered within first 24 hours.",
    "Digital reporting category sees record participation.",
    "Public voting for shortlisted candidates starts next week.",
    "Top media houses collaborate with DG News initiative.",
  ];

  return (
    <section id="home" className="w-full px-4 sm:px-6 lg:px-16 py-10">

      {/* 🔴 BREAKING NEWS BAR */}
      <div className="mb-6 bg-red-600 text-white py-2 px-4 rounded-md overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          🔴 Breaking: India’s News Industry Sees Significant Changes in 2026!
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* 🔵 LEFT SIDE - IMAGE + TEXT (Large) */}
        <div className="lg:col-span-2 relative rounded-xl overflow-hidden shadow-lg group">

          <Image
            src="/images/img4.webp"
            alt="Featured News"
            width={900}
            height={500}
            className="w-full h-[350px] lg:h-[450px] object-fill group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
            <h2 className="text-white text-2xl lg:text-3xl font-bold">
              DG News – Bringing India the Latest, Most Trusted News
            </h2>

            <p className="text-gray-200 mt-3 max-w-xl">
              Stay informed with DG News — India’s premier source for breaking news, analysis, and stories that matter.
            </p>

            <button className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-fit">
              Read Full Story
            </button>
          </div>
        </div>

        {/* 🔴 RIGHT SIDE - LARGE VIDEO */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">

          {!playVideo ? (
            <div className="relative">
              <Image
                src="/images/video-thumbnail.jpg"
                alt="Video Thumbnail"
                width={500}
                height={500}
                className="w-full h-[350px] lg:h-[450px] object-cover"
              />

              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setPlayVideo(true)}
                  className="bg-red-600 hover:bg-red-700 text-white p-4 rounded-full"
                >
                  <Play size={28} />
                </button>
              </div>
            </div>
          ) : (
            // <video
            //   src="https://www.youtube.com/embed/05KziHStKF8" 
            //   controls
            //   autoPlay
            //   className="w-full h-[350px] lg:h-[450px] object-cover"
            // />
    <div className="w-full h-[350px] lg:h-[450px] rounded-xl overflow-hidden">
  <iframe
    src="https://www.youtube.com/embed/05KziHStKF8"
    className="w-full h-full"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

          )}
        </div>
      </div>

      {/* 📰 TEXT NEWS + SHORTS (Same as Before) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">

        <div className="lg:col-span-2 bg-gray-100 rounded-xl p-6 shadow-md">
          <h3 className="text-lg font-bold mb-4 border-b pb-2">
            Latest Headlines
          </h3>

          <ul className="space-y-3">
            {textNews.map((news, index) => (
              <li
                key={index}
                className="text-sm text-gray-700 hover:text-red-600 cursor-pointer transition"
              >
                • {news}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2">
          {/* <video
            src="/videos/short1.mp4"
            className="w-28 h-44 object-cover rounded-lg shadow-md"
            controls
            
          /> */}
         <iframe
    src="https://www.ndtv.com/videos/embed-player/?id=1061753&mute=1&autostart=1&mutestart=true&pWidth=100&pHeight=100"
    className="w-full h-full"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
    scrolling="no"
    title="NDTV News Video"
  ></iframe>
          <video
            src="/videos/short2.mp4"
            className="w-28 h-44 object-cover rounded-lg shadow-md"
            controls
          />
        </div>
      </div>

      {/* NEWS CARDS BELOW */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* CARD 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <Image
            src="/images/img1.webp"
            alt="Health Camp"
            width={600}
            height={350}
            className="w-full h-[220px] object-center"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-red-600 mb-3">
              7-Day Free Ayurvedic & Homeopathy Health Camp Inaugurated
            </h2>

            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> January 24, 2026
              </span>
              <span className="flex items-center gap-1">
                <Globe size={14} /> www.dgnews.com
              </span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A seven-day free medical camp was launched with expert doctors
              and strong public participation.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
              Continue Reading »
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
          <Image
            src="/images/img2.webp"
            alt="Ceremony"
            width={600}
            height={350}
            className="w-full h-[220px] object-contain"
          />
          <div className="p-6">
            <h2 className="text-xl font-bold text-red-600 mb-3">
              Grand Spiritual Ceremony Held on Makar Sankranti
            </h2>

            <div className="flex justify-between text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> January 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Globe size={14} /> www.dgnews.com
              </span>
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              A major cultural and spiritual event saw large public participation
              and ceremonial performances.
            </p>

            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm">
              Continue Reading »
            </button>
          </div>
        </div>

      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

    </section>
  );
}
