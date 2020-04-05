import React, {useState} from 'react';
import AboutMeContent from "../../components/AboutMeComponent/AboutMeContent.js";
import Title from "../../components/Title/Title";
import classes from "../AboutMeContainer/AboutMe.module.css";
import Avatar from '../../assets/Picref.jpg'

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
     'Lorem ipsum dolor sit amet consectetur adipiscing, elit cubilia iaculis magnis tempor nostra dapibus, turpis\n'+
      'fames nullam mus blandit. Netus aenean volutpat magnis ligula morbi ad gravida, himenaeos lacus blandit\n'+
      'suscipit cursus eu, mi mattis luctus dapibus turpis proin. Lobortis commodo tempus porttitor justo aliquet\n'+
      'sociosqu placerat parturient morbi in, est phasellus cursus nam torquent felis habitasse cubilia conubia, facilisis a mus vitae eu purus venenatis non facilisi.\n\n'+
     'This is another Parragraph\n'+
     'Quis a rhoncus aenean penatibus nam tempus dis aptent sagittis nullam odio purus, integer vulputate\n'+
      'sapien luctus sed cubilia faucibus placerat sodales euismod fames, ac parturient metus mi etiam convallis at\n'+
      'aliquam venenatis ligula dui. At penatibus nascetur nisi facilisis tristique praesent nullam class, taciti ornare\n'+
      'sagittis risus etiam hendrerit parturient turpis vulputate, metus auctor id ad proin molestie ante.\n\n'+
      'This is the third Parragraph\n'+
     'Maecenas phasellus a risus facilisi vel aliquet nam dis, etiam imperdiet primis ultrices nulla nunc justo nisi vitae, malesuada himenaeos.\n'+
      'Tristique congue lacinia praesent potenti feugiat platea, himenaeos ultricies metus dapibus habitant. Mus nulla vel lobortis\n'+
      'fusce platea aptent cursus iaculis eget diam elementum molestie nibh risus turpis, porta ante commodo hendrerit sagittis duis.\n'+
      'vehicula mattis facilisis condimentum turpis etiam, leo scelerisque metus pulvinar nulla praesent cras, proin.\n\n'+
      '## Some fun facts\n\n'+
      'This is the last Parragraph\n'+
     'Dui ut fermentum neque ridiculus velit posuere vitae nibh egestas malesuada mus\n'+
     '* I Speak two Languages: Spanish and English.\n'+
     '* DotA is my favorite Video Game. I concider myself a "Pretty good" Player.\n'+
     '* I met programming at collage and was love at first sight.\n'+
     '* Read is my primary choice of recreation.\n'+
     '* In my spare time I like to go out to eat Sushi\n\n'+
     '## How you contact me?\n\n'+
     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n'+
     '* [GitHub](https:/github.com/jac1013) as @Jac1013\n'+
     '* [LinkedIn](https:/linkedin.com)',
    link: Avatar
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
            <img src={aboutMeInfo.link} alt="Avatar" />
            <AboutMeContent source={aboutMeInfo.body} />
        </div>
      ))}
    </div>
  );
  return aboutMe
};

export default AboutMe;
