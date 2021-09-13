import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

import './app.css'

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      lat: null,

    };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>{
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    );

    return(
      <div>
        <h1>Latitude: { this.state.lat } </h1>
        <SeasonDisplay></SeasonDisplay>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))
