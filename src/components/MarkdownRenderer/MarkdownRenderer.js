import React from 'react';
import marked from 'marked';
import sanitize from 'sanitize-html'

const MarkdownRenderer = props => {
  const toHtml = marked(props.source || "");
  const sanitized = sanitize(toHtml, {allowedTags: false, allowedAttributes: false})
  return <div dangerouslySetInnerHTML={{__html:sanitized}} />
};
export default MarkdownRenderer;
