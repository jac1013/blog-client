import React from 'react';

import classes from './MainBody.module.css';
import ArticleBody from "../../components/ArticleBody/ArticleBody";
import Title from "../../components/Title/Title";
import WrittenBy from "../../components/WrittenBy/WrittenBy";

const MainBody = () => (
  <main className={classes.Main}>
    <div>
      <Title fontSize="100px">Helloggggggggggggggggggggggggggg</Title>
      <WrittenBy link="https://www.youtube.com/watch?v=uuBETyA_yxc" author="@Joseph" date="January 14, 2017"/>
      <ArticleBody />
    </div>
  </main>
);

export default MainBody;