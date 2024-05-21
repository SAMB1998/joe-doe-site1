// src/App.jsx (ou le fichier de routage principal)
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import Portfolio from './Portfolio';
import Blog from './Blog';
import Contact from './Contact';
import Legal from './Legal';
import GithubProfile from './GithubProfile';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/mentions-legales" component={Legal} />
        <Route path="/profil-github" component={GithubProfile} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;

