import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import {Animated} from "react-animated-css";

function App() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
      <div className="App">
        <h1>React App</h1>
        <Button variant="danger">Hello</Button>
      </div>
    </Animated>
  );
}

export default App;
