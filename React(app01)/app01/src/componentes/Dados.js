import React from "react";

export default function Dados(props) {
    const n1 = 20;
    const n2 = 30;
    return (
        <section>
            <p>Canal: {props.canal}</p>
            <p>YouTube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <p>{'O valor da soma de ' + n1 + ' e ' + n2 + ' é igual a ' + props.soma(n1, n2)}</p>
        </section>
    )
}