import React from "react";

function PlayeInfo(props) {
  const element = props.winner ? (
    <h1 style={{ color: "#fff" }}>Winner: {props.winner}</h1>
  ) : (
    <h1 style={{ color: "#fff" }}>Next player: {props.turn}</h1>
  );
  return element;
}

export default PlayeInfo;
