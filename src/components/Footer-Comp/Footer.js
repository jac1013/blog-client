import React from "react";

import classes from "../Footer-Comp/Footer.module.css";

const Footer = () => (
    <footer className={classes.Footer}>
        <div className={classes.Blog}>
            <p>CodeMoulding.blog</p>
        </div>
        <div>
            <p>Keep in touch via <a className={classes.A} href="http://github.com/jac1013">Github</a> or <a className={classes.A} href="http://linkedin.com/in/joseph-arrieta-81b8887b/w">LinkedIn</a></p>
        </div>
        <div><p>Copyright ©2019 Joseph Arrieta. All rights reserved.</p></div>
        
        <div><p>Happy Coding!</p></div>
    </footer>
  );


  export default Footer;