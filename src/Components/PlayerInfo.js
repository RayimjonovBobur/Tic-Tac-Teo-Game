import React from "react";
import "./Game.scss";

function PlayeInfo(props) {
  const element = props.winner ? (
    <>
      <h1 style={{ color: "#fff" }}>Winner: {props.winner}</h1>
      <button
        onClick={() => window.location.reload()}
        className="reflesh-button"
      >
        Refresh
      </button>
    </>
  ) : (
    <>
      <h1 style={{ color: "#fff" }}>Next player: {props.turn}</h1>
    </>
  );
  return <>{element}</>;
}

export default PlayeInfo;
