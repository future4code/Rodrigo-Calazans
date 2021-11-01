import foto from "./img/saque.jpeg"
import './App.css';



function App() {
  const clicou = () =>{
    alert("Bom dia")
  }

  const texto = "Esse é nosso primeiro site React! ihuuuul"

  return (
    <div className="container">
      <h1>Ola eu sou o Rodrigo !</h1>
      <img className="foto" src={foto} />
      <p>{texto}</p>
      <button onClick={clicou}>Clique Aqui</button>
    </div>
  );
}

export default App;
