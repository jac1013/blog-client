import React from 'react';

import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import Logo from "../../LogoComp/Logo.js";

const Header = () => (
  <header className={classes.Header}>
    <Logo Link="/"></Logo>
    <NavigationItems></NavigationItems> 
  </header>
);

export default Header;