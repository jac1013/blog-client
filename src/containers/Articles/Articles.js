import React, {useState} from 'react';

import ArticlesItem from "../../components/ArticlesItem/ArticlesItem";
import Title from "../../components/Title/Title";
import classes from "./Articles.module.css";

const Articles = () => {
  const [posts] = useState([{
      id: '1',
      title: 'asdspgada',
      body: 'Quisque nec purus est. Vivamus non lorem nunc. Curabitur semper, nibh eu mollis finibus, metus eros dapibus orci, ullamcorper suscipit dolor ligula sed justo.',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '2',
      title: 'asdsada',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper gravida ligula. Maecenas aliquet urna eros, ac varius nunc pretium a.',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '3',
      title: 'asdsada',
      body: 'Curabitur fermentum consequat pretium. Curabitur placerat non erat gravida feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac.',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '4',
      title: 'asdsada',
      body: 'Mauris pellentesque malesuada justo. In eu felis nec nisi semper ultricies quis vitae ligula. Morbi sit amet mauris auctor, fermentum arcu in, varius nisl.',
      date: 'asdsad',
      link: '1'
    },
    {
      id: '5',
      title: 'asdsada',
      body: 'Praesent convallis, erat ut elementum vulputate, enim elit tincidunt mi, vitae mattis tortor augue et magna. Ut ut iaculis sapien. Duis sed accumsan augue.',
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
