import React, { useState, useEffect } from 'react';

interface MoodProps {
  mood: string;

}

export default function Mood ({mood}: MoodProps) {

  const [count, setCount] = useState(0);

  return (

    <div>
    THIS IS MOOD
    <button>{mood}</button>

    </div>

    );
  }




