import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
`


export default class Etapa2 extends React.Component {

    render() {

        return (
            <Pagina>
                <h1>ETAPA 2 - INFORMAÇOES DO ENSINO SUPERIOR</h1>
                <p>5. Qual curso?</p>
                <input/>
                <p>6. Qual a unidade de ensino?</p>
                <input/>

            </Pagina>
        )
    }
}