import React from "react";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/TelaListaUsuario";

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolhaTela = () => {
    switch (this.state.telaAtual) {
      case "cadastro":
        return <TelaCadastro changeLista= {this.changeLista}/>
      case "lista":
        return <TelaListaUsuario changeCadastro= {this.changeCadastro}/>     
      default:
        return <div>Erro! Pagina não encontrada:</div>
    }
  }

  changeCadastro = () => {
    this.setState({ telaAtual: "cadastro"})
  }

  changeLista = () => {
    this.setState({ telaAtual: "lista"})
  }

  render() {
    return (
      <div>
        {this.escolhaTela()}
      </div>
    )
  }
}


