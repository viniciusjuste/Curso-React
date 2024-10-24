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
        this.setState(
            (state) => {
                return {
                    ligado: true
                }
            }
        )
    }

    desligar() {
        this.setState(
            (state) => {
                return {
                    ligado: false
                }
            }
        )
    }

    acelerar() {
        this.setState(
            (state, props) => {
                return {
                    velAtual: state.velAtual + this.props.fator
                }
            }
        )
    }

    freiar() {
        this.setState(
            (state, props) => {
                return {
                    velAtual: this.state.velAtual = 0
                }
            }
        )
    }

    render() {
        return (
            <>
                <h1>Meu carro</h1>
                <p>Modelo: {this.modelo}</p>
                <p>Ligado: {this.state.ligado ? 'Sim' : 'Não'}</p>
                <p>Velocidade: {this.state.velAtual}</p>
                <button onClick={() => this.state.ligado ? this.desligar() : this.ligar()}>{this.state.ligado ? 'Desligar' : 'Ligar'}</button>
                <button onClick={() => this.state.velAtual < 10 ? this.acelerar() : this.freiar()}>{this.state.velAtual < 10 ? 'Acelerar' : 'Freiar'}</button>
            </>
        )
    }
}

export default Carro