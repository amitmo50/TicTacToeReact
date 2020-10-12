import React, {useState} from 'react';
import Board from './board';
import Heading from './heading';
import Button from './button';
import Alert from './alert';


let turn = 0;
const size = 9;
const winnerCombination = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];
let newArray = Array(3).fill("");

function App() {
  
  const [isEndGame, setEndGameState] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isWinner, setisWinner] = useState(false);
  const [winner, setWinner] = useState("");
  const clonedBoard = [...board];
  
 // Check if there is a winner? if so return the positions to newArray and raise a flag for winning, endGame and show the winner alert
  const winnerPlayer = () => {
    winnerCombination.forEach((currentWinCombo) => {
      const textPos0 = clonedBoard[currentWinCombo[0]];
      const textPos1 = clonedBoard[currentWinCombo[1]];
      const textPos2 = clonedBoard[currentWinCombo[2]];

      if(textPos0 === textPos1 && textPos1 === textPos2 && textPos0 !== ''){
        newArray = [...currentWinCombo];
        
        setEndGameState(true);
        setisWinner(true);
        setWinner(textPos0);
        
      }
    });
  }
// in case of no winner it a tie so just raise up the alert and it will be already configured to tie option
  const isTie = () => {
    if(turn === 8 && !isWinner){
      setEndGameState(true);
    }
  }
  // returns the value of the player who is supposed to play 
  const getCurrentValue = ()=>{ 
    if (turn % 2 === 0) {
      return 'X';
    } 
    return 'O';
  }
  // claculate the position on board for the computer move
  const performComputerMove = () => {
    let computerCell = Math.floor(Math.random() * 9);

    while (!isCellAvailable(computerCell)) {
      computerCell = Math.floor(Math.random() * 9);
    }
    updateFieldChanged(computerCell);
  }
  // perform the next turn 
  const moveToNextTurn = ()=>{
    turn++;
    if (turn % 2 !== 0 && turn < size && !isWinner) {
      performComputerMove();
    }
  }
  // check for the computer turn whither a cell is empty or not
  const isCellAvailable = (selectedCell) => {
    return clonedBoard[selectedCell] === "";
  }
// when cell been clicked set the value and activate the next turn
  const updateFieldChanged = (index) => {   
    if (clonedBoard[index] !== "") {
      return;
    }
    const newValue = getCurrentValue();
    clonedBoard[index] = newValue;
    setBoard(clonedBoard);
    winnerPlayer();
    isTie();
    moveToNextTurn();
  } 
// restart the game when there is a winner or a tie
  const restartGame = ()=>{
    turn = 0;
    setisWinner(false);
    setBoard(Array(9).fill(""));
    setEndGameState(false);
  } 
  //changing the winner cell's class to add a color to the text
  const isWinnerSign = (id)=>{
    if(newArray.filter(arr => arr === id)[0] === id && isWinner){
      return "cell winner";
    }else{
      return "cell";
    }
  }
  return (
    <div id="main-container">
      <Heading/>
      <Alert isEndGame={isEndGame} isWinner={isWinner} winner={winner}/>
      <Board board={board} isEndGame={isEndGame} onClick={updateFieldChanged} isWinnerSign={isWinnerSign} />
      <Button restartGame={restartGame} isEndGame={isEndGame}/>
    </div>
  );
}

export default App;
