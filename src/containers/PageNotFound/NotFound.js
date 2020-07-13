import React from 'react'
import { Link } from 'react-router-dom';
import Classes from './NotFound.module.css';
import Logo from  '../../assets/codecarver.jpg';
  
const NotFound = () =>
    <div className={Classes.Error404}>
        <img src={Logo} alt="logo" /> <h1>ERROR 404</h1>
        <h3>page not found</h3>
        <p>We are sorry but the page you are looking for does not exist or has been removed.</p>
        <Link className={Classes.HomeLink} to="/">Go to Home</Link>
    </div>

export default NotFound;