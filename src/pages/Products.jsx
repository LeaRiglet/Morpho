import React from "react";
import "../App.css";

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
    <main className="products-main">
      <h2 className="products-title">Nos Produits</h2>
      <p className="products-subtitle">
        Découvrez notre sélection d’objets imprimés en 3D, conçus pour allier utilité et originalité.
      </p>
      <div className="products-grid">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3 className="product-name">{product.title}</h3>
            <p className="product-desc">{product.description}</p>
            <div className="product-price">{product.price}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
