import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Footer-Comp/Footer.js";
import MainBody from "./containers/MainBody/MainBody";
import Home from "./containers/Home/Home";
import Articles from "./containers/Articles/Articles";
import AboutMe from "./containers/AboutMeContainer/AboutMe.js";
import NotFound from './containers/PageNotFound/NotFound.js';

function App(props) {

  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/article/:id" component={MainBody} />
        <Route path="/articles" component={Articles} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/" exact component={Home} />

        <Route path="" component={NotFound} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
