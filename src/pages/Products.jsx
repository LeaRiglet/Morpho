import React from "react";

const products = [
  {
    image: "/Morpho/3d_printed_key_ring.png",
    title: "Porte-clés imprimé 3D",
    description: "Un porte-clés unique et résistant, parfait pour vos clés ou comme cadeau original.",
    price: "3,00 €"
  },
  {
    image: "/Morpho/3d_printed_lockbox.png",
    title: "Boîte à serrure imprimée 3D",
    description: "Gardez vos petits objets en sécurité avec cette boîte à serrure élégante et pratique.",
    price: "8,00 €"
  },
  {
    image: "/Morpho/3d_printed_phone_support.png",
    title: "Support de téléphone imprimé 3D",
    description: "Un support stable et design pour votre smartphone, idéal pour le bureau ou la maison.",
    price: "5,00 €"
  },
  {
    image: "/Morpho/3d_printed_benchy.png",
    title: "Nouveau produit bientôt disponible",
    description: "Restez à l'affût, un nouveau produit arrive prochainement !",
    price: "À venir"
  }
];

function Products() {
  return (
    <main className="max-w-5xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-bold mb-2 text-center text-indigo-900">Nos Produits</h2>
      <p className="text-center text-gray-600 mb-10">
        Découvrez notre sélection d’objets imprimés en 3D, conçus pour allier utilité et originalité.
      </p>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product, idx) => (
          <div
            className="bg-gray-200 rounded-3xl shadow-neumorphism p-6 flex flex-col items-center transition-transform hover:-translate-y-1"
            key={idx}
          >
            <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-4 rounded-lg bg-gray-200 shadow-neumorphism-inner" />
            <h3 className="text-lg font-semibold mb-1 text-center">{product.title}</h3>
            <p className="text-gray-600 text-center mb-2">{product.description}</p>
            <div className="font-bold text-blue-600">{product.price}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
