function Home() {
  return (
    <>
      <div className="hero">
        <h2>Impression 3D créative &amp; sur mesure</h2>
        <p>Commandez des objets uniques et personnalisés, imprimés localement.</p>
      </div>

      <section className="section" id="produits">
        <div className="grid">
          <div className="card">
            <img src="https://via.placeholder.com/300x200?text=Support+Téléphone" alt="Support de téléphone" />
            <div className="card-content">
              <h3>Support de téléphone</h3>
              <p>12€</p>
              <button>Ajouter au panier</button>
            </div>
          </div>

          <div className="card">
            <img src="https://via.placeholder.com/300x200?text=Boite+Bijoux" alt="Boîte à bijoux" />
            <div className="card-content">
              <h3>Boîte à bijoux</h3>
              <p>18€</p>
              <button>Ajouter au panier</button>
            </div>
          </div>

          <div className="card">
            <img src="https://via.placeholder.com/300x200?text=Porte+Clés" alt="Porte-clés personnalisable" />
            <div className="card-content">
              <h3>Porte-clés personnalisable</h3>
              <p>5€</p>
              <button>Ajouter au panier</button>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © 2025 Morpho. Tous droits réservés. | Site par Morpho Design Studio
      </footer>
    </>
  )
}

export default Home
