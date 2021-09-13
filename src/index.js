import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

import './app.css'

class App extends React.Component{
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return(
      <div>
        <h1>Latitude: </h1>
        <SeasonDisplay></SeasonDisplay>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.querySelector('#root'))
