import React from "react";
import Button from "./button";
import Cell from "./cell";



const Board = (props)=>{
    
    return(
        <div className="board">
            {props.board.map((cell, index)=>{
                return <Cell onClick={props.onClick} performTurn={props.nextTurn} vlaue={cell} key={index} id={index}/>
            })}
            <Button isEndGame={props.isEndGame}/>
        </div>
    );
}
export default Board;