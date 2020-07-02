import React from 'react';

const Title = (props) => {
  let size = props.fontSize;

  const style = {
    paddingTop: '0',
    letterSpacing: '0.04em',
    margin: '0',
    fontSize: size,
    fontWeight: '900',
  };

  return (
    <h1 style={style}>{props.title}</h1>
  );
};

export default Title;