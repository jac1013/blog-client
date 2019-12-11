import React from 'react';

import './App.css';
import Button from 'react-bootstrap/Button';
import {Animated} from "react-animated-css";
import Header from "./components/Navigation/Header/Header";
import Footer from "./components/Footer.js";
import "./Footer.css";


function App() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
        <div className="App">
          <h1>React App</h1>
          <Button variant="danger">Hello</Button>
        </div>
      </Animated>
      <Footer />
    </React.Fragment>
  );
}

export default App;
