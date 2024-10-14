import React from "react";

class Classe extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
           <>
            <h1>Primeiro componente de Classe</h1>
            <p>Canal: {this.props.canal}</p>
           </>
        )
    }
}

export default Classe