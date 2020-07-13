import React from 'react';
import {Link} from 'react-router-dom';

import Title from "../Title/Title";
import classes from "./ArticlesItem.module.css";

const ArticlesItem = (props) => (
  <div className={classes.Article}>
    <Title fontSize="25px" title={props.title}></Title>
    <p>Published on {props.date}</p>
    <p>{props.body}</p>
    <Link to={props.link} className={classes.KeepReading}>Keep Reading →</Link>
  </div>

);

export default ArticlesItem;
