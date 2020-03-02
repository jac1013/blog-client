import React, {useState, useEffect} from 'react';
import axios from "axios";
import AboutMeContent from "../../components/AboutMeComponent/AboutMeContent.js";
import Title from "../../components/Title/Title";
import classes from "../AboutMeContainer/AboutMe.module.css";

function AboutMe() {
  const [aboutData, setAboutData] = useState({});
  const fetchData = async () => {
    const response = await axios.get('https://api.codecarver.dev/article/3');
    setAboutData(response.data.result);
    console.log(response);
  };

    useEffect(()=> {
      fetchData();
    },[]);

return(
    <div className={classes.About}>
        <div key={aboutData.id}>
          <Title fontSize="60px" title={aboutData.title}/>
          <AboutMeContent source={aboutData.body}/>
        </div>
    </div>
  );
  }
export default AboutMe;
