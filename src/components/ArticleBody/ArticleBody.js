import React from 'react';
import MarkdownRenderer from '../MarkdownRenderer/MarkdownRenderer';

const ArticleBody = (props) => {
  return (
    <MarkdownRenderer source={props.source} />
  );
};

export default ArticleBody;
