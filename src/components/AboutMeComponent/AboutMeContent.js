import React from 'react';
import ReactMarkdown from 'react-markdown';

const AboutMeContent = (props) => {
     return (
        <ReactMarkdown source={props.source} />
    );
  };
export default AboutMeContent;
