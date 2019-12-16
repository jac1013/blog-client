import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import ArticleBody from "./components/ArticleBody/ArticleBody";
import Footer from "./components/Footer-Comp/Footer.js";

function App() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <ArticleBody />
      <Footer />
    </React.Fragment>
  );
}

export default App;
