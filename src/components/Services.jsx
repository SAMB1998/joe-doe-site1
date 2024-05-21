import React from 'react';

const Services = () => {
  return (
    <div>
      {/* Hero Image for Services Page */}
      <div className="services-hero">
        <img src="images/blog3.jpg" alt="Services Hero Image" className="img-fluid" />
      </div>

      <div className="container my-5">
        <div className="service-heading text-center">
          <h2>MON OFFRE DE SERVICES</h2>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <hr className="title-divider" />
        </div>

        {/* Services Offered */}
        <div className="container my-5">
          <div className="row text-center">
            {/* UX Design */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-palette fa-2x text-primary mb-3"></i>
                  <h5 className="card-title">UX Design</h5>
                  <p className="card-text">L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
                </div>
              </div>
            </div>
            {/* Développement Web */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-code fa-2x text-primary mb-3"></i>
                  <h5 className="card-title">Développement Web</h5>
                  <p className="card-text">Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</p>
                </div>
              </div>
            </div>
            {/* Référencement */}
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fas fa-search fa-2x text-primary mb-3"></i>
                  <h5 className="card-title">Référencement</h5>
                  <p className="card-text">Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
