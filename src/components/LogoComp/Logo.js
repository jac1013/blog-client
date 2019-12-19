import React from "react";
import {Link} from "react-router-dom";
import LogoImg from "../../assets/LogoImg.jpg";
import "../LogoComp/Logo.module.css";
import classes from "../LogoComp/Logo.module.css";

const Logo = (props) => (
    <div className={classes.Logo}>
        <Link to={props.link}>
            <img src={LogoImg} alt="Logo" />
        </Link>
    </div>
);

export default Logo;