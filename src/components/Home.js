import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addListDogs} from "../actions/homeActions";
import Breed from './Breed'

const divStyle ={
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'gray',
  width: '200px'
}

class Home extends Component {

  readInfo = async(url) => {
    const result = await fetch(url);
    const arr = await result.json();
    this.props.addListDogs(arr.message);
    return arr;
  }

  async componentDidMount() {
    await this.readInfo('https://dog.ceo/api/breeds/list/all');
  }

  render() {
    return (
      <div style = {divStyle}>
        <h1>Page about dogs</h1>
        {Object.keys(this.props.dogList ? this.props.dogList : {}).map((elem) => <Breed
          key = {elem}
          name = {elem}
          subBreeds = {this.props.dogList[elem]}
        />)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addListDogs}, dispatch);
const mapStateToProps = (state) => ({dogList : state.home.dogList});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

{/*<button onClick={() => props.addDog({name : 'avcharka'})}>Нажать</button>*/}

