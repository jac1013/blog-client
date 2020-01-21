import React from 'react';
import ReactMarkdown from "react-markdown";

const ArticleBody = (props) => {
  return (
    <ReactMarkdown source={props.source} />
  );
};

export default ArticleBody;
