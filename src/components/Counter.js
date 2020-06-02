import React from "react";
import { connect } from "react-redux";

const Counter = ({
  value,
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
}) => {
  return (
    <div>
      Clicked: {value} times <br />
      <button onClick={increment}>+</button>{" "}
      <button onClick={decrement}>-</button> <br />
      <button onClick={incrementIfOdd}>Increment if Odd</button> <br />
      <button onClick={incrementAsync}>Increment if Async</button> <br />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    value: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    incrementIfOdd: () => dispatch({ type: "INCREMENT_IF_ODD" }),
    incrementAsync: () => dispatch({ type: "INCREMENT_ASYNC" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
