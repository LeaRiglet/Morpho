
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
      <div className="bg-gray-200 py-16 text-center rounded-3xl shadow-neumorphism m-4">
        <h2 className="text-4xl font-bold mb-2">Impression 3D créative &amp; sur mesure</h2>
        <p className="text-lg text-gray-600">Commandez des objets uniques et personnalisés, imprimés localement.</p>
      </div>

      <section className="py-10 max-w-6xl mx-auto" id="produits">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-3xl shadow-neumorphism overflow-hidden bg-gray-200 flex flex-col p-4">
            <div className="aspect-square w-full overflow-hidden">
              <img src="/Morpho/3d_printed_phone_support.png" alt="Support de téléphone" className="object-cover w-full h-full" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">Support de téléphone</h3>
              <p className="mb-4 text-gray-600">12€</p>
              <button onClick={triggerConfetti} className="mt-auto px-4 py-2 rounded-3xl bg-gray-200 text-gray-700 font-semibold shadow-neumorphism-btn hover:shadow-neumorphism-btn-hover">Ajouter au panier</button>
            </div>
          </div>

          <div className="rounded-3xl shadow-neumorphism overflow-hidden bg-gray-200 flex flex-col p-4">
            <div className="aspect-square w-full overflow-hidden">
              <img src="/Morpho/3d_printed_lockbox.png" alt="Boîte à bijoux" className="object-cover w-full h-full" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">Boîte à bijoux</h3>
              <p className="mb-4 text-gray-600">18€</p>
              <button onClick={triggerConfetti} className="mt-auto px-4 py-2 rounded-3xl bg-gray-200 text-gray-700 font-semibold shadow-neumorphism-btn hover:shadow-neumorphism-btn-hover">Ajouter au panier</button>
            </div>
          </div>

          <div className="rounded-3xl shadow-neumorphism overflow-hidden bg-gray-200 flex flex-col p-4">
            <div className="aspect-square w-full overflow-hidden">
              <img src="/Morpho/3d_printed_key_ring.png" alt="Porte-clés personnalisable" className="object-cover w-full h-full" />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2">Porte-clés personnalisable</h3>
              <p className="mb-4 text-gray-600">5€</p>
              <button onClick={triggerConfetti} className="mt-auto px-4 py-2 rounded-3xl bg-gray-200 text-gray-700 font-semibold shadow-neumorphism-btn hover:shadow-neumorphism-btn-hover">Ajouter au panier</button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 max-w-2xl mx-auto bg-gray-200 rounded-3xl shadow-neumorphism p-8" id="mission">
        <h2 className="text-2xl font-bold mb-4 text-center">Pourquoi notre mission compte</h2>
        <p className="text-gray-700">
          Morpho met en relation les propriétaires d&rsquo;imprimantes 3D avec les personnes qui souhaitent faire imprimer leurs modèles. Si vous disposez d&rsquo;une imprimante que vous n&rsquo;utilisez pas souvent, c&rsquo;est l&rsquo;occasion de rentabiliser votre matériel en imprimant pour les autres et en expédiant vos créations directement chez eux.
        </p>
      </section>

      <section className="py-10" id="roi">
        <ROIChart />
      </section>

    </>
  )
}

export default Home
