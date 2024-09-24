import React from "react";
import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo";
import Footer, { getDate } from "./componentes/Footer"; // Importei o Footer e uma função que retorna o ano atual

export default function App() {

  return (
    <>
      <Header />
      <Corpo />
      <Footer copy='&copy' date={getDate()} direitos='sua Empresa. Todos os direitos reservados.' />
    </>
  )
}
