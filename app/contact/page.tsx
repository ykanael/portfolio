export default function Contact() {
  return (
    <div className="max-w-xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-slate-900">On collabore ?</h1>
        <p className="text-slate-500 mt-2">
          À la recherche d'un stage, d'un alternance ou simplement pour échanger sur le métier.
        </p>
      </div>

      <form className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Nom complet</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Jean Dupont"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Adresse email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="jean@exemple.com"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Votre Message</label>
          <textarea
            rows={4}
            className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Bonjour, votre profil m'intéresse pour notre structure..."
          ></textarea>
        </div>
        <button
          type="button"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition shadow-md"
        >
          Envoyer le message
        </button>
      </form>
    </div>
  );
}
