import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1e1e1e' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">John Doe</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Accueil <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Réalisations</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

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

      {/* Footer */}
      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            {/* Informations de contact */}
            <div className="col-md-3">
              <p><strong>John Doe</strong></p>
              <p>40 Rue Laure Diebold<br />Lyon, France 69009</p>
              <p>Téléphone :  06 77 10 28 20</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer"><img src="icones/linkedin_social_5085.png" alt="LinkedIn" /></a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer"><img src="icones/Social-26-Github-Outline_icon-icons.com_66350.png" alt="GitHub" /></a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer"><img src="icones/social-twitter-outline_icon-icons.com_49997.png" alt="Twitter" /></a>
              </div>
            </div>
            {/* Liens utiles */}
            <div className="col-md-3">
              <p><strong>Liens utiles</strong></p>
              <ul className="list-unstyled">
                <li><a href="/">Accueil</a></li>
                <li><a href="/portfolio">À propos</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Me contacter</a></li>
                <li><a href="/mentions-legales">Mentions légales</a></li>
              </ul>
            </div>
            {/* Dernières réalisations */}
            <div className="col-md-3">
              <p><strong>Mes dernières réalisations</strong></p>
              <ul className="list-unstyled">
                <li>Fresh food</li>
                <li>Restaurant Akira</li>
                <li>Espace bien-être</li>
              </ul>
            </div>
            {/* Derniers articles */}
            <div className="col-md-3">
              <p><strong>Mes derniers articles</strong></p>
              <ul className="list-unstyled">
                <li>Coder son site en HTML/CSS</li>
                <li>Vendre ses produits sur le web</li>
                <li>Se positionner sur Google</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="sub-footer">
        © Designed by John Doe
      </div>
    </div>
  );
};

export default Services;
