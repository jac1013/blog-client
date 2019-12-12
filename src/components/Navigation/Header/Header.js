import React from 'react';

import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.Header}>
    <NavigationItems></NavigationItems>
  </header>
);

export default Header