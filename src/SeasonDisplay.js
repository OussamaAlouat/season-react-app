import React from 'react';


const seasonConfig = {
  summer: {
    text: 'Lets hit the beach',
    icon: 'sun'
  },
  winter: {
    text: 'Brrr it is chilly',
    icon: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = (props) => {
  const { lat } = props;
  const season = getSeason(lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className="season-container">
      <i className={`icon ${icon} icon-top`}></i>
      <h2>{ text }</h2>
      <i className={`icon ${icon} icon-bottom`}></i>
    </div>
  )
}

export default SeasonDisplay;
