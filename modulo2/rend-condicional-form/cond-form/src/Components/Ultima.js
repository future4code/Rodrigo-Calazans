import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
`


export default class Ultima extends React.Component {

    render() {

        return (
            <Pagina>
                <h1>O FORMULÁRIO ACABOU</h1>
                <h3>Muito obrigado por participar! Entraremos em contato!</h3>               

            </Pagina>
        )
    }
}