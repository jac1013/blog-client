import React, {useState, useEffect} from 'react';
import axios from 'axios';

import ArticlesItem from "../../components/ArticlesItem/ArticlesItem";
import Title from "../../components/Title/Title";
import classes from "./Articles.module.css";

const Articles = () => {
  const [posts, setPosts] = useState([]);
  const fetchData = async () => {
    const response = await axios.get('https://api.codecarver.dev/articles');
    setPosts(response.data.result);
    console.log(response)
  }
    useEffect( () => {
      fetchData();
    }, []);

  let articles = null;

  if (posts.length >= 1) {
    articles = (
      <div className={classes.Articles}>
        {posts.map(post => (
          <ArticlesItem
            title={post.title}
            body={`${post.body.slice(0, 150)}...`}
            date={post.date}
            link={`/article/${post.link}`}
            key={post.id} />
        ))}
      </div>
    );
  } else {
    articles = (
      <div className={classes.Empty}>
        <h1>Nothing has been found!</h1>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className={classes.Title}>
        <Title fontSize="70px" title='All articles'></Title>
        <Title fontSize="40px" title='from latest to oldest'></Title>
      </div>
      <div>
        {articles}
      </div>
    </React.Fragment>
  );
};

export default Articles;
