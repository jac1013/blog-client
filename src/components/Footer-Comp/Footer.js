import React, { useState } from "react";
import classes from "../Footer-Comp/Footer.module.css";

function Footer() {
    const [blogData] = useState({
        blogName:"Codecarver.dev",
        copyRight: "Copyright ©2019",
        autor:"Joseph Arrieta",
        githubUrl:"http://github.com/jac1013",
        linkedinUrl:"http://linkedin.com/in/joseph-arrieta-81b8887b/w"
    })
    return(
    <footer className={classes.Footer}>
        <div className={classes.Blog}>
            <p>{blogData.blogName}</p>
        </div>
        <div>
            <p>Keep in touch via <a className={classes.Contact} href={blogData.githubUrl}>Github </a>
            or<a className={classes.Contact} href={blogData.linkedinUrl}> LinkedIn</a></p>
        </div>
        <div>
            <p>{blogData.copyRight} {blogData.author} All rights reserved.</p>
        </div>
        <div><p>Happy Coding!</p></div>
    </footer>
    );
}
  export default Footer;
