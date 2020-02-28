import React, { useState } from "react";
import classes from "../Footer-Comp/Footer.module.css";

function Footer() {
    const [blogFooter] = useState([{
        id: "1",
        name: "codemoulding.blog",
        author: "Joseph Arrieta",
        githuburl: "https://github.com/jac1013",
        linkedinurl: "http://linkedin.com/in/joseph-arrieta-81b8887b/w",
        copyright: "Copyright ©2019"

    }]
    );

return(
    <footer>
        {blogFooter.map(blogFooter =>(
                <div key={blogFooter.id} className={classes.Footer}>
                    <div className={classes.Blog}>{blogFooter.name}</div>
                    <div className={classes.Bugged}>
                        <p>Keep in touch via <a className={classes.Contact} href={blogFooter.githuburl}>GitHub</a> or <a className={classes.Contact} href={blogFooter.linkedinurl}>LinkedIn</a></p>
                    </div>
                    <div>
                        <p>{blogFooter.copyright} {blogFooter.author} All right reserved.</p>
                    </div>
                    <div><p>HappyCoding!</p></div>
                </div>
            ))}
    </footer>
    );
};
export default Footer;