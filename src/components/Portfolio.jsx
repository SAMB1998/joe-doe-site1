import React from 'react';

const Portfolio = () => {
  return (
    <div>
      {/* Hero Image for Portfolio Page */}
      <div className="portfolio-hero">
        <img src="images/blog3.jpg" alt="Portfolio Hero Image" className="img-fluid" />
      </div>
      <div className="container my-5">
        <h2 className="text-center mb-2">PORTFOLIO</h2>
        <p className="text-center">Voici quelques-unes de mes réalisations.</p>
        <hr className="title-divider" />
        <div className="row">
          {/* Projet Fresh Food */}
          <div className="col-md-4">
            <div className="card">
              <img src="images/fresh-food.jpg" className="card-img-top" alt="Fresh food" />
              <div className="card-body">
                <h5 className="card-title">Fresh food</h5>
                <p className="card-text">Réalisation d'un site avec commande en ligne.</p>
                <a href="#" className="btn btn-primary">Voir</a>
                <p className="small mt-2">Site réalisé avec PHP et MySQL</p>
              </div>
            </div>
          </div>
          {/* Projet Restaurant Akira */}
          <div className="col-md-4">
            <div className="card">
              <img src="images/restaurant-japonais.jpg" className="card-img-top" alt="Restaurant Akira" />
              <div className="card-body">
                <h5 className="card-title">Restaurant Akira</h5>
                <p className="card-text">Réalisation d'un site vitrine.</p>
                <a href="#" className="btn btn-primary">Voir</a>
                <p className="small mt-2">Site réalisé avec WordPress</p>
              </div>
            </div>
          </div>
          {/* Projet Espace bien-être */}
          <div className="col-md-4">
            <div className="card">
              <img src="images/espace-bien-etre.jpg" className="card-img-top" alt="Espace bien-être" />
              <div className="card-body">
                <h5 className="card-title">Espace bien-être</h5>
                <p className="card-text">Réalisation d'un site vitrine pour un praticien de bien-être.</p>
                <a href="#" className="btn btn-primary">Voir</a>
                <p className="small mt-2">Site réalisé en HTML/CSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
