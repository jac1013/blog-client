import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";
import MainBody from "./components/MainBody/MainBody";

function App(props) {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <MainBody />
    </React.Fragment>
  );
}

export default App;
