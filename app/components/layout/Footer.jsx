"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              DG News
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              Delivering trusted journalism, live updates, and in-depth
              coverage across politics, business, technology, and culture.
              Stay informed with real-time reporting.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-white transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/live" className="hover:text-white transition">Live News</Link></li>
              <li><Link href="/awards" className="hover:text-white transition">Awards</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition">Breaking News</Link></li>
              <li><Link href="#" className="hover:text-white transition">Politics</Link></li>
              <li><Link href="#" className="hover:text-white transition">Technology</Link></li>
              <li><Link href="#" className="hover:text-white transition">Business</Link></li>
              <li><Link href="#" className="hover:text-white transition">Culture</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Subscribe to Newsletter
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Get daily headlines and exclusive updates directly in your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:border-red-500"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 transition text-white px-4 py-2 rounded-md font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center gap-4">

          <p>
            © {new Date().getFullYear()} DG News. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition">Editorial Policy</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
