import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classes from './MainBody.module.css';
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Title from "../../components/Title/Title";
import WrittenBy from "../../components/WrittenBy/WrittenBy";

const MainBody = props => {
  const [getPost, setGetPost] = useState([]);
  const articleId = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://api.codecarver.dev/article/${articleId}`);
      setGetPost(response.data.result)
    }
    fetchData();
  },[articleId])

  return(
    <main className={classes.Main}>
        <div key={getPost.id}>
          <Title fontSize="80px" title={getPost.title}></Title>
          <WrittenBy link={getPost.link} author={getPost.author} date={getPost.created}/>
          <ArticleBody source={getPost.body} />
        </div>
    </main>
  );
};

export default MainBody;
