import React from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

import Led from './componentes/Led'

export default function App() {

  const [form, setForm] = useState({ "nome": "", "curso": "", "ano": "" });

  const handlFormChange = (e) => {
    if (e.target.getAttribute('name') == 'f_nome') {
      setForm({ "nome": e.target.value, "curso": form.curso, "ano": form.ano });
    } else if (e.target.getAttribute('name') == 'f_curso') {
      setForm({ "nome": form.nome, "curso": e.target.value, "ano": form.ano });
    } else {
      setForm({ "nome": form.nome, "curso": form.curso, "ano": e.target.value });
    }
  }

  return (
    <>
      <label>Nome:</label>
      <input type="text" name="f_nome" value={form.nome} onChange={(e) => handlFormChange(e)} placeholder="Digite seu nome" />

      <label>Curso:</label>
      <input type="text" name="f_curso" value={form.curso} onChange={(e) => handlFormChange(e)} placeholder="Digite seu curso" />

      <label>Ano:</label>
      <input type="text" name="f_ano" value={form.ano} onChange={(e) => handlFormChange(e)} placeholder="Digite seu ano" />

      <p>Nome digitado: {form.nome}</p>
      <p>Curso digitado: {form.curso}</p>
      <p>Ano digitado: {form.ano}</p>
    </>
  )
}
