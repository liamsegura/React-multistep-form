import React, { useState } from 'react';
import './ToggleSwitch.css'; // Import the CSS file for styling

const ToggleSwitch = () => {
  const [option, setOption] = useState(false);

  const handleToggle = () => {
    setOption(!option);
  };

  return (
    <div
      className={`toggle-switch ${option ? 'option1' : 'option2'}`}
      onClick={handleToggle}
    >
      <p className="toggle-text">{option ? 'Monthly' : 'Yearly'}</p>
      <div className="slider" />
      
    </div>
    
  );
};

export default ToggleSwitch;

