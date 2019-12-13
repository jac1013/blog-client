import React from 'react';
import ReactMarkdown from "react-markdown";

const ArticleBody = () => {
  const input = '# This is a header\n\nAnd this is a paragraph';

  return (
    <ReactMarkdown source={input} />
  );
};

export default ArticleBody;