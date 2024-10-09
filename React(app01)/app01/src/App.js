import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'
import Nota from "./componentes/Nota";
import Resultado from "./componentes/Resultado";
import Caixa from "./componentes/Caixa";
import Canal from "./componentes/Canal";

export default function App() {

  return (
    <>
     <Caixa site='www.cfbcursos.com.br'>
      <Canal/>
      <p>Curso de React</p>
     </Caixa>
    </>
  )
}
