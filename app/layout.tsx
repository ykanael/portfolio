"use client";

import { Heart, House, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "./components/Footer";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="xl:text-xl flex gap-2">
              <Link
                href="/"
                className="xl:text-[1.4rem] font-bold text-xl text-[#CF7B71] top-[0.830rem] relative"
              >
                Mon Portfolio
              </Link>
              <Image
                src="/logoo.png"
                alt="Mini Logo"
                width={50}
                height={25}
                className="object-contain h-10 w-auto md:h-12"
              />
            </div>

            {/* Navigation Desktop */}
            <div className="hidden md:flex space-x-2 font-medium text-stone-600 items-center">
              <Link
                href="/"
                className="px-4 py-2 transition-all duration-300 hover:bg-[#cf877f] hover:text-white hover:rounded-[2.5rem]"
              >
                <div className="xl:text-xl flex gap-1.5">
                  <House
                    className="xl:w-5 xl:h-6 w-4 h-5 relative top-[0.075rem]"
                    strokeWidth={2.5}
                  />
                  Accueil
                </div>
              </Link>
              <Link
                href="/projets"
                className="px-4 py-2 transition-all duration-300 hover:bg-[#cf877f] hover:text-white hover:rounded-[2.5rem]"
              >
                <div className="xl:text-xl flex gap-1.5">
                  <Heart
                    className="xl:w-5 xl:h-6 w-4 h-5 relative top-[0.075rem]"
                    strokeWidth={2.5}
                  />
                  Mes Projets
                </div>
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 transition-all duration-300 hover:bg-[#cf877f] hover:text-white hover:rounded-[2.5rem]"
              >
                <div className="xl:text-xl flex gap-1.5">
                  <Phone
                    className="xl:w-5 xl:h-6 w-4 h-5 relative top-[0.075rem]"
                    strokeWidth={2.5}
                  />
                  Contact
                </div>
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-stone-600 focus:outline-none p-2"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Mobile */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-stone-100 px-4 py-4 space-y-2 flex flex-col font-medium shadow-inner items-center">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-stone-600 px-6 py-2 transition-all duration-300 hover:bg-[#CF7B71] hover:text-white hover:rounded-[50%]"
              >
                Accueil
              </Link>
              <Link
                href="/projets"
                onClick={() => setIsOpen(false)}
                className="text-stone-600 px-6 py-2 transition-all duration-300 hover:bg-[#CF7B71] hover:text-white hover:rounded-[50%]"
              >
                Mes Projets
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-stone-600 px-6 py-2 transition-all duration-300 hover:bg-[#CF7B71] hover:text-white hover:rounded-[50%]"
              >
                Contact
              </Link>
            </div>
          )}
        </nav>

        <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
