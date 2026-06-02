export default function Projets() {
  const projets = [
    {
      titre: "Projet en cours : Alim’Action",
      public: "18-23 ans",
      structure: "IUT Tourcoing",
      description:
        "Action et distribution solidaire auprès des étudiants en situation de précarité alimentaire.",
      impact:
        "Un soutien alimentaire apporté aux étudiants sans stigmatisation et une création de nouveau lien sociaux.",
    },
    {
      titre: "Aménager l'environnement scolaire pour les élèves DYS",
      public: "5-7 ans",
      structure: "Ecole maternelle et primaire",
      description: "Création d'outils et suivi personnalisé sur 6 semaines de stage.",
      impact:
        "Les élèves travaillent mieux, plus rapidement et sont moins angoissés par la peur d’échouer.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-stone-800">Mes Projets & Expériences</h1>
        <p className="xl:text-[1.4rem] text-stone-500 mt-2">Découvrez les projets que j'ai mené.</p>
      </div>

      <div className="grid gap-8">
        {projets.map((p, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col md:flex-row gap-6 hover:shadow-md transition"
          >
            <div className="md:w-1/4 bg-[#F8EBE9] rounded-xl px-4 py-8 flex flex-col justify-between text-sm border border-[#F3DDDA]">
              <div>
                <span className="xl:text-xl lock font-bold text-[#CF7B71] uppercase tracking-wider text-xs mb-1">
                  Public
                </span><br/>
                <span className="xl:text-xl text-stone-700 font-medium">{p.public}</span>
              </div>
              <div className="mt-4">
                <span className="xl:text-lg font-bold text-[#CF7B71] uppercase tracking-wider text-xs mb-1">
                  Structure
                </span> <br/>
                <span className="xl:text-lg text-stone-700 font-medium">{p.structure}</span>
              </div>
            </div>

            <div className="md:w-3/4 space-y-3">
              <h2 className="text-3xl font-bold text-stone-800">{p.titre}</h2>
              <p className="xl:text-xl text-stone-600 leading-relaxed">{p.description}</p>

              <div className="bg-[#F8EBE9] border-l-4 border-[#CF7B71] p-3 rounded-r-lg mt-4">
                <span className="xl:text-xl font-semibold text-[#8A4A43] text-sm">Résultat / Impact : </span>
                <span className="xl:text-xl text-[#A35952] text-sm">{p.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
