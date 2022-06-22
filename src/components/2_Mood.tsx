import React, { useState, useEffect } from 'react';
import tags from '../data/data.js';
interface MoodProps {
  mood: string;

}

function removeDuplicatesInArray(array: any[]) {
  return array.filter((item, index) => array.indexOf(item) === index);
}

export default function Mood ({mood}: MoodProps) {




  return (
    <div className="section">
      <h1> “What are you in the Mood for? </h1>
      <div
        className="main-container"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <div className="left-container">
          <p>
            Input Tags here, up to 5 : [______________] (press enter after each
            one)
          </p>
        </div>
        <div className="right-container">
          <h3>Selection of Tags Available</h3>
          <div
            style={{
              width: 'min-content',
              overflow: 'scroll',
              height: 400,
            }}
          >
            {removeDuplicatesInArray(tags).join("\r\n")}
          </div>
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




