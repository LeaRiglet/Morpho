
import ROIChart from '../components/ROIChart'
import confetti from 'canvas-confetti'

function triggerConfetti(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  confetti({
    particleCount: 80,
    spread: 70,
    origin: {
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    },
  })
}

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
              <button onClick={triggerConfetti}>Ajouter au panier</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/Morpho/3d_printed_lockbox.png" alt="Boîte à bijoux" />
            </div>
            <div className="card-content">
              <h3>Boîte à bijoux</h3>
              <p>18€</p>
              <button onClick={triggerConfetti}>Ajouter au panier</button>
            </div>
          </div>

          <div className="card">
            <div className="card-image">
              <img src="/Morpho/3d_printed_key_ring.png" alt="Porte-clés personnalisable" />
            </div>
            <div className="card-content">
              <h3>Porte-clés personnalisable</h3>
              <p>5€</p>
              <button onClick={triggerConfetti}>Ajouter au panier</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="mission">
        <h2>Pourquoi notre mission compte</h2>
        <p>
          Morpho met en relation les propriétaires d&rsquo;imprimantes 3D avec les
          personnes qui souhaitent faire imprimer leurs modèles. Si vous disposez
          d&rsquo;une imprimante que vous n&rsquo;utilisez pas souvent, c&rsquo;est l&rsquo;occasion de
          rentabiliser votre matériel en imprimant pour les autres et en
          expédiant vos créations directement chez eux.
        </p>
      </section>

      <section className="section" id="roi">
        <ROIChart />
      </section>

    </>
  )
}

export default Home
