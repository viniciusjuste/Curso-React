import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'

export default function App() {

  const carros = ['HRV', 'Golf', 'Focus', 'Cruze', 'Argo'];
  const listaCarros = carros.map(
    (c, i) => 
    <li key={i}>{i}-{c}</li>
  )

  return (
    <>
     <ul>{listaCarros}</ul>
    </>
  )
}
