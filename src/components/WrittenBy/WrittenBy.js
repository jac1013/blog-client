import React from 'react';
import classes from './WrittenBy.module.css';

const WrittenBy = (props) => {

  return (
    <p className={classes.WrittenBy}>Written by <a href='https://www.youtube.com/watch?v=m7Bc3pLyij0'>Joseph Arrieta</a>
     <a href={props.link} target="_blank" rel="noopener noreferrer" >{props.author}</a> on {props.date}</p>
  );
};

export default WrittenBy;
