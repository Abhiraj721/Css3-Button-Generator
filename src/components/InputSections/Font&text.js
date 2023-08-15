import React from "react";
import "./Inputs.css";
export default function Fonttext({
  btntext,
  Setbtntext,
  fontfamily,
  Setfontfamily,
  fontcolor,
  Setfontcolor,
  fontsize,
  Setfontsize,
  toggletextshadow,
  Settoggletextshadow,
  textshadowcolor,
  Settextshadowcolor,
  xtextshadow,
  Setxtextshadow,
  ytextshadow,
  Setytextshadow,
  blurtextshadow,
  Setblurtextshadow,
}) {
  return (
    <div className="fonttextsection">
      <span className="inputcouple">
        <label htmlFor="btntext">text:</label>
        <input
          className="btntext"
          value={btntext}
          onChange={(e) => {
            Setbtntext(e.target.value);
          }}
          type="text"
        />
      </span>
      <span className="inputcouple">
        <label htmlFor="fontfamily">Font Family</label>
        <select
          value={fontfamily}
          id="fontSelector"
          className="fontfamily"
          onChange={(e) => {
            Setfontfamily(e.target.value);
          }}
        >
          <option value="Arial, sans-serif">Arial (Default)</option>
          <option value="Helvetica, Arial, sans-serif">Helvetica</option>
          <option value="Times New Roman, serif">Times New Roman</option>
          <option value="Courier New, monospace">Courier New</option>
          <option value="Verdana, sans-serif">Verdana</option>
          <option value="Georgia, serif">Georgia</option>
          <option value="Palatino, serif">Palatino</option>
          <option value="Garamond, serif">Garamond</option>
          <option value="Comic Sans MS, cursive">Comic Sans MS</option>
          <option value="Impact, Charcoal, sans-serif">Impact</option>
          <option value="Lucida Sans Unicode, sans-serif">
            Lucida Sans Unicode
          </option>
          <option value="Tahoma, sans-serif">Tahoma</option>
          <option value="Trebuchet MS, sans-serif">Trebuchet MS</option>
        </select>
      </span>

      <span className="inputcouple">
        <label htmlFor="fontcolor">Font Color</label>
        <input
          type="color"
          className="fontcolor"
          value={fontcolor}
          onChange={(e) => {
            Setfontcolor(e.target.value);
          }}
        />
      </span>
      <span className="inputcouple">
        <label htmlFor="fontsize">Font Size: {fontsize}</label>
        <input
          className="fontsize"
          type="range"
          min={0}
          max={60}
          value={fontsize}
          onChange={(e) => {
            Setfontsize(e.target.value);
          }}
        />
      </span>

      <span className="inputcouple">
        <input
          type="checkbox"
          value={toggletextshadow}
          onChange={(e) => {
            Settoggletextshadow(!toggletextshadow);
          }}
          className="toggle"
        />
        <label htmlFor="fontcolor">Text Shadow:</label>
        <input
          type="color"
          disabled={toggletextshadow}
          className="fontcolor"
          value={textshadowcolor}
          onChange={(e) => {
            Settextshadowcolor(e.target.value);
          }}
        />
      </span>
      {console.log(toggletextshadow)}
      <span className="inputcouple">
        <label htmlFor="xtextshadow">X : {xtextshadow}</label>
        <input
          disabled={toggletextshadow}
          type="range"
          value={xtextshadow}
          onChange={(e)=>{
            Setxtextshadow(e.target.value);
          }}
          min={0}
          max={30}
          className="xtextshadow"
          id=""
        />
      </span>
      <span className="inputcouple">
        <label htmlFor="ytextshadow">Y : {ytextshadow}</label>
        <input
          disabled={toggletextshadow}
          type="range"
          value={ytextshadow}
          onChange={(e)=>{
            Setytextshadow(e.target.value);
          }}
          min={0}
          max={30}
          className="ytextshadow"
          id=""
        />
      </span>
      <span className="inputcouple">
        <label htmlFor="blur">Blur : {blurtextshadow}</label>
        <input
          disabled={toggletextshadow}
          value={blurtextshadow}
          onChange={(e)=>{
            Setblurtextshadow(e.target.value);
          }}
          type="range"
          min={0}
          max={30}
          className="blur"
          id=""
        />
      </span>
    </div>
  );
}
