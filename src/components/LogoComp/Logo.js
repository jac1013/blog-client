import React from "react";
import {Link} from "react-router-dom";
import classes from "../LogoComp/Logo.module.css";
 
const Logo = props => {
  return (
    <div className={classes.Logo}>
      <Link to="/"> 
        <img src={props.src} alt={props.alt} />
      </Link>
    </div>
  );
};
 
export default Logo;