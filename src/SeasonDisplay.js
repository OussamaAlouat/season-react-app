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
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return (
    <div className={`season-container ${season}`}>
      <i className={`icon massive ${icon} icon-top`}></i>
      <h2>{ text }</h2>
      <i className={`icon  massive ${icon} icon-bottom`}></i>
    </div>
  )
}

export default SeasonDisplay;
