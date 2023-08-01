// Plan2.js
import React from 'react';

const Plan2 = ({ selected, onSelect }) => {
  return (
    <div className={selected ? "selected-plan" : "none"}>
      <h3>Plan 2</h3>
      <p>Plan 2 details and features</p>
      <button onClick={onSelect}>Select Plan 2</button>
    </div>
  );
};

export default Plan2;
