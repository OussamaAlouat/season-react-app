import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';
import Error from './Error'

import './app.css'

class App extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      lat: null,
      errorMessage: ''

    };
  }

  componentDidMount () {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return(
        <Error text={ this.state.errorMessage } />
      )
    }

    else if (!this.state.errorMessage && this.state.lat) {
      return  <SeasonDisplay lat={ this.state.lat }  />
    }

    return <Loading message="Please accept location request" />
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))
