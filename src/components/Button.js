import React from 'react'
import covertfromCamelcase from './CamelCase'
import { useState } from 'react';

export default function Button({btntext,styleforButton,hoverstyles}) {
  const [isHovered, setIsHovered] = useState(false);
  const combinedStyles = { ...styleforButton, ...hoverstyles };
  return (
    <>
    <div className='button'>
       <button className='mainbutton'  style={isHovered ?  { ...styleforButton, ...hoverstyles.btnHover }: styleforButton}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>{btntext}</button>
    </div>
    <h5 className='btnpre'>Button Preview</h5>
    </>

  )
}
