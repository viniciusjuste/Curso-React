import React from "react";
import './App.css' // É assim que se importa o arquivo CSS
import Relogio from "./componentes/Relogio";
import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo";
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

export default function App() {

  const textoDestaque = {
    color: '#00f',
    fontSize: '3em'
  }

  return (
    <>
      <section className="caixa">
        <Relogio />
        <h1 style={{ color: '#f00', fontSize: '5em' }}>CFB Cursos</h1>
        <h2 style={textoDestaque}>Curso de React</h2>
        <p className="texto">Se inscreva em nosso canal e nos siga no instagram</p>
        <a href="https://www.youtube.com/cfbcursos" target="_blank">CFB cursos</a>
      </section>
    </>
  )
}
