import React from 'react';

const InputForm = props => {
  return (
    <form className="inputForm">
      <div className="inputFormLeft">
        <div>Enter Keywords</div>
        <textarea value={props.keywords} onChange={props.handleChange} />
      </div>
      <div className="inoutFomrRight">
        <ul>
          <li>
            <input type="checkbox" />
            Exact
          </li>
          <li>
            <input type="checkbox" />
            Phrase
          </li>
          <li>
            <input type="checkbox" />
            Broad
          </li>
        </ul>
        <button onClick={props.handleClick}>Submit</button>
      </div>
    </form>
  );
};
export default InputForm;
