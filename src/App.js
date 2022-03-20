// Dependencies
import React from "react";

//import components:
import { useState } from "react";
import database from "./database";
import History from "./Components/childs/History";
import Speed from "./Components/childs/Speed";
import Volume from "./Components/childs/Volume";
import Key from "./Components/childs/Key";
import { ctrlStyle, keypad } from "./Components/styles/Styles";
import Footer from "./Components/childs/Footer";
import Navbar from "./Components/childs/Navbar";

function App() {
  const [vol, setVol] = useState(1);
  const [record, setRecord] = useState([]);
  const [bgColor, setBg] = useState("#b3ffd9");

  const [speed, setSpeed] = useState(0.5);
  return (
    <div
      className="container mx-auto w-full h-full"
      style={{ backgroundImage: `linear-gradient( ${bgColor}, #5D3FD3` }}
    >
      <Navbar />
      <div id="drum-machine" className="grid grid-col-1 justify-center">
        <div>
          <History
            record={record}
            setRecord={setRecord}
            vol={vol}
            speed={speed}
            setSpeed={setSpeed}
            setBg={setBg}
          />
        </div>
        <div className={ctrlStyle}>
          <Volume vol={vol} setVol={setVol} />
        </div>
        <div className={ctrlStyle}>
          <Speed speed={speed} setSpeed={setSpeed} />
        </div>
        <div id="display" className={keypad}>
          {database.map((e) => (
            <Key
              key={e.keyCode}
              keyInfo={e}
              vol={vol}
              record={record}
              setRecord={setRecord}
              bgColor={bgColor}
              setBg={setBg}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
