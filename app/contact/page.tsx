"use client";

import { useState } from "react";
// Importation des icônes
import emailjs from "@emailjs/browser"; // <-- Ajout de l'import
import { CheckCircle, GraduationCap, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({ nom: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Les paramètres que tu envoies à ton modèle EmailJS
      const templateParams = {
        name: formData.nom,
        email: formData.email,
        message: formData.message,
      };
      
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceID || !templateID || !publicKey) {
        throw new Error("Les variables d'environnement EmailJS sont manquantes.");
      }

await emailjs.send(serviceID, templateID, templateParams, publicKey);
      // Appel à l'API EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      );

      setSuccess(true);
      setFormData({ nom: "", email: "", message: "" });
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      alert("Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" min-h-screen pt-12 pb-24 px-6 font-sans text-[#472322]">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#472322]">
            On collabore ?
          </h1>
          <p className="text-[#6D4C4B] mt-4 text-lg max-w-2xl mx-auto">
            À la recherche d'un stage, d'une alternance ou d’un emploi, n'hésitez pas à me contacter
            via le formulaire ou directement via mes coordonnées.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* --- COLONNE GAUCHE : Coordonnées directes --- */}
          <div className="w-full lg:w-5/12 space-y-4">
            <h2 className="text-2xl font-serif text-[#472322] mb-6">Mes coordonnées</h2>

            {/* Téléphone */}
            <div className="group flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1DE] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5E1DE] text-[#BA6B65] rounded-full group-hover:bg-[#D48D85] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D48D85] mb-1">
                  Téléphone
                </p>
                <a
                  href="tel:+33778489465"
                  className="text-[#472322] font-medium hover:text-[#BA6B65] transition block"
                >
                  07 78 48 94 65
                </a>
              </div>
            </div>

            {/* Email Pro */}
            <div className="group flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1DE] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5E1DE] text-[#BA6B65] rounded-full group-hover:bg-[#D48D85] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D48D85] mb-1">
                  Email Pro
                </p>
                <a
                  href="mailto:lecerfanaelpro@gmail.com"
                  className="text-[#472322] font-medium hover:text-[#BA6B65] transition block break-all"
                >
                  lecerfanaelpro@gmail.com
                </a>
              </div>
            </div>

            {/* Email Universitaire */}
            <div className="group flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1DE] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5E1DE] text-[#BA6B65] rounded-full group-hover:bg-[#D48D85] group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D48D85] mb-1">
                  Email Universitaire
                </p>
                <a
                  href="mailto:anael.lecerf.etu@univ-lille.fr"
                  className="text-[#472322] font-medium hover:text-[#BA6B65] transition block break-all"
                >
                  anael.lecerf.etu@univ-lille.fr
                </a>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="group flex items-center gap-5 bg-white p-5 rounded-2xl shadow-sm border border-[#F5E1DE] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5E1DE] rounded-full group-hover:bg-[#D48D85] transition-colors relative">
                <Image
                  src="/linkedin.svg"
                  alt="Logo LinkedIn"
                  width={20}
                  height={20}
                  className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#D48D85] mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/anael-lecerf-71b582321/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#472322] font-medium hover:text-[#BA6B65] transition block break-all"
                >
                  Anael Lecerf
                </a>
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : Formulaire --- */}
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0">
            <h2 className="text-2xl font-serif text-[#472322] mb-6">M'envoyer un message</h2>

            {success ? (
              <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#D48D85] text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#D48D85] mx-auto" strokeWidth={1.5} />
                <h3 className="text-2xl font-serif text-[#472322]">Message envoyé !</h3>
                <p className="text-[#6D4C4B]">
                  Merci pour votre message. Je vous réponds dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 text-[#D48D85] underline font-medium hover:text-[#BA6B65]"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 md:p-10 rounded-[2rem] shadow-lg border border-[#F5E1DE] space-y-6"
              >
                <div>
                  <label className="block text-sm font-bold text-[#472322] mb-2 uppercase tracking-wide">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-[#F5E1DE] rounded-xl focus:outline-none focus:border-[#D48D85] bg-[#FAF5F0]/50 transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#472322] mb-2 uppercase tracking-wide">
                    Adresse email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-[#F5E1DE] rounded-xl focus:outline-none focus:border-[#D48D85] bg-[#FAF5F0]/50 transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#472322] mb-2 uppercase tracking-wide">
                    Votre Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-5 py-3 border-2 border-[#F5E1DE] rounded-xl focus:outline-none focus:border-[#D48D85] bg-[#FAF5F0]/50 transition-colors resize-none"
                    placeholder="Bonjour, votre profil m'intéresse..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D48D85] text-white py-4 rounded-full font-bold text-lg hover:bg-[#BA6B65] hover:-translate-y-1 transition-all shadow-md disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
