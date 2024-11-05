import React, { useEffect } from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Carro from "./componentes/Carro";
import BaseClasse from "./componentes/BaseClasse";
import Globais from "./componentes/Globais";
import Info from "./componentes/Info";
import Pagina1 from "./componentes/Pagina 1";
import Pagina2 from "./componentes/Pagina 2";

export default function App() {

  const [pagina, setPagina] = useState(0);

  useEffect(() => {
    const url = window.location.href;
    const urlSplit = url.split('?');
    setPagina(urlSplit[1]);
  })

  const retornarPagina = () => {
    if (pagina == 1) {
      return <Pagina1 />;
    } else if (pagina == 2) {
      return <Pagina2 />;
    } else {
      return (
        <div>
          <button onClick={() => linksPagina(1)}>Pagina 1</button>
          <button onClick={() => linksPagina(2)}>Pagina 2</button>
        </div>
      )
    }
  }

  const linksPagina = (number) => {
    return window.open(`http://localhost:3000?${number}`, `_self`)
  }

  return (
    <>
      {retornarPagina()}
    </>
  )

}
