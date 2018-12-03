import React, {Component} from 'react';

class Dog extends Component {

  readInfo = async(url) => {
    const result = await fetch(url);
    const arr = await result.json();
    return arr;
  }

  async componentDidMount() {
    await this.readInfo('https://dog.ceo/api/breeds/list/all');
  }



  render() {
    console.log(props);
    return (
      <div>
        <h1>Page about one dog!</h1>
      </div>
    );
  }
}
export default Dog;