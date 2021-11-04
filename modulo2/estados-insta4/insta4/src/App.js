import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return <div>
      
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
     
        <Post
          nomeUsuario={'Thiago'}
          fotoUsuario={'https://img.freepik.com/fotos-gratis/retrato-de-um-cara-atletico-feliz-e-triunfante-com-biceps-maos-fortes-soco-e-gritando-sim-sorrindo-comemorando-a-vitoria-alcance-a-meta-ou-o-sucesso-torne-se-campeao-fique-de-pe-na-parede-branca_176420-33919.jpg?size=626&ext=jpg'}
          fotoPost={'https://s2.glbimg.com/H7rjzaqCQgEyz9ufwSzmYxQfzMA=/0x0:2048x1314/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/B/4/CpdjQ4SZANm1zQK9rIBw/pordosol.jpg'}
        />
      
        <Post
          nomeUsuario={'Luis'}
          fotoUsuario={'https://cdn.crello.com/api/media/medium/390546104/stock-photo-happy-man-white-shirt-standing'}
          fotoPost={'https://www.rbsdirect.com.br/imagesrc/27487601.jpg?w=1200&h=630&a=c&version=1575255600'}
        />
      </MainContainer>
    </div>
    
  }
}

export default App;
