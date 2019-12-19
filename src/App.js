import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import ArticleBody from "./components/ArticleBody/ArticleBody";
import Footer from "./components/Footer-Comp/Footer.js";
import MainBody from "./components/MainBody/MainBody";


function App(props) {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <ArticleBody />
      <MainBody />
      <Footer />
    </React.Fragment>
  );
}

export default App;
