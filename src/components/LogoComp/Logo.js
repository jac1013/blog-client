import React from "react";
import {Link} from "react-router-dom";
import LogoImg from "../../assets/Logo1.png";
import classes from "../LogoComp/Logo.module.css";

const Logo = (props) => (
    <div className={classes.Logo}>
        <Link to="/">
            <img src={LogoImg} alt="Logo" />
        </Link>
    </div>
);

export default Logo;