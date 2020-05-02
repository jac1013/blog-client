import React, {useState, useEffect} from 'react';
import axios from 'axios'
import AboutMeContent from "../../components/AboutMeComponent/AboutMeContent.js";
import Title from "../../components/Title/Title";
import classes from "../AboutMeContainer/AboutMe.module.css";

const dataUrl = "https://api.codecarver.dev/article/3";
const AboutMe = () => {
  const [aboutMeData, setAboutMeData] = useState([])
  const fetchData = async () => {
    const response = await axios.get(dataUrl);
    setAboutMeData(response.data.result)
  }
    useEffect(()=> {
      fetchData();
    },[])

    let aboutMe = null;

  aboutMe = (
    <div className={classes.About}>
        <div key={aboutMeData.id}>
          <div>
            <Title fontSize="60px" title={aboutMeData.title}></Title>
          </div>
            <AboutMeContent source={aboutMeData.body} />
        </div>
    </div>
  );
  return aboutMe
};
export default AboutMe;
