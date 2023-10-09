import React from "react";
import "./App.css"; // Vous pouvez créer un fichier CSS personnalisé pour ajouter des styles supplémentaires

function App() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center items-center text-white">
      {/* En-tête avec les liens */}
      <div className="mb-8">
        <a
          href="https://github.com/Osiris8"
          className="mr-4 hover-link"
          target="_blank"
          rel="noreferrer"
        >
          Projects
        </a>
        <a href="mailto:miganosiris8@gmail.com" className="hover-link">
          Contact
        </a>
      </div>
      {/* Votre nom au centre */}
      <h1 className="text-4xl font-bold mb-4 ">Osiris Migan</h1>
      {/* Paragraphe de description */}
      <p className="text-lg max-w-xl text-center">
        Enthusiastic web developer, specializing in React, Node.js, and MongoDB.
        Passionate about creating innovative and elegant solutions.
      </p>
    </div>
  );
}

export default App;
