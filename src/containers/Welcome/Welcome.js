import React from 'react';
import {Link} from 'react-router-dom';

const Welcome = () => (
  <div>
    <h1>Welcome!</h1>
    <p><Link to="article/1">Go to Article 1</Link></p>
  </div>
);

export default Welcome;