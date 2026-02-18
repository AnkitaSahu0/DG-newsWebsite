// "use client";

// import { useEffect, useState } from "react";
// import { Clock } from "lucide-react";

// type NewsItem = {
//   id: number;
//   title: string;
//   category: string;
//   time: string;
//   highlight?: boolean;
// };

// export default function LiveNewsPage() {
//   const [news, setNews] = useState<NewsItem[]>([
//    {
//   id: 1,
//   title: "Breaking: Major Updates in India’s Journalism Landscape for 2026",
//   category: "Breaking",
//   time: "Just now",
//   highlight: true,
// },
// {
//   id: 2,
//   title: "Over 500 Journalists Making Headlines Within 24 Hours of Launch",
//   category: "News",
//   time: "5 mins ago",
// },
// {
//   id: 3,
//   title: "Digital Reporting Sees Record Coverage Across 12 States",
//   category: "Update",
//   time: "12 mins ago",
// },

//   ]);

//   // Simulated Live Updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newItem: NewsItem = {
//         id: Date.now(),
//         title: "Live Update: New journalist shortlisted in investigative reporting category.",
//         category: "Live",
//         time: "Just now",
//       };

//       setNews((prev) => [newItem, ...prev.slice(0, 6)]);
//     }, 15000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section id="live" className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-16 py-12">

//       <div className="max-w-5xl mx-auto">

//         {/* PAGE HEADER */}
//         <div className="flex items-center justify-between mb-10 flex-wrap gap-4">

//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Live News Updates
//           </h1>

//           <div className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
//             ● LIVE
//           </div>

//         </div>

//         {/* NEWS FEED */}
//         <div className="space-y-6">

//           {news.map((item) => (
//             <div
//               key={item.id}
//               className={`bg-white rounded-lg shadow-sm p-6 border-l-4 ${
//                 item.highlight
//                   ? "border-red-600"
//                   : "border-transparent"
//               } hover:shadow-md transition`}
//             >
//               <div className="flex justify-between items-start flex-wrap gap-3">

//                 <div>
//                   <span
//                     className={`text-xs font-semibold uppercase tracking-wide ${
//                       item.category === "Breaking"
//                         ? "text-red-600"
//                         : "text-gray-500"
//                     }`}
//                   >
//                     {item.category}
//                   </span>

//                   <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mt-2">
//                     {item.title}
//                   </h2>
//                 </div>

//                 <div className="flex items-center text-gray-500 text-sm gap-1">
//                   <Clock size={14} />
//                   {item.time}
//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>

//     </section>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type NewsItem = {
  id: number;
  title: string;
  category: string;
  time: string;
  highlight?: boolean;
};

export default function LiveNewsPage() {
  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Breaking: Major Updates in India’s Journalism Landscape for 2026",
      category: "Breaking",
      time: "Just now",
      highlight: true,
    },
    {
      id: 2,
      title: "Over 500 Journalists Making Headlines Within 24 Hours of Launch",
      category: "News",
      time: "5 mins ago",
    },
    {
      id: 3,
      title: "Digital Reporting Sees Record Coverage Across 12 States",
      category: "Update",
      time: "12 mins ago",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newItem: NewsItem = {
        id: Date.now(),
        title:
          "Live Update: Major developments reported across national media platforms.",
        category: "Live",
        time: "Just now",
      };

      setNews((prev) => [newItem, ...prev.slice(0, 6)]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="live"
      className="min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-16 py-14"
    >
      <div className="max-w-5xl mx-auto">

        {/* PAGE HEADER */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">

          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Live News Updates
          </h1>

          <div className="flex items-center gap-2 bg-red-700 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md animate-pulse">
            ● LIVE
          </div>

        </div>

        {/* NEWS FEED */}
        <div className="space-y-8">

          {news.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-md p-7 border-l-8 ${
                item.highlight
                  ? "border-red-700"
                  : "border-gray-200"
              } hover:shadow-xl transition duration-300`}
            >
              <div className="flex justify-between items-start flex-wrap gap-4">

                <div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      item.category === "Breaking"
                        ? "text-red-700"
                        : item.category === "Live"
                        ? "text-green-600"
                        : "text-gray-600"
                    }`}
                  >
                    {item.category}
                  </span>

                  <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-3 leading-snug">
                    {item.title}
                  </h2>
                </div>

                <div className="flex items-center text-gray-600 text-sm font-medium gap-1">
                  <Clock size={16} />
                  {item.time}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
