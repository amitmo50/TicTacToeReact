import React from "react";
import Cell from "./cell";

const Board = (props)=>{
    return(
        <div className={props.isEndGame?"game-over board":"board"}>
            {props.board.map((cell, index)=>{
                return <Cell isWinnerSign={props.isWinnerSign} onClick={props.onClick} value={cell} key={index} id={index}/>
            })}
        </div>
    );
}
export default Board;