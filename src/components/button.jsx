import React from "react"

const Button = (props) => {
    return(
        <div style={{display: props.isEndGame?"block": "none"}} className="restart">
            <button className="restart-button">Restart Game</button>
        </div>
    );
}

export default Button; 