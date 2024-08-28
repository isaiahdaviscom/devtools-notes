import React from 'react';

export default function DivButton(props) {
  let {
    className,
    "aria-label": ariaLabel,
    "aria-disabled": ariaDisabled,
    tabIndex,
    onClick
  } = props;
  
  return <div
    className={className}
    role="button"
    aria-label={ariaLabel}
    aria-disabled={ariaDisabled}
    tabIndex={0}
    onClick={onClick}
  ></div>;
}
