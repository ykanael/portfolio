"use client"; // Obligatoire pour gérer l'animation en direct

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // Les phrases qui vont défiler en boucle
  const phrases = [
    "Créer du lien social...",
    "Animer le quotidien...",
    "Accompagner l'humain...",
    "À la recherche d'un stage !",
  ];

  // Gestion de l'état de l'animation
  const [currentPhraseIdx, setCurrentPhraseIdx] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // NOUVEL ÉTAT : Permet de savoir si l'animation est active ou en pause
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Si l'animation est coupée, on ne fait rien
    if (!isPlaying) return;

    const handleTyping = () => {
      const fullPhrase = phrases[currentPhraseIdx];

      if (!isDeleting) {
        // En train d'écrire
        setCurrentText(fullPhrase.substring(0, currentText.length + 1));
        setTypingSpeed(100); // Vitesse d'écriture

        // Si la phrase est entière, on fait une pause avant d'effacer
        if (currentText === fullPhrase) {
          setTypingSpeed(2000); // Pause de 2 secondes
          setIsDeleting(true);
        }
      } else {
        // En train d'effacer
        setCurrentText(fullPhrase.substring(0, currentText.length - 1));
        setTypingSpeed(50); // Plus rapide pour effacer

        // Si tout est effacé, on passe à la phrase suivante
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentPhraseIdx((prev) => (prev + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhraseIdx, typingSpeed, isPlaying]);

  const competences = [
    {
      categorie: "Animation",
      items: [
        "Conception de projets pédagogiques",
        "Dynamique de groupe",
        "Grands jeux & Ateliers créatifs",
      ],
    },
    {
      categorie: "Relationnel & Social",
      items: [
        "Écoute active & Empathie",
        "Médiation",
        "Accompagnement de publics variés (jeunes, seniors)",
      ],
    },
    {
      categorie: "Administratif",
      items: [
        "Gestion de budget de projet",
        "Travail en équipe pluridisciplinaire",
        "Partenariats institutionnels",
      ],
    },
  ];

  return (
    <div className="space-y-16">
      {/* Section Héro / Présentation */}
      <section className="text-center md:text-left md:flex md:items-center md:gap-12 py-8">
        <div className="space-y-6 md:w-2/3">
          {/* Zone du texte avec le bouton Play/Pause */}
          <div className="h-8 flex items-center justify-center md:justify-start gap-3">
            <span className="text-indigo-600 font-mono font-bold text-lg inline-block border-r-2 border-indigo-600 pr-1 current-text-animation animate-pulse">
              {currentText}
            </span>

            {/* Bouton pour couper/relancer l'animation */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-xs bg-slate-200 hover:bg-slate-300 text-slate-600 px-2 py-1 rounded transition flex items-center gap-1 font-medium"
              title={isPlaying ? "Couper l'animation" : "Lancer l'animation"}
            >
              {isPlaying ? (
                <>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <span>Play</span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Étudiante en <span className="text-indigo-600">ASSC 2</span>
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bienvenue sur mon portfolio. Future professionnelle du secteur social et socio-culturel,
            je mets mon énergie et ma créativité au service du collectif et de l'épanouissement de
            chacun.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="/projets"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md"
            >
              Voir mes projets
            </Link>
            <Link
              href="/contact"
              className="bg-white text-slate-700 border border-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Placeholder pour une photo */}
        <div className="mt-8 md:mt-0 md:w-1/3 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-indigo-200 border-4 border-white shadow-xl flex items-center justify-center text-indigo-500 font-medium">
            [ Ta Photo Ici ]
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Mes Compétences Terrain</h2>
          <p className="text-slate-500">
            Ce que je développe au fil de ma formation et de mes stages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {competences.map((comp, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h3 className="font-bold text-xl text-indigo-600 mb-4">{comp.categorie}</h3>
              <ul className="space-y-2">
                {comp.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-indigo-500 font-bold">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
