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
                        <p>Keep in Touch via <a className={classes.KeepInTouch} href={footerData.githuburl}>GitHub </a> 
                            or <a className={classes.KeepInTouch} href={footerData.linkedinurl}>LinkedIn</a>
                        </p>
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
}
export default Footer;
