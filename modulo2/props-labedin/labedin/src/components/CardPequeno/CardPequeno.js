import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <div>
                <img src={ props.imagem } />
                <h4>Email: { props.email }</h4>
            </div>

            <div>
                <img src={ props.imagem2 } />
                <h4>Endereço: { props.endereco }</h4>
            </div>
        </div>
    )
}

export default CardPequeno;