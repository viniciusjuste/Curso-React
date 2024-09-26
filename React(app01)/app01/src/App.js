import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Numero from "./componentes/Numero";
import Relogio from "./componentes/Relogio";
import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo";
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

export default function App() {
  const [num, setNum] = useState(10) // State
  const [nome, setNome] = useState('Sem nome');

  return (
    <>
      <p>Valor do state num em App: {num}</p>
      <p>Nome: {nome}</p>
      <Numero num={num} setNum={setNum} setNome={setNome} nome={nome} />
    </>
  )
}
