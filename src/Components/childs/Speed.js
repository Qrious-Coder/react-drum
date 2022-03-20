import React from "react";
import { speedRangeStyle, speedIcon } from "../styles/Styles";

//Speed
const Speed = ({ speed, setSpeed }) => {
  return (
    <div id="speed" className="grid grid-cols-5 items-center">
      <div className="justify-self-center">{speedIcon}</div>
      <input
        style={{ direction: "rtl" }}
        className={`${speedRangeStyle} col-span-2 h-[1px] appearance-none`}
        type="range"
        step={0.01}
        min={0.1}
        max={1.2}
        value={speed}
        onChange={(event) => {
          setSpeed(event.target.valueAsNumber);
        }}
      />
      <div className="justify-self-end"> Speed </div>
      <div className="justify-self-end">{speed}</div>
    </div>
  );
};

export default Speed;
