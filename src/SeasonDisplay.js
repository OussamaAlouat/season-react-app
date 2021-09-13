import React from 'react';


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth())
  const text = season === 'winter' ? 'Brrr it is chilly' : 'Les hit the beach';
  const icon = season === 'winter' ? 'snowflake' : 'sun'

  return (
    <div className="season-container">
      <i className={`icon ${icon}`}></i>
      <h2>{ text }</h2>
      <i className={`icon ${icon}`}></i>
    </div>
  )
}

export default SeasonDisplay;
