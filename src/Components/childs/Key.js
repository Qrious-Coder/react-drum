import React from "react";
import { useState, useEffect } from "react";
import { btnStyle, bgColor } from "../styles/Styles";
//Key
const Key = ({ keyInfo, vol, record, setRecord, setBg }) => {
  const [active, setActive] = useState(false);

  //Play and record when pressing a key 
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => {
    let x;

    if (e.keyCode === keyInfo.keyCode) {
      playAudio();
      x = keyInfo.keyTrigger;
      setRecord((pre) => pre.concat(x));
    }
  };

  //Play Btn
  const playAudio = () => {
    const audioTag = document.getElementById(keyInfo.keyTrigger);
    setActive(true);
    setTimeout(() => setActive(false), 300);

    //set autio time position to 0 (from the beg.)
    audioTag.currentTime = 0;
    audioTag.volume = vol;
    audioTag.play();
  };

  return (
    <div
      onClick={() => {
        playAudio();
        setRecord([...record, keyInfo.keyTrigger]);
        setBg(bgColor[Math.floor(Math.random() * bgColor.length) + 1]);
      }}
      className={`drum-pad 
            ${btnStyle}
            ${
              active
                ? "bg-gray-200 text-pink-500"
                : "bg-purple-500 hover:bg-purple-800"
            }`}
    >
      {keyInfo.keyTrigger}
      <audio id={keyInfo.keyTrigger} src={keyInfo.url} />
    </div>
  );
};

export default Key;
