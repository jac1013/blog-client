import React, { useState } from "react";
import classes from "../Footer-Comp/Footer.module.css";

function Footer() {
    const [blogName] = useState(["CodeMoulding.blog"])
    const [copyrightYear] = useState(["Copyright ©2019"])
    const [author] = useState (["Joseph Arrieta."])
    const [githubUrl] = useState (["http://github.com/jac1013"])
    const [linkedinUrl] = useState (["http://linkedin.com/in/joseph-arrieta-81b8887b/w"])
    return(
    <footer className={classes.Footer}>
        <div className={classes.Blog}>
            <p>{blogName}</p>
        </div>
        <div>
            <p>Keep in touch via <a className={classes.Contact} href={githubUrl}>Github</a> or <a className={classes.Contact} href={linkedinUrl}>LinkedIn</a></p>
        </div>
        <div>
            <p>{copyrightYear} {author} All rights reserved.</p>
        </div>
        <div><p>Happy Coding!</p></div>
    </footer>
    );
}
  export default Footer;
