import React from "react";
import "./Inputs.css";
export default function Background({
  startcolor,
  Setstartcolor,
  endcolor,
  Setendcolor,
  backcolor,
  Setbackcolor,
  backtheme,
  Setbacktheme,
}) {
  return (
    <div>
      <span className="inputcouple">
        <label htmlFor="back">Background:</label>
        <label htmlFor="gradiant">gradiant </label>
        <input
          type="radio"
          value={"gradiant"}
          checked={backtheme == "gradiant"}
          onChange={(e) => {
            Setbacktheme(e.target.value);
          }}
          style={{ marginRight: "12px" }}
          className="gradiant back"
        />
        <label htmlFor="solid">solid </label>
        <input
          type="radio"
          value={"solid"}
          checked={backtheme == "solid"}
          onChange={(e) => {
            Setbacktheme(e.target.value);
          }}
          className="solid back"
        />
      </span>
    { backtheme=="gradiant" && <><span className="inputcouple">
        <label htmlFor="startcolor">Start Color</label>
        <input
          type="color"
          className="startcolor"
          value={startcolor}
          onChange={(e) => {
            Setstartcolor(e.target.value);
          }}
        />
      </span>
      <span className="inputcouple">
        <label htmlFor="endcolor">End Color</label>

        <input
          type="color"
          className="endcolor"
          value={endcolor}
          onChange={(e) => {
            Setendcolor(e.target.value);
          }}
        />
      </span></> }
     { backtheme=="solid" && <span className="inputcouple">
      <label htmlFor="backcolor">Color</label>

<input
  type="color"
  className="backcolor"
  value={backcolor}
  onChange={(e) => {
    Setbackcolor(e.target.value);
  }}
/>
      </span>}
    </div>
  );
}
