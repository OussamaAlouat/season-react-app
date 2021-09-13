import React from 'react';
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay';

import './app.css'

const App = () => {
  return(
    <div>
      <h1>Hi there</h1>
      <SeasonDisplay></SeasonDisplay>
    </div>
  )
}

ReactDom.render(<App/>, document.querySelector('#root'))
