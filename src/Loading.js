import React from 'react';

const Loading = (props) => {
  return (
    <div className="ui segment loading-container">
      <div className="ui active dimmer">
        <div className="ui text loader">{ props.message || 'Loading ...' }</div>
      </div>
      <p></p>
    </div>
  )
}

Loading.defaultProps = {
  message: 'Loading ...'
}

export default Loading;
