import React from "react";

class Carro extends React.Component {
    constructor(props) {
        super(props)
        this.modelo = 'Golf'
        this.state = {
            ligado: false,
            velAtual: 0
        }
    }

    ligar() {
        this.setState({ ligado: true })
    }

    desligar() {
        this.setState({ ligado: false })
    }

    render() {
        return (
            <>
                <h1>Meu carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade: {this.state.velAtual}</p>
                <button onClick={() => this.state.ligado ? this.desligar() : this.ligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button>
            </>
        )
    }
}

export default Carro