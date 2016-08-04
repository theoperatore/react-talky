import React from 'react';

export default function Item(props) {
  const { desc } = props;

  return <li className='mb1'>{desc}</li>
}
