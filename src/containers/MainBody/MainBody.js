import React, {useState} from 'react';

import classes from './MainBody.module.css';
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Title from "../../components/Title/Title";
import WrittenBy from "../../components/WrittenBy/WrittenBy";

const MainBody = () => {
  const [posts] = useState([{
      id: '1',
      title: 'heloggggggggggggg',
      body: '# This is a header\n\nThis is a paragraph, Alias architecto aut, consectetur earum est minus nesciunts nulla omnis? A alias dolor dolore dolores incidunt\n' +
        '            sed voluptatum! At cumque dicta, exercitationem inventore modi natus obcaecati perferendis quidem? Ab,\n' +
        '                nam? Alias architecto aut, consectetur earum est minus nesciunt nulla omnis? A alias dolor dolore dolores incidunt\n' +
        '            sed voluptatum! At cumque dicta, exercitationem inventore modi natus obcaecati perferendis quidem? Ab,\n' +
        '                nam?',
      author: '@Joseph',
      date: 'January 14, 2017',
      link: 'https://www.youtube.com/watch?v=uuBETyA_yxc'
    }]
  );

  let article = null;

  article = (
    <main className={classes.Main}>
      {posts.map(post => (
        <div key={post.id}>
          <Title fontSize="100px" title={post.title}></Title>
          <WrittenBy link={post.link} author={post.author} date={post.date}/>
          <ArticleBody source={post.body} />
        </div>
      ))}
    </main>
  );
  return article
};

export default MainBody;
