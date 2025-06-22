import React from "react";
import { Link } from "react-router-dom";

const GITHUB_URL = "https://github.com/LeaRiglet/Morpho";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto my-8 p-8 bg-gray-200 rounded-3xl shadow-neumorphism">
      <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
      <p>
        Pour toute question, suggestion ou demande de collaboration, n'hésitez pas à nous contacter via notre page GitHub principale :
      </p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 px-4 py-3 bg-gray-200 text-gray-700 rounded-3xl font-bold text-lg shadow-neumorphism-btn hover:shadow-neumorphism-btn-hover"
      >
        Accéder au GitHub Morpho
      </a>
      <p className="mt-8">
        <Link to="/tos" className="underline">Consulter les conditions d'utilisation</Link>
      </p>
    </div>
  );
}
