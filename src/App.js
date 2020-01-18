import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Footer-Comp/Footer.js";
import MainBody from "./containers/MainBody/MainBody";
import Welcome from "./containers/Welcome/Welcome";
import Articles from "./containers/Articles/Articles";
import AboutMe from "./components/AboutMe/AboutMe.js";

function App(props) {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <Route path="/article/:id" component={MainBody} />
      <Route path="/articles" component={Articles} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/" exact component={Welcome} />
      <Redirect to='/' />
      <Footer />
    </React.Fragment>
  );
}

export default App;
