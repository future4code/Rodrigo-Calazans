import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
`


export default class Etapa3 extends React.Component {

    render() {

        return (
            <Pagina>
                <h1>ETAPA 3 - INFORMAÇOES GERAIS DE ENSINO</h1>
                <p>5. Por que você não terminou um curso de graduaçao?</p>
                <input/>
                <p>6. Voce fez algum curso complementar?</p>
                <select>
                    <option value="Nenhum">Nenhum</option>
                    <option value="Curso Tecnico">Curso Tecnico</option>
                    <option value="Curso de Ingles">Curso de Ingles</option>
                </select>

            </Pagina>
        )
    }
}