import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import ArticleBody from "./components/ArticleBody/ArticleBody";

function App() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <ArticleBody />
    </React.Fragment>
  );
}

export default App;
