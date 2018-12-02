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
    console.log(await this.readInfo('https://dog.ceo/api/breeds/list/all'));
  }

  handleClickButton = (name) => {
    console.log(name);
    //for (let prop in this.props.dogList) {
    //  if (this.props.dogList.prop !== '') console.log(this.props.dogList.prop);
    //}



    //const element = (this.props.dogList).filter((elem) => elem === name);

    //const element = Object.keys(this.props.dogList).filter((elem) => elem === name);
    //console.log('element - ', element);
  }

  render() {
    return (
      <div style = {divStyle}>
        <h1>My page about dogs</h1>
        {Object.keys(this.props.dogList ? this.props.dogList : {}).map((elem) => <Breed
          name = {elem}
          handleClick = {this.handleClickButton}
        />)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addListDogs}, dispatch);
const mapStateToProps = (state) => ({dogList : state.home.dogList});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

{/*<button onClick={() => props.addDog({name : 'avcharka'})}>Нажать</button>*/}

