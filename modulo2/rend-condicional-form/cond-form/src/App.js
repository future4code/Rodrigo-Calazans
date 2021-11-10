import React from "react";
import styled from "styled-components";
import Etapa1 from "./Components/Etapa1";
import Etapa2 from "./Components/Etapa2";
import Etapa3 from "./Components/Etapa3";
import Ultima from "./Components/Ultima";


const Botao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100vw;
    align-items: center;
    margin: 10px;
`

export default class App extends React.Component {
  state = {
    etapa: 1,
  }

  irParaProximaEtapa = (etapa) => {
    const soma = etapa + 1
    return soma
  }

  render() {
    const renderizaEtapa = () =>{
      switch(this.state.etapa) {
        case 1:
          return <Etapa1/>
          
        case 2:
          return <Etapa2/>
          
        case 3:
          return <Etapa3/>
          
        case 4:
          return <Ultima/>   
      }
    }

    return (
      <div>
        <Botao>
          {this.renderizaEtapa()}
          <button onClick= {this.irParaProximaEtapa}>Próxima etapa</button>
        </Botao>
      </div>
    );
  }
}

