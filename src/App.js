import React from 'react';

import './App.css';
import Header from "./components/Navigation/Header/Header";

function App() {
  console.log(process.env.REACT_APP_API_URL);

  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}

export default App;
