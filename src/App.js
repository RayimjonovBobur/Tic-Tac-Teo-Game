import { useState } from "react";
import "./App.css";
import Game from "./Components/Game";
import PlayeInfo from "./Components/PlayerInfo";

function App(props) {
  const [data, setData] = useState({
    winner: {
      name: undefined,
      indexes: [],
    },
    turn: "cross",
    positions: new Array(9).fill(null),
  });
  console.log(data);
  return (
    <div className="App">
      <h4>Logo </h4>
      <Game
        winner={data.winner.indexes}
        positions={data.positions}
        setPositions={(index) => {
          setData((prevData) => {
            if (!prevData.positions[index] && !prevData.winner.name) {
              const data = { ...prevData };
              data.positions[index] = data.turn;
              const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
              ];
              lines.forEach((line) => {
                const [a, b, c] = line;
                if (
                  data.positions[a] &&
                  data.positions[a] === data.positions[b] &&
                  data.positions[a] === data.positions[c]
                ) {
                  data.winner.name = data.positions[a];
                  data.winner.indexes = line;
                }
              });
              data.turn = data.turn === "cross" ? "circle" : "cross";
              return data;
            } else {
              return prevData;
            }
          });
        }}
      />
      <PlayeInfo
        turn={data.turn}
        winner={data.winner.name}
        active={data.winner.indexes}
      />
    </div>
  );
}

export default App;
