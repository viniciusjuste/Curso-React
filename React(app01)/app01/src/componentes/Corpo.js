import React from "react";
import Dados from "./Dados";

export default function Corpo() {

    const cnl = () => {
        return 'CFB Cursos';
    }

    const somar = (v1, v2) => {
        return v1 + v2
    }

    const yt = 'youtube.com/cfbcursos';
    const crs = 'React'
    return (
        <section>
            <h2>Curso de React</h2>
            <p>Se inscreva em nosso canal</p>
            <p>Ative o sininho e clique no joinha</p>
            <Dados canal={cnl} youtube={yt} curso={crs} soma={somar} />
        </section>
    )
}