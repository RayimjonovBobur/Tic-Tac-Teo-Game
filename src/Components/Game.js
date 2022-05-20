import React from "react";
import "./Game.scss";

const rnaderaSvg = (svg) => {
  if (svg === "cross") {
    return <h1 className="cross">X</h1>;
  } else if (svg === "circle") {
    return <h1 className="circle">O</h1>;
  } else {
    return null;
  }
};

const Game = (props) => {
  const divisions = props.positions.map((value, index) => {
    const isWinningIndex = props.winner.includes(index);
    return (
      <div
        className={`game-div ${isWinningIndex ? "winner" : null}`}
        key={index}
        onClick={() => {
          props.setPositions(index);
        }}
      >
        {rnaderaSvg(value)}
      </div>
    );
  });
  console.log(divisions);
  return <div className="container">{divisions}</div>;
};

export default Game;
