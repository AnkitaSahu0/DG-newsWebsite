"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Cinzel, Great_Vibes } from "next/font/google";

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Live", href: "/#live" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="w-full bg-white shadow-md sticky top-0 z-50">
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-16 py-4">

          {/* LOGO */}
          <Link href="/" className="select-none">
            <div className="flex flex-col items-center text-center">
              <h1 className={`${cinzel.className} text-2xl tracking-widest`}>
                <span className="bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
                  DG
                </span>
                <span className="text-gray-900"> News</span>
              </h1>
              <p
                className={`${greatVibes.className} text-lg bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent`}
              >
                News Platform
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-red-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/signup"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              SignUp
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-black"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </nav>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* LEFT SIDE MOBILE DRAWER */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out shadow-xl ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-4 border-t shadow-md">
          <h2 className="font-bold text-lg text-red-600">DG News</h2>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 hover:text-red-600 transition"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/signup"
            onClick={() => setOpen(false)}
            className="bg-red-600 text-white text-center py-2 rounded-md"
          >
            SignUp
          </Link>
        </div>
      </div>
    </>
  );
}
