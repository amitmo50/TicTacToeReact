import React from "react";

const Cell = (props) => {
    // const setValue = () => {
    //     props.updateFieldChanged(props.id)
    // }
    return(
        <div onClick={() => {
            props.onClick(props.id)
        }} id={props.id} className="cell">{props.value}</div>
    );
}

export default Cell;


