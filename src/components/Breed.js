import React from 'react';
import {Link} from 'react-router-dom';

const Breed = (props) => {
  return (
    <div>
      <Link to={`/dog/${props.name}`}>{props.name}</Link>
      {
        props.subBreeds.map((elem) => <Link to={`/dog/${props.name}/${elem}`} key={elem}>{elem}</Link>)
      }
    </div>
  );
}
export default Breed;
