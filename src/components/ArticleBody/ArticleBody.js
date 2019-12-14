import React from 'react';
import ReactMarkdown from "react-markdown";

const ArticleBody = () => {
  const input = '# This is a header\n\nThis is a paragraph, Alias architecto aut, consectetur earum est minus nesciunt nulla omnis? A alias dolor dolore dolores incidunt\n' +
    '            sed voluptatum! At cumque dicta, exercitationem inventore modi natus obcaecati perferendis quidem? Ab,\n' +
    '                nam? Alias architecto aut, consectetur earum est minus nesciunt nulla omnis? A alias dolor dolore dolores incidunt\n' +
    '            sed voluptatum! At cumque dicta, exercitationem inventore modi natus obcaecati perferendis quidem? Ab,\n' +
    '                nam?';

  return (
    <ReactMarkdown source={input} />
  );
};

export default ArticleBody;