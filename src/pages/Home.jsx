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
            <div className="card-image">
              <img src="/Morpho/3d_printed_phone_support.png" alt="Support de téléphone" />
            </div>
            <div className="card-content">
              <h3>Support de téléphone</h3>
              <p>12€</p>
              <button>Ajouter au panier</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/Morpho/3d_printed_lockbox.png" alt="Boîte à bijoux" />
            </div>
            <div className="card-content">
              <h3>Boîte à bijoux</h3>
              <p>18€</p>
              <button>Ajouter au panier</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/Morpho/3d_printed_key_ring.png" alt="Porte-clés personnalisable" />
            </div>
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
