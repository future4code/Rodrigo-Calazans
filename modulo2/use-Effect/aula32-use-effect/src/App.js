import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import PokeCard from "./components/PokeCard/PokeCard";
import React from "react";


function App() {
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokename] = useState("")

  const pegarLista = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(res => {
        setPokelist(res.data.results)
      })
      .catch(err => {
        console.log(err);
      })
  }

  const changePokeName = (event) => {
    setPokename(event.target.value)
  }

  useEffect(() => {
    pegarLista();
  }, [pokeList])

  return (
    <div className="App">
      {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {/* renderizando a lista de pokemons como opções do select */}
        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  )

}

export default App;
