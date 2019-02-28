import React from 'react';

const InputForm = () => {
  return (
    <form className="inputForm">
      <div className="inputFormRight">
        <textarea />
      </div>
      <div className="inoutFomrLeft">
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
        <button>Submit</button>
      </div>
    </form>
  );
};
export default InputForm;
