import React, {useState} from 'react';
import Board from './board';
import Heading from './heading'



let turn = 0;
const size = 9;

function App() {
  
  const [winnerFlag, setWinnerFlag] = useState(false);
  // const [tieFlag, setTieFlag] = useState(false);
  const [isEndGame, setEndGameState] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(""));
  // const winnerCombination = [
  //   [0,1,2],
  //   [3,4,5],
  //   [6,7,8],
  //   [0,3,6],
  //   [1,4,7],
  //   [2,5,8],
  //   [0,4,8],
  //   [2,4,6]
  // ];
 

  const getCurrentValue = ()=>{ 
    if (turn % 2 === 0) {
      return 'X';
    } 
    return 'O';
  }
  const performComputerMove = () => {
    let computerCell = Math.floor(Math.random() * 9);

    while (!isCellAvailable(computerCell)) {
      computerCell = Math.floor(Math.random() * 9);
    }
    updateFieldChanged(computerCell);
  }

  const moveToNextTurn = ()=>{
    turn++;
    if (turn % 2 !== 0 && turn < size && !winnerFlag) {
      performComputerMove();
    }
  }

  const isCellAvailable = (selectedCell) => {
    return board[selectedCell] === "";
  }

  const updateFieldChanged = (index) => {   
    
    const newValue = getCurrentValue();
    setBoard(
      board.map((cell, id) =>{
        return id === index ? (cell === "" ? newValue:cell):cell;
      })
    );
    console.log(board)
    document.getElementById(`${index}`).innerHTML = newValue;
    moveToNextTurn(); 
    
  } 


  return (
    <div id="main-container">

      <Heading/>
      <Board board={board} onClick={updateFieldChanged} isEndGame={isEndGame}/>
    </div>
  );
}

export default App;
