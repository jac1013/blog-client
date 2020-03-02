import React, { useState } from "react";
import classes from "../Footer-Comp/Footer.module.css";

function Footer() {
    const [footerData] = useState([{
        "id": "1",
        "name": "codecarver.dev",
        "githuburl": "https://githu.com/jac1013",
        "linkedinurl": "https://linkedin.com/in/joseph-arrieta-81b8887b/w",
        "copyright": "Copyright ©2019.",
        "author": "Joseph Arrieta."

    }]);
    let footerInfo = null;
    footerInfo = (
        <footer>
            {footerData.map(footerData =>(
                <footer key={footerData.id} className={classes.Footer}>
                    <div className={classes.Webname}>
                        <p>{footerData.name}</p>
                    </div>
                    <div>
                        <p>Keep in Touch via <a className={classes.KeepInTouch} href={footerData.githuburl}>GitHub</a> or <a className={classes.KeepInTouch} href={footerData.linkedinurl}>LinkedIn</a></p>
                    </div>
                    <div>
                        <p>{footerData.copyright} {footerData.author}</p>
                    </div>
                    <div>
                        <p>Happy Coding!</p>
                    </div>
                </footer>
            ))}
        </footer>
    );
    return footerInfo;
};
export default Footer;
/*function Footer() {
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

  export default Footer;*/
