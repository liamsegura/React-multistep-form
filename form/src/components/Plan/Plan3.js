// Plan3.js
import React from 'react';

const Plan3 = ({ selected, onSelect }) => {
  return (
    <div className={selected ? "selected-plan" : "none"}>
      <h3>Plan 3</h3>
      <p>Plan 3 details and features</p>
      <button onClick={onSelect}>Select Plan 3</button>
    </div>
  );
};

export default Plan3;
