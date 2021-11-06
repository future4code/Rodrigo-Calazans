import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'Thiago',
        fotoUsuario: 'https://img.freepik.com/fotos-gratis/retrato-de-um-cara-atletico-feliz-e-triunfante-com-biceps-maos-fortes-soco-e-gritando-sim-sorrindo-comemorando-a-vitoria-alcance-a-meta-ou-o-sucesso-torne-se-campeao-fique-de-pe-na-parede-branca_176420-33919.jpg?size=626&ext=jpg',
        fotoPost: 'https://s2.glbimg.com/H7rjzaqCQgEyz9ufwSzmYxQfzMA=/0x0:2048x1314/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/4/CpdjQ4SZANm1zQK9rIBw/pordosol.jpg'
      },
      {
        nomeUsuario: 'Luis',
        fotoUsuario: 'https://cdn.crello.com/api/media/medium/390546104/stock-photo-happy-man-white-shirt-standing',
        fotoPost: 'https://www.rbsdirect.com.br/imagesrc/27487601.jpg?w=1200&h=630&a=c&version=1575255600'
      }
    ],
    valorInputNome: "",
    valorInputFoto: "",
    valorInputPost: ""
  }


  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputPost
    };

    const novosPosts = [...this.state.posts.novoPost];

    this.setState({ posts: novosPosts })
  }

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  }

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.targe.value })
  }

  onChangeInputPost = (event) => {
    this.setState({ valorInputPost: event.targe.value })
  }



  render() {
    return <div>
      <MainContainer>
        <h1>Novo Post:</h1>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />

        <input
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"Foto do usuario"}
        />

        <input
          value={this.state.valorInputPost}
          onChange={this.onChangeInputPost}
          placeholder={"Foto do Post"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>
      </MainContainer>

      <MainContainer>
        {this.state.posts.map((objeto) => {
          return (
            <Post
              nomeUsuario={objeto.nomeUsuario}
              fotoUsuario={objeto.fotoUsuario}
              fotoPost={objeto.fotoPost}
            />
          )
        })
        }
      </MainContainer>
    </div>

  }
}

export default App;
