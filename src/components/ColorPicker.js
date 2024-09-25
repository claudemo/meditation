// src/components/ColorPicker.js
import React from 'react';

const ColorPicker = ({ setBackgroundColor }) => {
    const handleColorChange = (event) => {
        setBackgroundColor(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h1>Meditation -- self observation</h1>
            <input
                type="color"
                onChange={handleColorChange}
                defaultValue="#b0c4de" // Default LightSteelBlue
                style={{ padding: '10px', borderRadius: '5px', cursor: 'pointer' }}
            />
        </div>
    );
};

export default ColorPicker;