"use client"; // Indique à Next.js que ce composant est interactif

import Link from "next/link";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // État pour savoir si le menu mobile est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="fr">
      <body className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col justify-between">
        {/* Barre de navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo / Titre */}
            <Link href="/" className="font-bold text-xl text-indigo-600">
              Mon Portfolio ASSC
            </Link>

            {/* Menu Desktop (visible uniquement sur grand écran) */}
            <div className="hidden md:flex space-x-6 font-medium">
              <Link href="/" className="hover:text-indigo-600 transition">
                Accueil
              </Link>
              <Link href="/projets" className="hover:text-indigo-600 transition">
                Mes Projets
              </Link>
              <Link href="/contact" className="hover:text-indigo-600 transition">
                Contact
              </Link>
            </div>

            {/* Bouton Burger (visible uniquement sur mobile/tablette) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-700 focus:outline-none p-2"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? (
                // Icône "Croix" (Fermer)
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Icône "Burger" (Ouvrir)
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

          {/* Menu Mobile Déroulant (s'affiche si isOpen est vrai) */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 space-y-3 flex flex-col font-medium shadow-inner animate-fade-in">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600 py-1 transition"
              >
                Accueil
              </Link>
              <Link
                href="/projets"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600 py-1 transition"
              >
                Mes Projets
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="hover:text-indigo-600 py-1 transition"
              >
                Contact
              </Link>
            </div>
          )}
        </nav>

        {/* Contenu principal */}
        <main className="flex-grow max-w-5xl w-full mx-auto px-4 py-12">{children}</main>

        {/* Pied de page */}
        <footer className="bg-white border-t border-slate-200 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} - Étudiante ASSC. Fait avec Next.js.
        </footer>
      </body>
    </html>
  );
}
