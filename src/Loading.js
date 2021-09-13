import React from 'react';

const Loading = () => {
  return (
    <div className="ui segment loading-container">
      <div className="ui active dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  )
}

export default Loading;
