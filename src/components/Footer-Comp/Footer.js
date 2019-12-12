import React from "react";
import classes from "./Footer.module.css"

class Footer extends React.Component{
    render() {
        return(
            <footer className={classes.Footer}>
                <div>
                    <p>Blog.com</p>
                    <p>Copyright ©2014-2019 Joseph Arrieta. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}


export default Footer;