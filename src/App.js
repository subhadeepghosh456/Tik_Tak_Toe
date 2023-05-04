import Cell from "./components/Cell";
import "./App.css";
import { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xturn, setXturn] = useState(true);
  // const [end, setEnd] = useState(false);

  const isWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      
    ]

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (board[a]!==null && board[a] === board[b] && board[b] === board[c]) {
        return board[a]
      }
    }
    return false;
  }

  const result = isWinner();

  const handleClick = (i) => {
    
    const copy = [...board];
    if (!result && copy[i] === null) {
      copy[i] = xturn ? "X" : "O";
      setXturn(!xturn);
    }
   
    setBoard([...copy]);
    

  };

  const reset = () => {
    
    setBoard(Array(9).fill(null));
    setXturn(true)
}
  
  return (
    <>
      <div className="App">
        <div>{xturn ? <span>Now X Turn</span> : <span>Now O Turn</span>}</div>
        {result && <span>{ result } won the game</span>}
        <div>
          <div className="column_container">
            <Cell
              board={board[0]}
              onClick={() => {
                handleClick(0);
              }}
            />
            <Cell
              board={board[1]}
              onClick={() => {
                handleClick(1);
              }}
            />
            <Cell
              board={board[2]}
              onClick={() => {
                handleClick(2);
              }}
            />
          </div>
          <div className="column_container">
            <Cell
              board={board[3]}
              onClick={() => {
                handleClick(3);
              }}
            />
            <Cell
              board={board[4]}
              onClick={() => {
                handleClick(4);
              }}
            />
            <Cell
              board={board[5]}
              onClick={() => {
                handleClick(5);
              }}
            />
          </div>
          <div className="column_container">
            <Cell
              board={board[6]}
              onClick={() => {
                handleClick(6);
              }}
            />
            <Cell
              board={board[7]}
              onClick={() => {
                handleClick(7);
              }}
            />
            <Cell
              board={board[8]}
              onClick={() => {
                handleClick(8);
              }}
            />
          </div>
        </div>
        
        <button onClick={()=> reset()}>Reset</button>
      </div>
      
    </>
  );
}

export default App;
