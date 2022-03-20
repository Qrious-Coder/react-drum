import React from "react";
import { speedRangeStyle, volumeOff, volumeUp } from "../styles/Styles";

//Volume
const Volume = ({ vol, setVol }) => {
  return (
    <div id="volume" className="grid grid-cols-5 items-center">
      <div className="justify-self-center"> {volumeOff}</div>
      <input
        type="range"
        className={`${speedRangeStyle} col-span-2 h-[3px]`}
        min={0}
        max={1}
        value={vol}
        step={0.01}
        onChange={(event) => {
          setVol(event.target.valueAsNumber);
        }}
      />
      <div className="justify-self-center">
        {" "}
        <div> {volumeUp}</div>{" "}
      </div>
      <div className="justify-self-end">
        {" "}
        <div> {vol.toFixed(2)}</div>{" "}
      </div>
    </div>
  );
};

export default Volume;
