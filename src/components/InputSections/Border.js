import React from 'react'
import "./Inputs.css";
export default function Border({borderRadius,SetBorderRadius,borderColor,SetBorderColor,borderStyle,SetBorderStyle,borderWidth,SetBorderWidth}) {
  return (
    <div className='bordersection'>
        <span className='inputcouple'>
         <label htmlFor="borderRadius">Border Radius: {borderRadius}</label>
      <input
        type="range"
        id="borderRadius"
        min="0"
        max="60"
        value={borderRadius}
        onChange={(e) => SetBorderRadius(e.target.value)}
      />
</span>
<span className='inputcouple'>

      <label htmlFor="borderColor">Border Color:</label>
      <input
        type="color"
        id="borderColor"
        value={borderColor}
        onChange={(e) => SetBorderColor(e.target.value)}
      />
</span>
<span className='inputcouple'>

      <label htmlFor="borderStyle">Border Style:</label>
      <select
        id="borderStyle"
        value={borderStyle}
        onChange={(e) => SetBorderStyle(e.target.value)}
      >
        <option value="solid">Solid</option>
        <option value="dashed">Dashed</option>
        <option value="dotted">Dotted</option>
        <option value="double">Double</option>
      </select>
      </span>

<span className='inputcouple'>
      <label htmlFor="borderWidth">Border Width: {borderWidth}</label>
      <input
        type="range"
        id="borderWidth"
        min="1"
        max="20"
        value={borderWidth}
        onChange={(e) => SetBorderWidth(e.target.value)}
      />
      </span>
      

    </div>
  )
}
