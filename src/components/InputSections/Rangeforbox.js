import React from 'react';
import "./Inputs.css"
const LabelandRange = ({ labeltext,disabled, value, onChange }) => {
  return (
    <div>
        <span className='inputcouple'>
            
      <label>{labeltext } {value}</label>
      <input
        type="range"
        min="0"
        disabled={disabled}
        max="40"
        value={value}
        onChange={onChange}
      />
</span>
    </div>
  );
};

export default LabelandRange;
