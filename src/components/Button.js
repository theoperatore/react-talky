import React from 'react';

export default function Button(props) {
  const { className, onClick, disabled, ...otherProps } = props;

  function handleClick(...args) {
    if (!disabled) {
      onClick.apply(null, args);
    }
  }

  return (
    <div
      className={`simple-button m0 mb1 p2 inline-block rounded border center ${className} ${disabled ? 'bg-black' : 'bg-green'}`}
      onClick={handleClick}
      { ...otherProps }
    >{props.children}</div>
  );
}
