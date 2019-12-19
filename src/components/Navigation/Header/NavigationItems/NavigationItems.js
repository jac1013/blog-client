import React from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/articles'>All Articles</NavigationItem>
    <NavigationItem link='/about-me'>About Me</NavigationItem>
  </ul>
);

export default NavigationItems;