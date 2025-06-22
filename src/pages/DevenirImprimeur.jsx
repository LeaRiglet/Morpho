import React from 'react';

function DevenirImprimeur() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      <div className="max-w-3xl w-full bg-gray-200 rounded-3xl p-12 relative">
        <div className="relative z-10 bg-gray-200 rounded-3xl p-10 shadow-inner-neumorphism">
          <h1 className="text-4xl font-extrabold mb-6 text-gray-900 text-center tracking-tight">Devenir Imprimeur Partenaire</h1>
          <p className="mb-8 text-lg text-gray-700 text-center max-w-xl mx-auto leading-relaxed">
            Vous possédez une imprimante 3D ? Rejoignez le réseau Morpho et imprimez des objets pour nos clients près de chez vous.
            Gagnez de l&rsquo;argent en valorisant votre équipement !
          </p>

          <form className="space-y-8 max-w-xl mx-auto">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2" htmlFor="nom">Nom complet</label>
              <input
                className="w-full p-4 rounded-3xl bg-gray-200 shadow-neumorphism-inner focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-400 transition duration-300 ease-in-out font-sans text-gray-900"
                type="text"
                id="nom"
                name="nom"
                required
                placeholder="Votre nom complet"
                style={{ border: 'none' }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2" htmlFor="email">Adresse e-mail</label>
              <input
                className="w-full p-4 rounded-3xl bg-gray-200 shadow-neumorphism-inner focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-400 transition duration-300 ease-in-out font-sans text-gray-900"
                type="email"
                id="email"
                name="email"
                required
                placeholder="exemple@domaine.com"
                style={{ border: 'none' }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2" htmlFor="ville">Ville / Code postal</label>
              <input
                className="w-full p-4 rounded-3xl bg-gray-200 shadow-neumorphism-inner focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-400 transition duration-300 ease-in-out font-sans text-gray-900"
                type="text"
                id="ville"
                name="ville"
                required
                placeholder="Votre ville ou code postal"
                style={{ border: 'none' }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2" htmlFor="machine">Type d’imprimante(s) 3D</label>
              <input
                className="w-full p-4 rounded-3xl bg-gray-200 shadow-neumorphism-inner focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-400 transition duration-300 ease-in-out font-sans text-gray-900"
                type="text"
                id="machine"
                name="machine"
                placeholder="Ex: Ender 3 V2, Prusa i3..."
                required
                style={{ border: 'none' }}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2" htmlFor="message">Message ou précision</label>
              <textarea
                className="w-full p-4 rounded-3xl bg-gray-200 shadow-neumorphism-inner focus:outline-none focus:ring-4 focus:ring-indigo-400 placeholder-gray-400 transition duration-300 ease-in-out font-sans text-gray-900"
                id="message"
                name="message"
                rows="5"
                placeholder="Votre message ou précision (optionnel)"
                style={{ border: 'none' }}
              ></textarea>
            </div>

            <button
              className="w-full py-5 bg-gray-200 rounded-3xl font-extrabold text-gray-700 shadow-neumorphism-btn hover:shadow-neumorphism-btn-hover transition duration-300"
              type="submit"
            >
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DevenirImprimeur;
