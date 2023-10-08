import React from "react";
import "./App.css"; // Vous pouvez créer un fichier CSS personnalisé pour ajouter des styles supplémentaires

function App() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center text-white">
      {/* En-tête avec les liens */}
      <div className="text-4xl font-bold mb-8">
        <a href="#" className="mr-4">
          Projet
        </a>
        <a href="#">Contact</a>
      </div>
      {/* Votre nom au centre */}
      <h1 className="text-6xl font-bold mb-4">Votre Nom</h1>
      {/* Paragraphe de description */}
      <p className="text-lg max-w-xl text-center">
        Enthousiaste du développement web spécialisé dans React, Node.js et
        MongoDB. Passionné par la création de solutions innovantes et élégantes.
      </p>
    </div>
  );
}

export default App;
