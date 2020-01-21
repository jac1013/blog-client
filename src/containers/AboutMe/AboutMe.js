import React from 'react';
import AboutMeContent from "./AboutMe.js";
import Title from "../../components/Title/Title";
import classes from "./AboutMe.module.css";
import PictureRef from "../../assets/Picref.jpg";
const AboutMe = () => (
  <div className={classes.About}>
    <Title fontSize="60px" title='About Joseph Arrieta.'></Title>
    <div>
      <img img src={PictureRef} alt="Profile" />
      <AboutMeContent />
    </div>
  </div>
);

export default AboutMe;
