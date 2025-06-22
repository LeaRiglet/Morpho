function DevenirImprimeur() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Devenir imprimeur partenaire</h1>
      <p className="mb-6 text-gray-700">
        Vous possédez une imprimante 3D ? Rejoignez le réseau Morpho et imprimez des objets pour nos clients près de chez vous.
        Gagnez de l&rsquo;argent en valorisant votre équipement !
      </p>

      <form className="flex flex-col">
        <label className="font-semibold mt-4" htmlFor="nom">Nom complet</label>
        <input className="p-2 border rounded" type="text" id="nom" name="nom" required />

        <label className="font-semibold mt-4" htmlFor="email">Adresse e-mail</label>
        <input className="p-2 border rounded" type="email" id="email" name="email" required />

        <label className="font-semibold mt-4" htmlFor="ville">Ville / Code postal</label>
        <input className="p-2 border rounded" type="text" id="ville" name="ville" required />

        <label className="font-semibold mt-4" htmlFor="machine">Type d’imprimante(s) 3D</label>
        <input className="p-2 border rounded" type="text" id="machine" name="machine" placeholder="Ex: Ender 3 V2, Prusa i3..." required />

        <label className="font-semibold mt-4" htmlFor="message">Message ou précision</label>
        <textarea className="p-2 border rounded" id="message" name="message" rows="4"></textarea>

        <button className="mt-6 p-3 font-bold bg-gray-800 text-white rounded" type="submit">Envoyer ma candidature</button>
      </form>
    </div>
  )
}

export default DevenirImprimeur
