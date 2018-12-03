import React from 'react';
import {Link} from 'react-router-dom';

const Breed = (props) => (
  <div>
    <Link to='/dog/bulldog/'>{props.name}</Link>
    {
      props.subBreeds.map((elem) => <Link to='/dog' key = {elem}>{elem}</Link>)
    }
  </div>
);

export default Breed;
