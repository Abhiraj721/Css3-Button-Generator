import React from 'react'
import LabelandRange from './Rangeforbox';
import "./Inputs.css"
export default function Box({  boxShadowColor,
    setBoxShadowColor,
    boxShadowX,
    setBoxShadowX,
    boxShadowY,
    setBoxShadowY,
    boxShadowBlur,
    setBoxShadowBlur,
    togglepadding,
    Settogglepadding,
    padding,
    setPadding,
    paddingTop,
    setPaddingTop,
    paddingRight,
    setPaddingRight,
    paddingBottom,
    setPaddingBottom,
    paddingLeft,
   setPaddingLeft
}) {
  return (
    <div className='boxsection'>
      <span className='inputcouple'>
      <label htmlFor="boxshadowcolor">Box Shadow :</label>
        <input type="color" className='boxshadowcolor' value={boxShadowColor} onChange={(e)=>{
          setBoxShadowColor(e.target.value)
        }} />
        </span>
        <LabelandRange labeltext="Box Shadow X:" disabled={false} value={boxShadowX} onChange={(e) => setBoxShadowX(e.target.value)} />
      <LabelandRange labeltext="Box Shadow Y:" disabled={false}  value={boxShadowY} onChange={(e) => setBoxShadowY(e.target.value)} />
      <LabelandRange labeltext="Box Shadow Blur:" disabled={false}  value={boxShadowBlur} onChange={(e) => setBoxShadowBlur(e.target.value)} />
      <div >
  <input
    type="checkbox"
    value={togglepadding}
    className='paddingcheck'
    onChange={() => Settogglepadding(!togglepadding)}
  />
  <LabelandRange
    labeltext="Padding:"
    disabled={togglepadding}
    value={padding}
    onChange={(e) => setPadding(e.target.value)}
  />
</div>
      <LabelandRange labeltext="Padding Top:" disabled={!togglepadding} value={paddingTop} onChange={(e) => setPaddingTop(e.target.value)} />
      <LabelandRange labeltext="Padding Right:" disabled={!togglepadding} value={paddingRight} onChange={(e) => setPaddingRight(e.target.value)} />
      <LabelandRange labeltext="Padding left:" disabled={!togglepadding} value={paddingLeft} onChange={(e) => setPaddingLeft(e.target.value)} />
      <LabelandRange labeltext="Padding Bottom:" disabled={!togglepadding} value={paddingBottom} onChange={(e) => setPaddingBottom(e.target.value)} />
    </div>
  )
}
