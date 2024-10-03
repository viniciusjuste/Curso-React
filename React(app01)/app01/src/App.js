import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'

export default function App() {

  const [nome, setNome] = useState('');
  const [carro, setCarro] = useState('HRV')


  return (
    <>
      <label>Digite seu nome:</label>
      <input type="text" name="f_nome" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Digite seu nome" />
      <p>Nome digitado: {nome}</p>

      <label>Selecione um carro:</label>
      <select value={carro} onChange={(e) => setCarro(e.target.value)}>
        <option value='Golf'>Golf</option>
        <option value='HRV'>HRV</option>
        <option value='Prisma'>Prisma</option>
      </select>
      <p>Carro selecionado: {carro}</p>
    </>
  )
}
