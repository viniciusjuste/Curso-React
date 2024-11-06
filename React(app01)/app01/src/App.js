import React, { useEffect } from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Carro from "./componentes/Carro";
import BaseClasse from "./componentes/BaseClasse";
import Globais from "./componentes/Globais";
import Info from "./componentes/Info";
import Pagina1 from "./componentes/Pagina 1";
import Pagina2 from "./componentes/Pagina 2";

const carros = [
  { categoria: 'Esporte', preco: '12000', modelo: 'Jeep' },
  { categoria: 'Esporte', preco: '35000', modelo: 'Ferrari' },
  { categoria: 'SUV', preco: '4000', modelo: 'HRV' },
  { categoria: 'SUV', preco: '5000', modelo: 'T-cross' },
  { categoria: 'Utilitario', preco: '8000', modelo: 'Cruze' },
  { categoria: 'Utilitario', preco: '9000', modelo: 'Onix' }
]

const pesquisarCategoria = (cat, scat) => {
  return (
    <div>
      <label>Informe a categoria:</label>
      <input type="text" name={cat} value={cat} onChange={(e) => scat(e.target.value)} />
    </div>
  )
}

export default function App() {

  const [categoria, setCategoria] = useState('');

  const linhas = (cat) => {

    const li = [];
    carros.forEach((carro, index) => {
      if (carro.categoria.toUpperCase() === cat.toUpperCase() || cat.toUpperCase() === '') {
        li.push(
          <tr key={index}>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    })

    return li
  }

  const tabelaCarros = (cat) => {
    return (
      <table border='1' style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>Preço</th>
            <th>Modelo</th>
          </tr>
        </thead>

        <tbody>
          {linhas(cat)}
        </tbody>
      </table>
    )
  }

  return (
    <>
      {pesquisarCategoria(categoria, setCategoria)}
      {tabelaCarros(categoria)}
    </>
  )

}
