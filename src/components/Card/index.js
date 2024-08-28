/**
 * @name Card
 * @desc Displays a UI Card element
 * 
 * @prop {string}     - default 'portrait' | 'landscape'}
 * @prop {int}        - max character length 
 */
// IMPORTS
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// COMPONENTS
import DivTextarea from "../DivTextarea";
import DivButton from "../DivButton";
export default function Card(props) {
  // STATES
  const [value, setValue] = useState("");
  const [text, setText] = useState([]);
  // MUTATIONS
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Notes"));
    if (data) {
      setText(data);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(text));
  }, [text]);
  // VARIABLES
  let { orientation, charLimit } = props;
  let charRemaining = charLimit - value.length;
  // EVENTLISTENER
  const setInputValue = (e) => {
    let el = e.target;
    let html = el.innerHTML;
    if (e.ctrlKey && e.keyCode == 13) {
      console.log('hello');
    }
    setValue(html);
  };
  const setState = () => {
    const newState = {
      id: uuidv4(),
      text: value
    }
    // prevState - https://reactjs.org/docs/hooks-reference.html
    // 
    setText((prevState) => [
      ...prevState, newState
    ]);
  };
  // EVENTHANDLER
  const onDivButtonClick = (e) => {
    setState();
  }

  

  // RENDERER
  return (
    <div className="card">
      <div className="card-header">
        <div className="grid action_bar">
          <div className="grid tiny_mce">
            <span className="character_count">{charRemaining} Left</span>
            <DivButton
              className="blah"
              aria-label="New List"
              data-texttip-text="New List"
              aria-disabled="false"
              tabIndex={0}
              onClick={onDivButtonClick}
            />
          </div>
          <button className="button-save" onClick={setState}>
            Save
          </button>
        </div>
      </div>
      <div className="card-body">
        <label htmlFor={uuidv4()}>Take a note...</label>
        <div aria-label="Note Composer"></div>
        <DivTextarea
          id={uuidv4()}
          data-length={charLimit}
          className="textarea"
          aria-label="Take a note.."
          tabIndex={0}
          onInput={setInputValue}
        />
      </div>

      <div className="card-footer">
        <progress max={charLimit} value={charRemaining}></progress>
      </div>
    </div>
  );
}