import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ArticlesItem from "../../components/ArticlesItem/ArticlesItem";
import Title from "../../components/Title/Title";
import classes from "./Articles.module.css";
import Loader from "../../components/LoaderComponent/Loader.js";

const Articles = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('https://api.codecarver.dev/articles');
    setPosts(response.data.result);
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
            body={`${post.body.slice(0, 155)}...`}
            date={post.created}
            link={`/article/${post.id}`}
            key={post.id} />
        ))}
      </div>

    );
  } else {
    articles = (
      <div className={classes.Empty}>
        <Loader />
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
