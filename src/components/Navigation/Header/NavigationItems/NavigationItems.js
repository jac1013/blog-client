import React from 'react';

import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => (
  <ul>
    <NavigationItem link='/'>All Articles</NavigationItem>
    <NavigationItem link='/aboutme'>About Me</NavigationItem>
  </ul>
);

export default NavigationItems;