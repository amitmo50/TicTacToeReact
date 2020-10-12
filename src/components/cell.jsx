import React from "react";

const Cell = ({id, value, onClick,isWinnerSign}) => {
   
    return(
        <div onClick={() => {onClick(id)}} id={id} className={isWinnerSign(id)}>{value}</div>
    );
}

export default Cell;


