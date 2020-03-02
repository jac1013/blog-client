import React from "react";
import {Link} from "react-router-dom";
import classes from "../LogoComp/Logo.module.css";

const Logo = props => {
  return (
  <div>
    <Link to="/"><img className={classes.Logo} src={props.src} alt={props.alt} /></Link>
  </div>
  );
};
export default Logo;
