import React, {Component} from 'react';
import {addDog} from "../actions/homeActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

class Dog extends Component {

  readInfo = async(url) => {
    const result = await fetch(url);
    const response = await result.json();
    this.props.addDog(response.message);
    return response;
  }

  async componentDidMount() {
    const params = this.props.match.params;
    const addressDog = (params.subBreed) ?
      `https://dog.ceo/api/breed/${params.breed}/${params.subBreed}/images/random` :
      `https://dog.ceo/api/breed/${params.breed}/images/random`;
    await this.readInfo(addressDog);
  }



  render() {
    console.log('see here ', this.props);
    return (
      <div>
        <h1>Page about one dog!</h1>
        <img src = {this.props.dogImageUrl}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addDog}, dispatch);
const mapStateToProps = (state) => ({dogImageUrl : state.home.dogImageUrl});

export default connect(mapStateToProps, mapDispatchToProps)(Dog);