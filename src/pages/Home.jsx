
import ROIChart from '../components/ROIChart'
import confetti from 'canvas-confetti'
import { Link } from 'react-router-dom'

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
      <section className="py-20 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto p-10 rounded-3xl shadow-neumorphism bg-gray-100">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Impression 3D créative &amp; locale</h2>
          <p className="text-lg text-gray-700 mb-8">Commandez des objets uniques personnalisés près de chez vous.</p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 rounded-full font-semibold text-white shadow-neumorphism-btn transition duration-300 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:shadow-neumorphism-btn-hover hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          >
            Découvrir les produits
          </Link>
        </div>
      </section>

      <section className="py-16" id="produits">
        <h3 className="text-2xl font-bold text-center mb-10">Produits populaires</h3>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="rounded-3xl p-6 bg-gray-100 shadow-neumorphism hover:shadow-neumorphism-embossed transition flex flex-col items-center">
            <img src="/Morpho/3d_printed_phone_support.png" alt="Support de téléphone" className="w-full aspect-square object-cover rounded-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Support de téléphone</h3>
            <p className="mb-4 text-gray-600">12€</p>
            <button
              onClick={triggerConfetti}
              className="mt-auto px-4 py-2 rounded-full text-white shadow-neumorphism-btn transition duration-300 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:shadow-neumorphism-btn-hover hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400 font-semibold"
            >
              Ajouter au panier
            </button>
          </div>

          <div className="rounded-3xl p-6 bg-gray-100 shadow-neumorphism hover:shadow-neumorphism-embossed transition flex flex-col items-center">
            <img src="/Morpho/3d_printed_lockbox.png" alt="Boîte à bijoux" className="w-full aspect-square object-cover rounded-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Boîte à bijoux</h3>
            <p className="mb-4 text-gray-600">18€</p>
            <button
              onClick={triggerConfetti}
              className="mt-auto px-4 py-2 rounded-full text-white shadow-neumorphism-btn transition duration-300 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:shadow-neumorphism-btn-hover hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400 font-semibold"
            >
              Ajouter au panier
            </button>
          </div>

          <div className="rounded-3xl p-6 bg-gray-100 shadow-neumorphism hover:shadow-neumorphism-embossed transition flex flex-col items-center">
            <img src="/Morpho/3d_printed_key_ring.png" alt="Porte-clés personnalisable" className="w-full aspect-square object-cover rounded-3xl mb-4" />
            <h3 className="text-lg font-semibold mb-2">Porte-clés personnalisable</h3>
            <p className="mb-4 text-gray-600">5€</p>
            <button
              onClick={triggerConfetti}
              className="mt-auto px-4 py-2 rounded-full text-white shadow-neumorphism-btn transition duration-300 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:shadow-neumorphism-btn-hover hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400 font-semibold"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100" id="mission">
        <div className="max-w-2xl mx-auto p-10 rounded-3xl shadow-neumorphism bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">Pourquoi notre mission compte</h2>
          <p className="text-gray-700">
            Morpho met en relation les propriétaires d&rsquo;imprimantes 3D avec les personnes qui souhaitent faire imprimer leurs modèles. Si vous disposez d&rsquo;une imprimante que vous n&rsquo;utilisez pas souvent, c&rsquo;est l&rsquo;occasion de rentabiliser votre matériel en imprimant pour les autres et en expédiant vos créations directement chez eux.
          </p>
        </div>
      </section>

      <section className="py-16" id="roi">
        <div className="max-w-[1000px] mx-auto p-6 bg-gray-100 rounded-3xl shadow-neumorphism">
          <ROIChart />
        </div>
      </section>

    </>
  )
}

export default Home
