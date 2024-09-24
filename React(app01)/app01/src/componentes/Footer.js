import React from "react";

// Para exportar uma fução ela deve estar no escopo global
export function getDate() {
    return new Date().getFullYear();
}

export default function Footer(props) {

    return (
        <>
            <p>{props.copy} {props.date} {props.direitos}</p>
        </>
    )
}