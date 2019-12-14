import React from 'react';

const Title = (props) => {
  let size = props.fontSize;

  const style = {
    paddingTop: '0',
    margin: '0',
    fontSize: size,
    fontWeight: '900',
  };

  return (
    <h1 style={style}>{props.children}</h1>
  );
};

export default Title;