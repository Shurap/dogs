import React from 'react';

const Breed = (props) => (
  <button onClick={() => props.handleClick()}>{props.name}</button>
);

export default Breed;

