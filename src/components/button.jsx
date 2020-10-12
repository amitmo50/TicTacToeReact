import React from "react"

const Button = (props) => {
    return(
        <div style={{display:props.isEndGame?"block":"none"}} className="restart">
            <button onClick={props.restartGame} className="restart-button">Restart Game</button>
        </div>
    );
}

export default Button; 