import React from "react";
const Counter = props => {
  return (
    <>
      <input
        type="button"
        className="input"
        onClick={props.increase}
        value="+"
      ></input>
      <input
        type="button"
        className="input"
        onClick={props.decrease}
        value="-"
      ></input>
      <p>{props.number}</p>
    </>
  );
};

export default Counter;
