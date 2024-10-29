import React from "react";
export default class BaseClasse extends React.Component {
    constructor(props) {
        // Para permitir o uso de props
        super(props)

        // State
        this.state = {
            canal: 'CFB Cursos',
            curso: 'React',
            ativo: true,
            nome: this.props.nomeAluno
        }
        this.status = this.props.status;

        // Bind dos metodos
        let ad = this.ativarDesativar.bind(this);

        // Instruções do contrutor
    }

    // Função para manipular o state
  ativarDesativar(){
    this.setState(
        (state) => {
            return{
                ativo: !this.state.ativo
            }
        }
    )
  }

  componentDidMount() {
    console.log('Componente de Classe montado');
  }

  componentDidUpdate() {
    console.log('Componente de Classe atualizado');
  }

  componentWillUnmount() {
    console.log('Componente de Classe desmontado');
  }

  render() {
    return (
       <>
        <h1>Componente de Classe</h1>
        {/*/ Chamada da função com bind */}
        <button onClick={() => this.ad}>Ativar/Desativar</button>
       </>
    )
  }
}