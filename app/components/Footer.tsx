import { GraduationCap, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    // Fond bordeaux avec bords arrondis en haut pour casser le côté "bloc"
    <footer className="bg-[#472322] text-[#FAF5F0] py-10 px-10 mt-12 md:mt-24 rounded-t-[3rem] md:rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-8">
        {/* --- Partie Gauche : Présentation --- */}
        <div className="space-y-4 md:w-1/3">
          <h3 className="text-3xl font-serif font-bold text-[#D48D85]">Anaël Lecerf</h3>
          <p className="xl:text-xl text-sm text-[#FAF5F0]/80 leading-relaxed max-w-sm text-justify">
            Future professionnelle du secteur social, je m'investis pour favoriser l'inclusion, le travail collectif et l'épanouissement de chacun. Construisons ensemble vos projets de demain.
          </p>
        </div>

        {/* --- Partie Droite : Coordonnées et Liens --- */}
        <div className="md:w-2/3 flex flex-col sm:flex-row gap-10 sm:gap-16 md:justify-end">
          {/* Colonne Contacts */}
          <div className="space-y-4">
            <h4 className="xl:text-xl font-bold font-serif uppercase tracking-widest text-xs text-[#D48D85] mb-6">
              Me contacter
            </h4>

            <a
              href="tel:+33778489465"
              className="xl:text-xl group flex items-center gap-3 hover:text-[#D48D85] transition-colors text-sm font-medium"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D48D85]/20 transition-colors">
                <Phone className="w-4 h-4" />
              </span>
              07 78 48 94 65
            </a>

            <a
              href="lecerfanaelpro@gmail.com"
              className="xl:text-[1.4rem] group flex items-center gap-3 hover:text-[#D48D85] transition-colors text-sm font-medium break-all"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D48D85]/20 transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              lecerfanaelpro@gmail.com
            </a>

            <a
              href="anael.lecerf.etu@univ-lille.fr"
              className="xl:text-[1.4rem] group flex items-center gap-3 hover:text-[#D48D85] transition-colors text-sm font-medium break-all"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D48D85]/20 transition-colors">
                <GraduationCap className="w-4 h-4" />
              </span>
              anael.lecerf.etu@univ-lille.fr
            </a>
          </div>

          {/* Colonne Réseaux & Navigation */}
          <div className="space-y-4">
            <h4 className="xl:text-[1.4rem] font-bold font-serif uppercase tracking-widest text-xs text-[#D48D85] mb-6">
              Réseaux
            </h4>

            <a
              href="https://www.linkedin.com/in/anael-lecerf-71b582321/"
              target="_blank"
              rel="noopener noreferrer"
              className="xl:text-xl group flex items-center gap-3 hover:text-[#D48D85] transition-colors text-sm font-medium"
            >
              <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#D48D85]/20 transition-colors">
                <Image
                  src="/linkedin.svg"
                  alt="LinkedIn"
                  width={14}
                  height={14}
                  className="brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* --- Ligne de Copyright --- */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-[#FAF5F0]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#FAF5F0]/50">
        <p>© {new Date().getFullYear()} Anaël Lecerf. Tous droits réservés.</p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-[#D48D85] transition">
            Accueil
          </Link>
          <Link href="/projets" className="hover:text-[#D48D85] transition">
            Projets
          </Link>
          <Link href="/contact" className="hover:text-[#D48D85] transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
