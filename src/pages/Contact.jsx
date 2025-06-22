import React from "react";
import { Link } from "react-router-dom";

const GITHUB_URL = "https://github.com/LeaRiglet/Morpho";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto my-8 p-8 bg-gray-50 rounded-3xl">
      <h2 className="text-3xl font-extrabold mb-6 text-indigo-900 text-center">Contactez-nous</h2>
      <p className="mb-6 text-center text-gray-700 leading-relaxed">
        Pour toute question, suggestion ou demande de collaboration, n'hésitez pas à nous contacter via notre page GitHub principale :
      </p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-5 rounded-3xl font-extrabold text-white shadow-neumorphism-btn neumorphism-btn transition duration-300 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-700 hover:shadow-neumorphism-btn-hover hover:from-indigo-600 hover:via-indigo-700 hover:to-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-400 text-center block"
      >
        Accéder au GitHub Morpho
      </a>
      <p className="mt-8 text-center">
        <Link to="/tos" className="underline text-indigo-700 hover:text-indigo-900 transition duration-300">
          Consulter les conditions d'utilisation
        </Link>
      </p>
    </div>
  );
}
