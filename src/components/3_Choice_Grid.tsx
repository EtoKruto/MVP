import React, { useState, useEffect } from 'react';

interface AppProps {}

function Choice_Grid ({}: AppProps) {
  return (
    <div className="section">
      <h1> OK Let’s choose this one (Please select up to 3) </h1>
      <div
        className="main-container">
        <div className="left-container">
          <h3>Scroll and Add</h3>
        </div>

        <div className="right-container" style={{ minWidth: 400 }}>
          <h3>Picked</h3>
        </div>
      </div>
      <h4>
        When Done, Press Submit to go the next step(this initiates the API
        search)
      </h4>
      <button type="submit">Continue</button>
    </div>
  );
  }

  export default Choice_Grid ;