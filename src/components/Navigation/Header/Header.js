import React, {useState} from 'react';
import LogoImg from "../../../assets/Logo.png";
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import Logo from "../../LogoComp/Logo.js";

const Header = () => {

  const [useSrc] = useState([LogoImg])
  const [useAlt] = useState(['Logo-Blog'])
  
  return (
  <header className={classes.Header}>
    <Logo Link="/"
    src={useSrc}
    alt={useAlt} />
    <NavigationItems></NavigationItems> 
  </header>
  );
}

export default Header;