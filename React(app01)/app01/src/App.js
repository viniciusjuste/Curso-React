import React, { useEffect } from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Carro from "./componentes/Carro";
import BaseClasse from "./componentes/BaseClasse";

export default function App() {

  const [carro, setCarro] = useState(true);

  const mostrarOcultarCarro = () => {
    setCarro(!carro);
  }

  return (
    <>
      <h1>Componentes de classe</h1>
      {carro ? <Carro /> : null}
      
      <button onClick={() => mostrarOcultarCarro()}>Ocultar</button>

      <BaseClasse/>
    </>
  )

}
