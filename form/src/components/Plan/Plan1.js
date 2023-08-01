// Plan1.js
import React from 'react';

const Plan1 = ({ selected, onSelect }) => {
  return (
    <div className={selected ? "selected-plan" : "none"}>
      <h3>Plan 1</h3>
      <p>Plan 1 details and features</p>
      <button onClick={onSelect}>Select Plan 1</button>
    </div>
  );
};

export default Plan1;
