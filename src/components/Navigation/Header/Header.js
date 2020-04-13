import React, {useState} from 'react';
import LogoImg from "../../../assets/LogoDef.png";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import Logo from "../../LogoComp/Logo.js";

const Header = () => {

  const [src] = useState([LogoImg])
  const [alt] = useState(['Logo-Blog'])
  return (
  <header className={classes.Header}>
    <Logo Link="/"
    src={src}
    alt={alt} />
    <NavigationItems></NavigationItems> 
  </header>
  );
}

export default Header;
