import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import ArticleBody from "./components/ArticleBody/ArticleBody";
import Title from "./components/Title/Title";

function App(props) {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <Title fontSize="100px">Hello</Title>
      <ArticleBody />
    </React.Fragment>
  );
}

export default App;
