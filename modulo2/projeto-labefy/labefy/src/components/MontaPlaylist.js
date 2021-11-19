import React from "react"
import styled from "styled-components"

const CardPlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;

`

export default class MontaPlaylist extends React.Component {
    state= {
        nome: "",
        artista: "",
        url: ""
    }

    onChangeNome = (event) => {
        this.setState({ nome: event.target.value })
    }

    onChangeArtista = (event) => {
        this.setState({ artista: event.target.value })
    }

    onChangeUrl = (event) => {
        this.setState({ url: event.target.value })
    }

    render() {
  
      return (
          <CardPlaylist>
              <h1>Monta Playlist</h1>
              <input
                placeholder= "Nome"
                value={this.state.nome}
                onChange={this.onChangeNome}
              />
              <input
                placeholder= "Artista"
                value={this.state.artista}
                onChange={this.onChangeArtista}
              />
              <input
                placeholder= "Url"
                value={this.state.url}
                onChange={this.onChangeUrl}
              />
          </CardPlaylist>
      )
    }
  }