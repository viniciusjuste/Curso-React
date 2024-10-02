import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'

export default function App() {

  const vermelho = { color: '#f00' };
  const verde = { color: '#0f0' };
  const azul = { color: '#00f' };

  const [cor, setCor] = useState(1);

  const retCor = (c) => {
    if (c == 1) {
      return vermelho
    } else if (cor == 2) {
      return verde
    } else {
      return azul
    }
  }

  const mudaCor = () => {
    setCor(cor + 1)
   if(cor > 2){
    setCor(1)
   }
  }

  setInterval(mudaCor, 1000);

  return (
    <>
      <h1 style={retCor(cor)}>CFB Cursos</h1>
      <button onClick={() => mudaCor()}>Mudar cor</button>
    </>
  )
}
