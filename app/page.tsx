"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const phrases = ["Créer du lien social", "Encourager l'autonomie", "Accompagner l'humain"];

  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const handleTyping = () => {
      const fullPhrase = phrases[currentPhraseIdx];

      if (!isDeleting) {
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullPhrase) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIdx, typingSpeed, isPlaying]);

  // Données pour la Ligne du Temps
  const parcours = [
    {
      type: "Niveau d'étude",
      annee: "En cours",
      titre: " BUT 2 ASSC",
      desc: "Formation Bachelor universitaire de technologie en carrière sociale parcours animation sociale et socio-culturelle.",
    },
    {
      type: "Expérience",
      annee: "Récente",
      titre: "Stage d'action en école primaire",
      desc: "Conception d'un projet adapté aux enfants rencontrant des difficultés scolaires.",
    },
    {
      type: "Expérience",
      annee: "Passée",
      titre: "Stage d'observation en école primaire",
      desc: "Observation pédagogique en classe CP et en classe Montessori.",
    },
  ];

  return (
    // Le fond crème global du portfolio
    <div className=" min-h-screen font-sans text-[#472322] overflow-hidden -mt-12 pt-12">
      {/* --- 1. HERO SECTION --- */}
      <section className="relative max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 xl:gap-20">
        <div className="absolute top-0 right-0 w-full md:w-[75%] h-full  rounded-bl-[100px] md:rounded-bl-[200px] -z-10 opacity-60"></div>

        <div className="md:w-1/2 space-y-6 z-10 w-full lg:relative lg:-top-46">
          {/* Zone d'en-tête avec animation ET petit logo */}
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-[#D48D85] font-serif italic text-xl md:text-2xl border-r-2 border-[#D48D85] pr-2">
                {currentText}
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-[#D48D85] hover:text-[#BA6B65]"
                aria-label={isPlaying ? "Pause animation" : "Play animation"}
              >
                {isPlaying ? (
                  <span className="text-sm" aria-hidden="true">
                    ⏸
                  </span>
                ) : (
                  <span className="text-sm" aria-hidden="true">
                    ▶
                  </span>
                )}
              </button>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#472322] leading-[1.1]">
            ANAEL LECERF
          </h1>

          <div className="space-y-5 pt-2">
            <p className="text-[#6D4C4B] leading-relaxed max-w-lg text-base md:text-lg font-medium">
              En formation dans le secteur social, je m'investis pour favoriser l'inclusion, le
              travail collectif et l'épanouissement de chacun.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/projets"
              className="bg-[#D48D85] text-white px-8 py-3 rounded-full font-medium hover:bg-[#BA6B65] transition shadow-md text-center"
            >
              Voir mes projets
            </Link>
          </div>
        </div>

        {/* --- Droite : Arche photo et Logo principal --- */}
        <div className="md:w-1/2 relative flex flex-col items-center justify-center z-10 mt-6 md:mt-0 w-full md:-mt-16 gap-6">
          <span className="absolute top-0 left-4 text-[#D48D85] text-3xl z-20" aria-hidden="true">
            ✦
          </span>

          <div className="relative w-[260px] h-[350px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[500px]">
            <div className="absolute inset-0 bg-[#FAF5F0] rounded-t-[1000px] rounded-b-3xl border-[6px] border-white shadow-lg overflow-hidden flex items-center justify-center z-10">
              <Image
                src="/portrait.jpg"
                alt="Portrait professionnel"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="px-6 py-3 z-20 flex items-center justify-center">
            <Image
              src="/logo2.png"
              alt="Mon Logo"
              width={634}
              height={733}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* --- 2. TIMELINE --- */}
      <section className="relative max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#472322]">
            Mon parcours professionnel
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-[#D48D85]/30 -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12">
            {parcours.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? "md:flex-row-reverse" : ""} group`}
              >
                <div className="absolute left-8 md:left-1/2 w-6 h-6 bg-[#BA6B65] rounded-full -translate-x-1/2 ring-4 ring-[#FAF5F0] group-hover:scale-125 group-hover:bg-[#D48D85] transition-all duration-300 z-10"></div>

                <div
                  className={`pl-20 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-[#F5E1DE] group-hover:-translate-y-2 group-hover:shadow-xl transition-all duration-300">
                    <span className="text-[#D48D85] font-bold text-xs md:text-sm tracking-wider uppercase">
                      {item.type} • {item.annee}
                    </span>
                    <h4 className="text-xl md:text-2xl font-serif text-[#472322] mt-2 mb-3">
                      {item.titre}
                    </h4>
                    <p className="text-[#6D4C4B] text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. VALEURS (Nouveau design) --- */}
      {/* On ajoute un padding horizontal (px-4) autour de la section pour bien voir les bords arrondis */}
      <div className="px-4 md:px-6 w-full">
        {/* Couleur plus douce (#BA6B65 au lieu de #472322) et bords très arrondis (rounded-[3rem] md:rounded-[4rem]) */}
        <section className="bg-[#BA6B65] max-w-7xl mx-auto pt-14 pb-20 px-6 relative overflow-hidden rounded-[3rem] md:rounded-[4rem] shadow-sm">
          {/* Les "47" ont été remplacés par des étoiles ✦ pour habiller le fond sans texte */}
          <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-wrap gap-12 justify-center items-center text-8xl md:text-9xl font-serif text-white">
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
            <span>✦</span>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <span className="text-[#FAF5F0] font-bold text-sm tracking-wider uppercase mb-3 block opacity-90">
              Ce qui m'anime
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white mb-12 drop-shadow-sm">
              Mes Valeurs
            </h2>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto">
              {[
                "Promouvoir l’inclusion",
                "Accompagner les jeunes publics",
                "Soutenir les publics en difficulté",
                "Favoriser la coopération",
                "Encourager l’autonomie",
              ].map((valeur, idx) => (
                <span
                  key={idx}
                  className="text-xl md:text-2xl lg:text-3xl font-serif text-white hover:text-[#472322] transition-all duration-300 cursor-default hover:-translate-y-1 transform inline-block bg-white/10 hover:bg-white px-6 py-4 rounded-3xl backdrop-blur-sm border border-white/20 shadow-sm"
                >
                  {valeur}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* --- 4. COMPÉTENCES --- */}
      <section className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#472322]">
            Mes Compétences
          </h2>
          <p className="text-[#6D4C4B] text-2xl mt-4">
            Découvrez mes compétences et outils en survolant les cartes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 : Soft Skills */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 h-80 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#F5E1DE]">
            <div className="absolute inset-0 bg-[#F5E1DE] translate-y-[82%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

            <div className="relative z-10 flex items-center justify-center gap-3 h-full group-hover:-translate-y-16 transition-transform duration-500">
              <span className="text-3xl" aria-hidden="true">
                🧠
              </span>
              <h3 className="text-2xl font-serif text-[#472322] font-bold">Soft Skills</h3>
            </div>

            <div className="absolute bottom-8 left-0 right-0 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10 text-center">
              <ul className="text-[#472322] font-medium text-md space-y-1">
                <li className="relative bottom-0.5">Adaptabilité</li>
                <li className="relative bottom-0.5">Communication claire</li>
                <li className="relative bottom-0.5">Bienveillance</li>
                <li className="relative bottom-0.5">Esprit d’équipe</li>
                <li className="relative bottom-0.5">Sens de l’organisation</li>
              </ul>
            </div>
          </div>

          {/* Card 2 : Hard Skills */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 h-80 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#D48D85]">
            <div className="absolute inset-0 bg-[#D48D85] translate-y-[82%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

            <div className="relative z-10 flex items-center justify-center gap-3 h-full group-hover:-translate-y-16 transition-transform duration-500">
              <span className="text-3xl" aria-hidden="true">
                🛠️
              </span>
              <h3 className="text-2xl font-serif text-[#472322] font-bold group-hover:text-white transition-colors duration-500">
                Hard Skills
              </h3>
            </div>

            <div className="absolute bottom-6 left-0 right-0 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10 text-center">
              <ul className="text-white font-medium text-md space-y-1 ">
                <li className="relative bottom-0.5">Analyser les besoins</li>
                <li className="relative bottom-0.5">Gérer les conflits</li>
                <li className="relative bottom-0.5">Développer le lien social</li>
                <li className="relative bottom-0.5">Bases en psychologie sociale</li>
                <li className="relative bottom-0.5">Maîtriser la bureautique</li>
              </ul>
            </div>
          </div>

          {/* Card 3 : Logiciels Maîtrisés */}
          <div className="group relative bg-white rounded-[2.5rem] p-8 h-80 flex flex-col justify-end overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#FAF5F0] bg-gradient-to-br from-white to-[#FAF5F0]">
            <div className="absolute inset-0 bg-[#472322] translate-y-[82%] group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>

            <div className="relative z-10 flex items-center justify-center gap-3 h-full group-hover:-translate-y-16 transition-transform duration-500 left-7">
              <span className="text-3xl" aria-hidden="true">
                💻
              </span>
              <h3 className="text-2xl font-serif text-[#472322] font-bold group-hover:text-white transition-colors duration-500">
                Maîtrise Logiciels
              </h3>
            </div>

            <div className="absolute bottom-8 left-0 right-0 px-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 z-10 text-center">
              <ul className="text-[#FAF5F0] font-medium text-md space-y-1">
                <li className="relative bottom-0.5">Word</li>
                <li className="relative bottom-0.5">PowerPoint</li>
                <li className="relative bottom-0.5">Canva</li>
                <li className="relative bottom-0.5">Teams</li>
                <li className="relative bottom-0.5">Google Sheets / Forms</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. ATTENTES PROFESSIONNELLES (Déplacé ici) --- */}
      <section className="relative max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-white p-4 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-sm border border-[#F5E1DE] relative overflow-hidden">
          {/* Décoration subtile en arrière-plan */}
          <div className="absolute -right-1 -top-3 text-[#e7cdc9] text-9xl opacity-30 pointer-events-none">
            ✦
          </div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="md:w-1/3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-serif text-[#472322] mb-2">Mes Attentes</h2>
              <span className="text-sm font-bold uppercase tracking-wider text-[#D48D85]">
                Professionnelles
              </span>
            </div>

            <div className="md:w-2/3">
              <ul className="text-[#6D4C4B] text-base md:text-lg space-y-4 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-[#D48D85] mt-1">✓</span>
                  Me rendre utile en étant sollicitée par les autres
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D48D85] mt-1">✓</span>
                  Besoin de créer une routine cadrée
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D48D85] mt-1">✓</span>
                  Environnement de travail sain et positif
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#D48D85] mt-1">✓</span>
                  Avoir un niveau de vie qui me permets d’atteindre mes objectifs personnels
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. BOTTOM CTA --- */}
      <section className="px-6 relative pb-24">
        <div className="max-w-5xl mx-auto bg-[#BA6B65] rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Construisons quelque chose ensemble
            </h3>
            <p className="text-[#F5E1DE] text-sm md:text-base">
              Prêt(e) à me connaître davantage ?
            </p>
          </div>

          <Link
            href="/contact"
            className="w-full md:w-auto bg-white text-[#BA6B65] px-10 py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#F5E1DE] transition text-center shadow-lg hover:-translate-y-1 z-10"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
