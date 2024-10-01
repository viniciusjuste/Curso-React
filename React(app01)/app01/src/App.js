import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'

export default function App() {

  const [Ligado, setLigado] = useState(false)

  const cancelar = (obj) => {
    return obj.preventDefault();
  }

  return (
    <>
      <Led ligado={Ligado} setLigado={setLigado} />
      <a href="http://www.youtube.com/cfbcursos" target="_blank" onClick={(e) => cancelar(e)}>CFB Cursos</a>
    </>
  )
}
