import React from 'react';

const Loading = (props) => {
  return (
    <div className="ui segment loading-container">
      <div className="ui active dimmer">
        <div className="ui text loader">{ props.message }</div>
      </div>
      <p></p>
    </div>
  )
}

export default Loading;
