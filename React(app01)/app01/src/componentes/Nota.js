import React from "react";

export default function Nota(props){
    return(
        <>
        <div>
            <label>Informe a nota {props.num}:</label>
            <input type="text" value={props.nota} onChange={(e) => props.setNota(e.target.value)}/>
        </div>
        </>
    )
}