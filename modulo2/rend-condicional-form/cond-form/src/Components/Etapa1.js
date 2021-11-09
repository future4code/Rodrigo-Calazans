import React from "react";
import styled from "styled-components";

const Pagina = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
`


export default class Etapa1 extends React.Component {

    render() {

        return (
            <Pagina>
                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <p>1. Qual o seu nome?</p>
                <input/>
                <p>2. Qual a sua idade?</p>
                <input/>
                <p>3. Qual o seu email?</p>
                <input/>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                    <option value="Ensino médio completo">Ensino médio completo</option>
                    <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                    <option value="Ensino superior completo">Ensino superior completo</option>
                </select>

            </Pagina>
        )
    }
}

