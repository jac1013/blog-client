import React, { useState } from "react";

import classes from "../Footer-Comp/Footer.module.css";

function Footer() {
    const [BlogName] = useState(["CodeMoulding.blog"])
    const [CopyrightYear] = useState(["Copyright ©2019"])
    const [Author] = useState (["Joseph Arrieta."])
    const [UrlOne] = useState (["http://github.com/jac1013"])
    const [UrlTwo] = useState (["http://linkedin.com/in/joseph-arrieta-81b8887b/w"])
    
    
    return(
    <footer className={classes.Footer}>
        <div className={classes.Blog}>
            <p>{BlogName}</p>
        </div>
        <div>
            <p>Keep in touch via <a className={classes.A} href={UrlOne}>Github</a> or <a className={classes.A} href={UrlTwo}>LinkedIn</a></p>
        </div>
        <div><p>{CopyrightYear} {Author} All rights reserved.</p></div>
        
        <div><p>Happy Coding!</p></div>
    </footer>
    );
}


  export default Footer;