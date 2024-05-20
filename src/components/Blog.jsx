import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
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

      <div className="blog-hero">
        <img src="images/blog3.jpg" alt="Blog Hero Image" className="img-fluid" />
      </div>

      <div className="container">
        <div className="blog-header">
          <h1 className="blog-title">BLOG</h1>
          <p className="blog-description">Retrouvez ici quelques articles sur le développement web.</p>
          <hr className="blog-divider" />
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="images/coder.jpg" className="card-img-top" alt="Coder son site en HTML/CSS" />
                <div className="card-body">
                  <h5 className="card-title">Coder son site en HTML/CSS</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="images/croissance.jpg" className="card-img-top" alt="Vendre ses produits sur le web" />
                <div className="card-body">
                  <h5 className="card-title">Vendre ses produits sur le web</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="images/google.jpg" className="card-img-top" alt="Se positionner sur Google" />
                <div className="card-body">
                  <h5 className="card-title">Se positionner sur Google</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-4">
              <div className="card">
                <img src="images/screens.jpg" className="card-img-top" alt="Coder en responsive design" />
                <div className="card-body">
                  <h5 className="card-title">Coder en responsive design</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="images/seo.jpg" className="card-img-top" alt="Techniques de référencement" />
                <div className="card-body">
                  <h5 className="card-title">Techniques de référencement</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="images/technos.png" className="card-img-top" alt="Apprendre à coder" />
                <div className="card-body">
                  <h5 className="card-title">Apprendre à coder</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">Lire la suite</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <p><strong>John Doe</strong></p>
              <p>40 Rue Laure Diebold<br />Lyon, France 69009</p>
              <p>Téléphone :  06 22 10 28 20</p>
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

export default Blog;
