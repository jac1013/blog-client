import React, {useState} from 'react';

import classes from "./Home.module.css";
import HomeItem from "../../components/HomeItem/HomeItem";
import Title from "../../components/Title/Title";

const Home = () => {
  const [posts] = useState([{
      id: '1',
      title: 'asdspgada',
      body: 'Quisque nec purus est. Vivamus non lorem nunc. Curabitur semper, nibh eu mollis finibus, metus eros dapibus orci, ullamcorper suscipit dolor ligula sed justo.',
      link: '1'
    },
    {
      id: '2',
      title: 'asdspgada',
      body: 'In blandit placerat tempus. Morbi et diam lacinia, pretium lorem eget, tincidunt quam. Nunc venenatis est odio, tincidunt auctor lectus finibus vitae. Sed dignissim.',
      link: '1'
    },
    {
      id: '3',
      title: 'asdspgada',
      body: 'Quisque tristique eros nec nibh ultricies posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin accumsan nibh vitae ipsum maximus tincidunt.',
      link: '1'
    }]
  );

  const [welcome] = useState(['Mauris pellentesque malesuada justo. In eu felis nec nisi semper ultricies quis vitae ligula. Morbi sit amet mauris auctor, fermentum arcu in.']);

  let articles = null;

  if (posts.length >= 1) {
    articles = (
      <div className={classes.Articles}>
        {posts.map(post => (
          <HomeItem
            title={post.title}
            body={`${post.body.slice(0, 150)}...`}
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
        <Title fontSize="60px" title='Welcome!'></Title>
        <div className={classes.Welcome}>
          {welcome}
        </div>
      </div>
      <div className={classes.Title}>
        <Title fontSize="60px" title='Greatest Hits'></Title>
        <Title fontSize="30px" title='hand-picked list of best my articles'></Title>
      </div>
      <div>
        {articles}
      </div>
    </React.Fragment>
  );
};

export default Home;
