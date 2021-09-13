import React from 'react';

const Error = (props) => {
  return (
    <div className="error-container">
      <div className="error-block">
        <h3>Error: { props.text }</h3>
      </div>
    </div>
  )
}

export default Error;
