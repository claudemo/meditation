// src/App.js
import React, { useState } from 'react';
import ColorPicker from './components/ColorPicker';
import Quotes from './components/Quotes';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('#b0c4de'); // LightSteelBlue default

  return (
    <div style={{
      height: '100vh',
      backgroundColor: backgroundColor,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 0.5s ease',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <ColorPicker setBackgroundColor={setBackgroundColor} />
      <Quotes />
    </div>
  );
};

export default App;