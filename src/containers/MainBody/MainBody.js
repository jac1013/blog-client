import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classes from './MainBody.module.css';
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Title from "../../components/Title/Title";
import WrittenBy from "../../components/WrittenBy/WrittenBy";

const MainBody = props => {
  const [getId, setGetId] = useState([]);
  let articleId = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.codecarver.dev/article/${articleId}`);
      setGetId(response.data.result)
    }
    fetchData();
  },[articleId])

  return(
    <main className={classes.Main}>
        <div key={getId.id}>
          <Title fontSize="100px" title={getId.title}></Title>
          <WrittenBy link={getId.link} author={getId.author} date={getId.created}/>
          <ArticleBody source={getId.body} />
        </div>
    </main>
  );
  
};

export default MainBody;