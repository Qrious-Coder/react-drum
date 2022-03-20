import React from "react";
import { btnSetStyle, resetIcon, playIcon, bgColor } from "../styles/Styles";
import HistoryList from "./HistoryList";
import { imageX } from "../styles/Styles";
import headphone from "../styles/headphone.png";

const History = ({ record, vol, setRecord, speed, setBg }) => {
  const playRecord = () => {
    let index = 0;
    const interval = setInterval(() => {
      setBg(bgColor[Math.floor(Math.random() * bgColor.length) + 1]);
      const recordTag = document.getElementById(record[index]);
      recordTag.currentTime = 0;
      recordTag.volume = vol;
      recordTag.play();
      index++;
    }, speed * 1000);
    setTimeout(() => clearInterval(interval), speed * 1000 * record.length);
  };

  const resetRecord = () => {
    setRecord([]);
  };

  return (
    <div className="bg-purple-400 shadow-2xl shadow-pink-500/50 rounded-t-lg">
      <img
        src={headphone}
        alt="headphone"
        width={50}
        height={50}
        className="mx-auto mt-5 rounded-t-2xl"
      />
      <div
        className="bg-gray-800 overflow-y-auto border-2 rounded-sm"
        style={{ height: "30vh" }}
      >
        <div
          className="font-mono p-1 grid grid-cols-3 text-blue-800 items-center border-b border-blue-500 bg-gray-200 outline-offset-8 outline-blue-500"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div>Key</div>
          <div>Stroke Name</div>
          <div className="justify-self-end">Delete?</div>
        </div>
        {record.length === 0
          ? imageX
          : record.map((e, i) => (
              <HistoryList
                key={i}
                index={i}
                value={e}
                record={record}
                setRecord={setRecord}
              />
            ))}
      </div>
      <div className="flex justify-center p-3">
        <button
          className={`${btnSetStyle} rounded-l-2xl bg-purple-300`}
          onClick={() => {
            playRecord();
          }}
        >
          {playIcon}
        </button>
        <button
          className={`${btnSetStyle} rounded-r-2xl  bg-gray-300`}
          onClick={() => {
            resetRecord();
          }}
        >
          {resetIcon}
        </button>
      </div>
    </div>
  );
};

export default History;
