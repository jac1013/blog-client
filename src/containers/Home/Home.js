import React, {useState, useEffect} from 'react';
import axios from 'axios';
import classes from "./Home.module.css";
import HomeItem from "../../components/HomeItem/HomeItem";
import Title from "../../components/Title/Title";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [welcome] = useState(['Mauris pellentesque malesuada justo. In eu felis nec nisi semper ultricies quis vitae ligula. Morbi sit amet mauris auctor, fermentum arcu in.']);

  const fetchData = async () => {
    const response = await axios.get('https://api.codecarver.dev/articles');
    setPosts(response.data.result);
  }

    useEffect(() =>{
      fetchData();
    },[])

  let articles = null;

  if (posts.length >= 1) {
    articles = (
      <div className={classes.Articles}>
        {posts.map(post => (
          <HomeItem
            title={post.title}
            body={`${post.body.slice(0, 154)}...`}
            link={`/article/${post.id}/${post.url}`}
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
        <Title fontSize="60px" title='Welcome!'></Title>
        <div className={classes.Welcome}>
          {welcome}
        </div>
      </div>
      <div className={classes.Title}>
        <Title fontSize="60px" title='Greatest Hits'></Title>
        <Title fontSize="30px" title='hand-picked list of best my articles'></Title>
      </div>
      <div className={classes.Content}>
        {articles}
      </div>
    </React.Fragment>
  );
};

export default Home;
