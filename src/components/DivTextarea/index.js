import React from 'react';

export default function DivTextarea(props) {
  let {
    id,
    'data-length': dataLength,
    'aria-label' : ariaLabel,
    tabIndex,
    onInput
  } = props;
  
  return (
    <div 
      id={id}
      data-length={dataLength}
      className="textarea"
      contentEditable="true"
      aria-multiline="true"
      aria-label={ariaLabel}
      tabIndex={tabIndex}
      spellCheck="true"
      onInput={onInput}
    >
    </div>
  ); 
}