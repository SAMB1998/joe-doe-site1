import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <p><strong>John Doe</strong></p>
            <p>40 Rue Laure Diebold<br />69009 Lyon, France</p>
            <p>Téléphone : 06 77 10 28 20</p>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin_social_5085.png" alt="LinkedIn" className="social-icon" />
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <img src="/images/Social-26-Github-Outline_icon-icons.com_66350.png" alt="GitHub" className="social-icon" />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                <img src="/images/social-twitter-outline_icon-icons.com_49997.png" alt="Twitter" className="social-icon" />
              </a>
            </div>
          </div>
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
          <div className="col-md-3">
            <p><strong>Mes dernières réalisations</strong></p>
            <ul className="list-unstyled">
              <li>Fresh food</li>
              <li>Restaurant Akira</li>
              <li>Espace bien-être</li>
            </ul>
          </div>
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
      <div className="sub-footer bg-dark text-white text-center py-2">
        © Designed by John Doe
      </div>
    </footer>
  );
};

export default Footer;

