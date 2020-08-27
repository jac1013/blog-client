import React from 'react';
import {Link} from 'react-router-dom';

import Title from "../Title/Title";
import classes from "./HomeItem.module.css";
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';

const HomeItem = (props) => (
  <div className={classes.Article}>
    <Title fontSize="1.5em" title={props.title}></Title>
    <MarkdownRenderer source={props.body} />
    <Link to={props.link} className={classes.KeepReading}>Keep Reading →</Link>
  </div>
);

export default HomeItem;
