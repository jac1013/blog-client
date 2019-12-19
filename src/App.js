import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import MainBody from "./containers/MainBody/MainBody";
import Welcome from "./containers/Welcome/Welcome";
import AllArticles from "./containers/AllArticles/AllArticles";
import AboutMe from "./containers/AboutMe/AboutMe";

function App(props) {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <Route path="/article/:id" component={MainBody} />
      <Route path="/articles" component={AllArticles} />
      <Route path="/about-me" component={AboutMe} />
      <Route path="/" exact component={Welcome} />
      <Redirect to='/' />
    </React.Fragment>
  );
}

export default App;
