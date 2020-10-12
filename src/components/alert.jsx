import React from "react"

const Alert = (props) =>{
    return (
        <div style={{display:props.isEndGame?"block":"none"}} className={props.isWinner?"winner-message":"tie-message"}>{props.isWinner?`${props.winner} is the WINNER!!! 🎉`:'It is a Tie!! 🙀'}</div>
    );
}

export default Alert;