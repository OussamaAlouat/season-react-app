import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

import './app.css'

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: ''

    };

    window.navigator.geolocation.getCurrentPosition(
      (position) =>{
        this.setState({ lat: position.coords.latitude, long: position.coords.longitude })
      },
      (err) => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  render() {
    return(
      <div className="container">
        <h1>Latitude: { this.state.lat}, { this.state.long }</h1>
        <div>Error: { this.state.errorMessage }</div>
        <SeasonDisplay></SeasonDisplay>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))
