function DevenirImprimeur() {
  return (
    <div className="container">
      <h1>Devenir imprimeur partenaire</h1>
      <p>
        Vous possédez une imprimante 3D ? Rejoignez le réseau Morpho et imprimez des objets pour nos clients près de chez vous.
        Gagnez de l’argent en valorisant votre équipement !
      </p>

      <form>
        <label htmlFor="nom">Nom complet</label>
        <input type="text" id="nom" name="nom" required />

        <label htmlFor="email">Adresse e-mail</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="ville">Ville / Code postal</label>
        <input type="text" id="ville" name="ville" required />

        <label htmlFor="machine">Type d’imprimante(s) 3D</label>
        <input type="text" id="machine" name="machine" placeholder="Ex: Ender 3 V2, Prusa i3..." required />

        <label htmlFor="message">Message ou précision</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Envoyer ma candidature</button>
      </form>
    </div>
  )
}

export default DevenirImprimeur
