import React from 'react';

const Legal = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center">MENTIONS LÉGALES</h2>
      <hr className="title-divider" />
      <div id="legalAccordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Éditeur du site
              </button>
            </h5>
          </div>
          <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#legalAccordion">
            <div className="card-body">
              <strong>John Doe</strong><br />
              40 Rue Laure Diebold<br />
              69009 Lyon, France<br />
              📞 06 22 10 28 20<br />
              📧 JohnDoe@gmail.com
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Hébergeur
              </button>
            </h5>
          </div>
          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#legalAccordion">
            <div className="card-body">
              <strong>Always Data</strong><br />
              91 rue du Faubourg Saint Honoré<br />
              75008 Paris<br />
              <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Crédits
              </button>
            </h5>
          </div>
          <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#legalAccordion">
            <div className="card-body">
              Site développé par Aissam Bellouch, étudiant du CEF.<br />
              Les images libres de droit sont issues du site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;
