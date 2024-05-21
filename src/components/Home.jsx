import React from 'react';

const Home = () => {
  return (
    <div>
      <div className="hero-image">
        <div className="hero-text">
          <h1>Bonjour, je suis John Doe</h1>
          <p>Développeur web full stack</p>
          <a href="#about" className="btn btn-primary">En savoir plus</a>
        </div>
      </div>

      <section id="about" className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src="/images/àpropos2.jpg" alt="John Doe" className="img-fluid mb-3" style={{ maxWidth: '100%', height: '250px' }} />
          </div>
          <div className="col-md-6">
            <h2>À propos</h2>
            <p>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'intégrateur-développeur web avec CEF. Au cours de cette formation, j'ai acquis des bases solides pour travailler dans le domaine du développement web. Basé à Lyon, je suis à la recherche d'une alternance au sein d'une agence digitale pour consolider ma formation en développement web full stack. J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Mes compétences</h3>
            <div className="skill">HTML5 <div className="progress"><div className="progress-bar" style={{ width: '90%' }}></div></div></div>
            <div className="skill">CSS3 <div className="progress"><div className="progress-bar bg-success" style={{ width: '80%' }}></div></div></div>
            <div className="skill">JavaScript <div className="progress"><div className="progress-bar bg-warning" style={{ width: '70%' }}></div></div></div>
            <div className="skill">PHP <div className="progress"><div className="progress-bar bg-danger" style={{ width: '60%' }}></div></div></div>
            <div className="skill">React <div className="progress"><div className="progress-bar bg-info" style={{ width: '50%' }}></div></div></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
