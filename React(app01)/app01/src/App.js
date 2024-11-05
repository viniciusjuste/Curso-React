import React, { useEffect } from "react";
import { useState } from "react"; // Tem que importar para usar State
import './App.css' // É assim que se importa o arquivo CSS
import Carro from "./componentes/Carro";
import BaseClasse from "./componentes/BaseClasse";
import Globais from "./componentes/Globais";
import Info from "./componentes/Info";

export default function App() {

  const [resumo, setResumo] = useState(Globais.resumo);

  const gravarResumo = () => {
    Globais.resumo = resumo;
  }

  const verResumo = () => {
    alert(Globais.resumo);
  }

  return (
    <>
     <Info/>
     <p>{'Canal ' + Globais.canal}</p>
     <p>{'Curso ' + Globais.curso}</p>
     <p>{'Ano ' + Globais.ano}</p>
     <input type="text" value={resumo} onChange={(e) => setResumo(e.target.value)} />
     <br/>
     <button onClick={() => verResumo()}>Ver Resumo</button>
     <button onClick={() => gravarResumo()}>Gravar Resumo</button>
    </>
  )

}
