import React from 'react';

const SeasonDisplay = (props) => {
  const { lat, long } = props
  return (
    <div>
      <h2>The latitude are: { lat }</h2>
      <h2>The longitude are: {long }</h2>
    </div>
  )
}

export default SeasonDisplay;
