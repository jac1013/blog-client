import React from 'react';
import {Link} from 'react-router-dom';

import Title from "../Title/Title";
import classes from "./HomeItem.module.css";

const HomeItem = (props) => (
  <div className={classes.Article}>
    <Title fontSize="35px" title={props.title}></Title>
    <p>{props.body}</p>
    <Link to={props.link} className={classes.KeepReading}>Keep Reading →</Link>
  </div>
);

export default HomeItem;