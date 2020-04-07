import React, {useState} from 'react';
import AboutMeContent from "../../components/AboutMeComponent/AboutMeContent.js";
import Title from "../../components/Title/Title";
import classes from "../AboutMeContainer/AboutMe.module.css";
import InfoAboutMe from '../AboutMeContainer/InfoAboutMe.json'


const AboutMe = () => {
  const [aboutMeInfo] = useState(InfoAboutMe)

    let aboutMe = null;
    
  aboutMe = (
    <div className={classes.About}>
      {aboutMeInfo.map(aboutMeInfo => (
        <div key={aboutMeInfo.id}>
          <div>
            <Title fontSize="60px" title={aboutMeInfo.title}></Title>
          </div>
            <img src={aboutMeInfo.link} alt="Profile" />
            <AboutMeContent source={aboutMeInfo.content} />
        </div>
      ))}
    </div>
  );
  return aboutMe
};

export default AboutMe;
