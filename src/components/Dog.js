import React, {Component} from 'react';
import {addDog} from "../actions/homeActions";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const styleImg = {
  margin: '20px',
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  borderRadius: '3px',
}

class Dog extends Component {

  readInfo = async(url) => {
    const result = await fetch(url);
    const response = await result.json();
    this.props.addDog(response.message);
    return response;
  }

  async componentDidMount() {
    try {
      const params = this.props.match.params;
      const addressDog = (params.subBreed) ?
        `https://dog.ceo/api/breed/${params.breed}/${params.subBreed}/images/random` :
        `https://dog.ceo/api/breed/${params.breed}/images/random`;
      await this.readInfo(addressDog);
    }
    catch (error) {
      console.log('------error', error);
    }
  }



  render() {
    console.log('see here ', this.props);
    return (
      <div>
        <h1>Page about one dog!</h1>
        <img src = {this.props.dogImageUrl} style={styleImg}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({addDog}, dispatch);
const mapStateToProps = (state) => ({dogImageUrl : state.home.dogImageUrl});

export default connect(mapStateToProps, mapDispatchToProps)(Dog);