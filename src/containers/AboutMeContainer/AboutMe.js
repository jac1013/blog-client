import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Title from "../../components/Title/Title";
import classes from "../AboutMeContainer/AboutMe.module.css";
import avatar from "../../assets/Picref.jpg";
import MarkdownRenderer from '../../components/MarkdownRenderer/MarkdownRenderer';

const dataUrl = "https://api.codecarver.dev/article/8";
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
          <div className={classes.Content} >
            <img className={classes.Avatar} src={avatar} alt="avatar" /> 
            <MarkdownRenderer source={aboutMeData.body} />
          </div>
        </div>
    </div>
  );
  return aboutMe
};
export default AboutMe;
