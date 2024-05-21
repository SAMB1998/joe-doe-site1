import React from 'react';

const Contact = () => {
  return (
    <div>
      <div className="contact-hero">
        <img src="images/contact-bg.jpg" alt="Contact Hero Image" className="img-fluid" />
      </div>
      <div className="container mt-5">
        <h2 className="text-center">ME CONTACTER</h2>
        <p className="text-center">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
        <hr className="title-divider" />
        <div className="row">
          <div className="col-md-6">
            <h4>Formulaire de contact</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">Votre nom</label>
                <input type="text" className="form-control" id="name" placeholder="Entrez votre nom" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Votre adresse email</label>
                <input type="email" className="form-control" id="email" placeholder="Entrez votre email" />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Votre numéro de téléphone</label>
                <input type="tel" className="form-control" id="telephone" placeholder="Entrez votre numéro de téléphone" />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input type="text" className="form-control" id="subject" placeholder="Sujet de votre message" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Votre message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
          </div>
          <div className="col-md-6">
            <h4>Mes coordonnées</h4>
            <p>40 Rue Laure Diebold, 69009 Lyon, France<br />Téléphone : 06 20 30 40 50</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9923262108976!2d2.29229261567493!3d48.858373079287655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ef1d577487b%3A0x540f8132e8417c8a!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1597848345123" height="250" style={{ width: '100%', border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
