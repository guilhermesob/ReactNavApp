import React from 'react';

const Bio = () => {
  return (
    <section>
      <h2>Sobre Mim</h2>
      <p>Uma breve descrição sobre você e suas habilidades.</p>
      <div className="social-links">
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        {/* Adicione outros links de redes sociais aqui */}
      </div>
    </section>
  );
};

export default Bio;
