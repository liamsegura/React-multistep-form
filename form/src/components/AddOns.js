import React, { useState } from 'react';

const AddOns = ({ selectedOptions, handleSelect }) => {
  return (
    <div>
      <div
        className={`selectable-div ${selectedOptions.option1 ? 'selected-plan' : ''}`}
        onClick={() => handleSelect('option1')}
      >
        Option 1
      </div>
      <div
        className={`selectable-div ${selectedOptions.option2 ? 'selected-plan' : ''}`}
        onClick={() => handleSelect('option2')}
      >
        Option 2
      </div>
      <div
        className={`selectable-div ${selectedOptions.option3 ? 'selected-plan' : ''}`}
        onClick={() => handleSelect('option3')}
      >
        Option 3
      </div>
    </div>
  );
};

export default AddOns;
