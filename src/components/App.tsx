import React, { useState, useEffect } from 'react';
import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return <div className="App">Hello World HI BAE</div>;
}

export default App;
