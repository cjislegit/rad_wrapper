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
            <input type="checkbox" checked={props.exactChecked} />
            Exact
          </li>
          <li>
            <input type="checkbox" checked={props.phraseChecked} />
            Phrase
          </li>
          <li>
            <input type="checkbox" checked={props.broadChecked} />
            Broad
          </li>
        </ul>
        <button onClick={props.handleClick}>Submit</button>
      </div>
    </form>
  );
};
export default InputForm;
