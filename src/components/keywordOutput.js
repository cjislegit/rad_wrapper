import React from 'react';

const KeywordOutput = props => {
  return (
    <div className="keywordOutput">
      <div>Wrapped Keywords</div>
      <textarea value={props.wrappedKeywords} />
    </div>
  );
};

export default KeywordOutput;
