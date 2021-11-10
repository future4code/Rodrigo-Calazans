import React from "react"
import styled from "styled-components"


const BalaoConversa = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 500px;
`


class App extends React.Component {
  state = {
    balao: [
      {
        nome: "",
        mensagem: ""
      }
    ],

    inputNome: "",
    inputMensagem: ""
  }

  novaConversa = () => {
    const conversa = {
      nome: this.state.inputNome,
      mensagem: this.state.inputMensagem
    }
    const novoBalao = [this.state.balao, conversa]
    this.setState({ balao: novoBalao })
  }

  guardaNome = (event) => {
    this.setState({ inputNome: event.target.value })
  }

  guardaMensagem = (event) => {
    this.setState({ inputMensagem: event.target.value })
  }

  render() {
    const listaBaloes = this.state.balao.map((objeto) => {
      return (
        <BalaoConversa>
          <p><h3>{objeto.nome}:</h3> {objeto.mensagem} </p>
        </BalaoConversa>
      )
    })

    return (
      <div>
      { listaBaloes },

      < input
          value={this.state.inputNome}
          onChange={this.guardaNome}
          placeholder="Nome"
      />
      </div>
    )

  }






}

export default App;
