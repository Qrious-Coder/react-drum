import React from "react";
import database from "../../database";
import { delIcon, historyScreen } from "../styles/Styles";

const HistoryList = ({ value, index, record, setRecord }) => {
  const handleDelete = (x) => {
    delete record[x];
    setRecord(record.filter((e) => e !== null));
  };

  return (
    <div>
      <div className="overflow-y-auto">
        {database.map((e) => {
          if (e.keyTrigger === value) {
            return (
              <div key={index} className={historyScreen}>
                <div>{e.keyTrigger}</div>
                <div>{e.id}</div>
                <div
                  className="justify-self-end"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  {delIcon}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default HistoryList;
