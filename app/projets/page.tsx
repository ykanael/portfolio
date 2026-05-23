export default function Projets() {
  const projets = [
    {
      titre: "Projet Intergénérationnel 'Mémoire Vive'",
      public: "Seniors & Adolescents",
      structure: "Centre Social des Trois Vallées (Stage)",
      description:
        "Conception et animation d'ateliers de partage de mémoire entre les jeunes d'un club ado et les résidents d'un EHPAD local autour du jeu et de la cuisine.",
      impact:
        "15 seniors et 12 ados mobilisés sur 4 semaines. Création d'un recueil de recettes partagées.",
    },
    {
      titre: "Chantier Jeunes Citoyens",
      public: "14-17 ans",
      structure: "MJC / Service Jeunesse",
      description:
        "Organisation d'une semaine de réhabilitation d'un espace public par les jeunes, couplée à des activités de loisirs et des débats sur la citoyenneté.",
      impact: "Valorisation des jeunes dans leur quartier, développement de l'autonomie.",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Mes Projets & Expériences</h1>
        <p className="text-slate-500 mt-2">
          Découvre les actions concrètes que j'ai menées sur le terrain.
        </p>
      </div>

      <div className="grid gap-8">
        {projets.map((p, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6"
          >
            <div className="md:w-1/4 bg-slate-100 rounded-xl p-4 flex flex-col justify-between text-sm">
              <div>
                <span className="block font-bold text-slate-500 uppercase tracking-wider text-xs">
                  Public
                </span>
                <span className="text-slate-800 font-medium">{p.public}</span>
              </div>
              <div className="mt-4">
                <span className="block font-bold text-slate-500 uppercase tracking-wider text-xs">
                  Structure
                </span>
                <span className="text-slate-800 font-medium">{p.structure}</span>
              </div>
            </div>

            <div className="md:w-3/4 space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 hover:text-indigo-600 transition">
                {p.titre}
              </h2>
              <p className="text-slate-600 leading-relaxed">{p.description}</p>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-3 rounded-r-lg">
                <span className="font-semibold text-indigo-900 text-sm">Résultat / Impact : </span>
                <span className="text-indigo-800 text-sm">{p.impact}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
