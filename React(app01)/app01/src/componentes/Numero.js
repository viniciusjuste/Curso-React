import React from "react";

export default function Numero(props) {
    return (
        <>
            <p>
                <p>Valor do state num em numero: {props.num}</p>
                <button onClick={() => props.setNum(props.num + 10)}>Soma 10</button>

                <p>Valor do state nome: {props.nome}</p>
                <button onClick={() => props.setNome('Vini')}>Mudar nome</button>
            </p>
        </>
    )
}