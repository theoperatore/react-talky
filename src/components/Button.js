import React from 'react';

export default function Button(props) {
  const { className, onClick, ...otherProps } = props;

  return (
    <div
      className={`simple-button m0 mb1 p2 inline-block rounded border center ${className}`}
      onClick={onClick}
      { ...otherProps }
    >{props.children}</div>
  );
}
