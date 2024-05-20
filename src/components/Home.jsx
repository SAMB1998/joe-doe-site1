import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
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
            <p>Passionné par l'informatique et les nouvelles technologies...</p>
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

<footer className="footer bg-light">
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                <p><strong>John Doe</strong></p>
                <p>40 Rue Laure Diebold<br />Lyon, France 69009</p>
                <p>Téléphone :  06 77 10 28 20</p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin_social_5085.png" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                        <img src="/images/Social-26-Github-Outline_icon-icons.com_66350.png" alt="GitHub" />
                    </a>
                    <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                        <img src="/images/social-twitter-outline_icon-icons.com_49997.png" alt="Twitter" />
                    </a>
                </div>
            </div>
            <!-- Autres colonnes du pied de page -->
        </div>
    </div>
</footer>
<div className="sub-footer">
    © Designed by John Doe
</div>


      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
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
      </footer>
      <div className="sub-footer">
        © Designed by John Doe
      </div>
    </div>
  );
};

export default Home;
