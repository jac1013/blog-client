import React, {useState} from 'react';
import NavigationItems from "./NavigationItems/NavigationItems";
import classes from "./Header.module.css";
import WebLogo from '../../../assets/Logo.png'
import Logo from "../../LogoComp/Logo.js";

const Header = () => {

  const [logo] = useState({
    "id": "1",
    "url": WebLogo,
    "alt": "Blog-Logo"
});
  return(
    <header>
        <header key={logo.id} className={classes.Header}>
          <Logo src={logo.url} alt={logo.alt} />
          <NavigationItems />
        </header>
  </header>
);

};

export default Header;