import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addListDogs} from "../actions/homeActions";

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

  render() {
    console.log('1', this.props);
    return (
      <div>
        <h1>Me page about dogs</h1>

        {/*<button onClick={() => props.addDog({name : 'avcharka'})}>Нажать</button>*/}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addListDogs}, dispatch);
const mapStateToProps = (state) => ({dogList : state.home.dogList});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

