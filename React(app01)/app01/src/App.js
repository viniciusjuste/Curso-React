import React, { useEffect } from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Carro from "./componentes/Carro";

export default function App() {

  return (
    <>
      <h1>Componentes de classe</h1>
      <Carro fator={1}/>
    </>
  )

}
