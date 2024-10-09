import React from "react";

export default function Nota(props) {
    return (
        <>
            <div>
                <label>Informe a nota {props.num}:</label>
                <input type="text" name={props.nome} value={props.nota} onChange={(e) => props.setNota(e)} />
            </div>
        </>
    )
}