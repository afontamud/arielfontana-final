import React from 'react';

const Hero = ({ title }) => {
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>Hysteria Shop</h1>
          <h3>Mira nuestro nuevo Drop #RUIDO</h3>
          <p>A favor del ruido, en contra del silencio</p>
          <button className="button-primary">Comprar</button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
