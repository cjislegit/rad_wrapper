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
            <input
              name="exactChecked"
              type="checkbox"
              onClick={props.handleCheck}
              checked={props.exactChecked}
            />
            Exact
          </li>
          <li>
            <input
              name="phraseChecked"
              type="checkbox"
              onChange={props.handleCheck}
              checked={props.phraseChecked}
            />
            Phrase
          </li>
          <li>
            <input
              name="broadChecked"
              type="checkbox"
              onChange={props.handleCheck}
              checked={props.broadChecked}
            />
            Broad
          </li>
          <li>
            <input
              name="broadModifiedChecked"
              type="checkbox"
              onChange={props.handleCheck}
              checked={props.broadModifiedChecked}
            />
            Broad Modified
          </li>
        </ul>
        <button onClick={props.handleClick}>Submit</button>
      </div>
    </form>
  );
};
export default InputForm;
