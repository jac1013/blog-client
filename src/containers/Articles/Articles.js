import React, {useState} from 'react';

import ArticlesItem from "../../components/ArticlesItem/ArticlesItem";
import Title from "../../components/Title/Title";
import classes from "./Articles.module.css";

const Articles = () => {
  const [posts, setPosts] = useState([{
      id: '1',
      title: 'asdspgada',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '2',
      title: 'asdsada',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '3',
      title: 'asdsada',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '4',
      title: 'asdsada',
      body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '5',
      title: 'asdsada',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      date: 'asdsad',
      link: '1'
    }]
  );

  let articles = null;

  if (posts.length >= 1) {
    articles = (
      <div className={classes.Articles}>
        {posts.map(post => (
          <ArticlesItem
            title={post.title}
            body={post.body.slice(0, 200) + '...'}
            date={post.date}
            link={"/article/" + post.link}
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


