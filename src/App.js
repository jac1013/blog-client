import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import ArticleBody from "./components/ArticleBody/ArticleBody";
import Title from "./components/Title/Title";
import WrittenBy from "./components/WrittenBy/WrittenBy";

function App(props) {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <Title fontSize="100px">Hello</Title>
      <WrittenBy link="https://www.youtube.com/watch?v=uuBETyA_yxc" author="@Joseph" date="January 14, 2017"/>
      <ArticleBody />
    </React.Fragment>
  );
}

export default App;
