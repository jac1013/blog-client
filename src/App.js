import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
    <Router>
      <div>
        <Header />
        <Route
          render={({ location }) => (
            <TransitionGroup className="container">
              <CSSTransition
                appear={true}
                key={location.key}
                timeout={{ enter: 400, exit: 200 }}
                classNames="fade"
              >
          <div className="inner">
          <Switch>
            <Route path="/article/:id" component={MainBody} />
            <Route path="/articles" component={Articles} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/" exact component={Home} />

            <Route path="" component={NotFound} />
          </Switch>
          </div>
          </CSSTransition>
          </TransitionGroup>
          )}
          />
      </div>
      <Footer />
  </Router>
  );
}

export default App;
