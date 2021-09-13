import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

import './app.css'

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      long: null,
      errorMessage: ''

    };
  }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude, long: position.coords.longitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <h1>Error: { this.state.errorMessage }</h1>
    }

    else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <h1>Latitude: { this.state.lat }</h1>
          <h1>longitude: { this.state.long }</h1>
        </div>
      );
    }

    return <Loading />
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))
