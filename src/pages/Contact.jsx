import React from "react";

const GITHUB_URL = "https://github.com/LeaRiglet/Morpho";

export default function Contact() {
  return (
    <div className="contact-page" style={{ maxWidth: 600, margin: "2rem auto", padding: "2rem", background: "#f9f9f9", borderRadius: 8, boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
      <h2>Contactez-nous</h2>
      <p>
        Pour toute question, suggestion ou demande de collaboration, n'hésitez pas à nous contacter via notre page GitHub principale :
      </p>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "1.5rem",
          padding: "0.75rem 1.5rem",
          background: "#24292f",
          color: "#fff",
          borderRadius: 4,
          textDecoration: "none",
          fontWeight: "bold",
          fontSize: "1.1rem",
          boxShadow: "0 1px 4px rgba(36,41,47,0.12)"
        }}
      >
        Accéder au GitHub Morpho
      </a>
    </div>
  );
}
