import React from 'react';

const Blog = () => {
  return (
    <div>
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
    </div>
  );
};

export default Blog;
