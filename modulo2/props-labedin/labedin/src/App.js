import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';


const icones = style.img




function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://pbs.twimg.com/profile_images/1381213424424775683/NcfnTC0W_400x400.jpg"         
          descricao="Oi, eu sou o Rodrigo. Sou um aluno da labenu, estou amando aprender a programar, e meus hobbies são jogar um lolzinho e praticar Beach Tennis."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
          email="Rodrigoocalazans@gmail.com"
          imagem2="https://i.pinimg.com/736x/f0/c7/b9/f0c7b9489446715cae72085a470f0ed9.jpg"
          endereco="Rua Mateus Pocone, 30"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="IR3 Invest" 
          descricao="Fui analista de investimento pelo periodo de um ano, onde eu captava clientes para investir em renda variavel." 
        />
        
        <CardGrande 
          imagem="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F119096040_640723266638752_9163143526057879625_n.jpg%3Fccb%3D11-4%26oh%3D6d13e25e466d966122290419be2e5075%26oe%3D6186D621&t=l&u=557996564861%40c.us&i=1599945972&n=DV9FQLRZr5u%2FmCKnf%2F3GicTwxCcXhURgquyhtN4HtSE%3D" 
          nome="Bella Cosmeticos" 
          descricao="Fui caixa e gerente de estoque pelo periodo de 5 anos" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
