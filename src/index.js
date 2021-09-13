import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

import './app.css'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

  return(
    <div>
      <h1>Hi there</h1>
      <SeasonDisplay></SeasonDisplay>
    </div>
  )
}

ReactDom.render(<App/>, document.querySelector('#root'))
