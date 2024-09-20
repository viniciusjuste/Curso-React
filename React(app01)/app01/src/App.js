import React from "react";
import Logo from './componentes/imgs/fatec.png';

export default function App() {

  const canal = () => {
    return 'CFB Drones'
  }

  function curso(nameCourse) {
    return 'Curso de ' + nameCourse
  }

  return (
    <>
      <section>
        <header>
          <p>{canal()}</p>
          <p>{curso('Java')}</p>
        </header>
        <section>
          <img src={Logo} />
          <img src="img/Minha-foto.jpeg" />
        </section>
      </section>
    </>
  )
}
