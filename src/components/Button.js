import React from 'react';

export default function Button(props) {
  const { className, ...otherProps } = props;

  return <div
    className={`simple-button m0 mb1 p2 inline-block rounded border center ${className}`}
    { ...otherProps }
  >{props.children}</div>
}
