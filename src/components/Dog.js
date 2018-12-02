import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addDog} from "../actions/testActions";

const Dog = (props) => (
  <div>
    <h1>Page about one dog!</h1>
    <button onClick={() => props.addDog({name : 'avcharka'})}>Нажать</button>
    {props.dogName}
  </div>
)

const mapDispatchToProps = (dispatch) => bindActionCreators({addDog}, dispatch);
const mapStateToProps = (state) => ({dogName : ((state) =>  (state.test.dog) ? state.test.dog.name : '')(state)});

export default connect(mapStateToProps, mapDispatchToProps)(Dog);