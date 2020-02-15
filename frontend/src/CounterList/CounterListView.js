import React from "react";

import CounterContainer from "../Counter/CounterContainer";

const renderCounters = (number, isAdded) => {
  const result = [];

  for (let i = 0; i < number; i++) {
    result.push(<CounterContainer isAdded={isAdded} />);
  }

  return result;
};
const CounterListView = ({ number, increase, remove, isAdded }) => {
  return (
    <div className="counterCont">
      <button className="counter" onClick={increase}>
        +
      </button>
      <button className="counter" onClick={remove}>
        -
      </button>
      {renderCounters(number, isAdded)}
    </div>
  );
};

export default CounterListView;
