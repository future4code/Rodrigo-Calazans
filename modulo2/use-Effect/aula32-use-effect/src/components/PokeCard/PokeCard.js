import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";


export default function PokeCard() {
    const [pokemon, setPokemon] = useState({})

    const pegaPokemon = pokeName => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => {
                setPokemon(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        pegaPokemon()
    }, [pokemon])

    useEffect((prevProps) => {
        if (prevProps.pokemon !== pokemon) {
            pegaPokemon(pokemon);
        }
    })

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            )}
        </div>
    )

}