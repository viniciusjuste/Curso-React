import React, { useEffect } from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'
import Nota from "./componentes/Nota";
import Resultado from "./componentes/Resultado";
import Caixa from "./componentes/Caixa";
import Canal from "./componentes/Canal";

export default function App() {

  const [nome, setNome] = useState();

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  }

  const consultar = (chave) => {
    alert(localStorage.getItem(chave));
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave);
  }

  return (
    <>
      <label>Digite um nome</label>
      <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
      <button onClick={() => armazenar('ls_nome', nome)}>Gravar nome</button>
      <button onClick={() => consultar('ls_nome')}>Ver nome</button>
      <button onClick={() => apagar('ls_nome')}>Remover nome</button>
    </>
  )
}
