import React from "react";
import { Link } from "react-router-dom";
import { Button } from '@carton-org/react-neumorphism';

const GITHUB_URL = "https://github.com/LeaRiglet/Morpho";

export default function Contact() {
  return (
    <div className="max-w-xl mx-auto my-12 p-8 bg-gray-200 rounded-3xl shadow-neumorphism">
      <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
      <p>
        Pour toute question, suggestion ou demande de collaboration, n'hésitez pas à nous contacter via notre page GitHub principale :
      </p>
      <Button
        as="a"
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        size="md"
        rounded
        className="mt-6"
      >
        Accéder au GitHub Morpho
      </Button>
      <p className="mt-8">
        <Link to="/tos" className="underline">Consulter les conditions d'utilisation</Link>
      </p>
    </div>
  );
}
