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
      return(
        <Error text={ this.state.errorMessage } />
      )
    }

    else if (!this.state.errorMessage && this.state.lat) {
      return (
        <div>
          <SeasonDisplay lat={ this.state.lat } long={ this.state.long } />
        </div>
      );
    }

    return <Loading />
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))
