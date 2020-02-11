import React, {useState} from 'react';
import AboutMeContent from "../../components/AboutMeComponent/AboutMe.js";
import Title from "../../components/Title/Title";
import classes from "../AboutMeContainer/AboutMe.module.css";

const AboutMe = () => {
  const [aboutMeInfo] = useState([{
    id: '1',
    title: 'About Joseph Arrieta.',
    body: 'This is a Parragraph\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
     'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n'+
     'ex ea commodo consequat. Duis aute irure dolor.\n\n'+
     'In reprehenderit in voluptate velit esse cillum dolore eu fugiat\n'+
     'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n'+
     '## My story so far\n\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
      'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n'+
      'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n'+
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n'+
     'This is a Parragraph\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
      'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n'+
      'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n'+
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n'+
      'This is a Parragraph\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
      'et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip\n'+
      'ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat\n'+
      'nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n'+
      '## Some fun facts\n\n'+
      'This is a Parragraph\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
     '* I Speak two Languages: Spanish and English.\n'+
     '* DotA is my favorite Video Game. I concider myself a "Pretty good" Player.\n'+
     '* I met programming at collage and was love at first sight.\n'+
     '* Read is my primary choice of recreation.\n'+
     '* In my spare time I like to go out to eat Sushi\n\n'+
     '## How you contact me?\n\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
     '* [GitHub](https:/github.com/jac1013) as @Jac1013\n'+
     '* [LinkedIn](https:/linkedin.com)',
    link: 'https://avatars2.githubusercontent.com/u/5025920?s=400&v=4'
    }]
  );

    let aboutMe = null;

  aboutMe = (
    <div className={classes.About}>
      {aboutMeInfo.map(aboutMeInfo => (
        <div key={aboutMeInfo.id}>
          <div>
            <Title fontSize="60px" title={aboutMeInfo.title}></Title>
          </div>
            <img img src={aboutMeInfo.link} alt="Profile" />
            <AboutMeContent source={aboutMeInfo.body} />
        </div>
      ))}
    </div>
  );
  return aboutMe
};

export default AboutMe;