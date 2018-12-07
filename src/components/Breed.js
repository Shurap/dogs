import React from 'react';
import {Link} from 'react-router-dom';

const Breed = (props) => {

  const styleBreed = {
    backgroundColor: '#FFFFFF',
    lineHeight: '40px',
    textAlign: 'center',
    margin: '20px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: '2px',
    width: '150px',
    height: '50'
  }
  const styleSubBreed = {
    backgroundColor: '#F4F4F4',
    lineHeight: '40px',
    textAlign: 'center',
    margin: '10px 10px 10px 50px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    borderRadius: '2px',
    width: '150px',
    height: '45'
  }

  return (
    <div>
      <div style={styleBreed}>
        <Link to={`/dog/${props.name}`}>{props.name}</Link>
      </div>
        {
          props.subBreeds.map((elem) =>
            <div style={styleSubBreed}key={elem}>
              <Link to={`/dog/${props.name}/${elem}`}>{elem}</Link>
            </div>)
        }
    </div>
  );
}
export default Breed;
