import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState("")

  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(res => res.json())
    .then(data => setPokemons(data))
  },[])

  const filteredPokemons = pokemons.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase())
  })


  const handleSubmit = (newPokemon) => {
      fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {"Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: newPokemon.name,
      hp:newPokemon.hp,
      sprites:{
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    })
      })
      .then(response => response.json())
      .then(data => setPokemons(...pokemons, data))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      handleSubmit={handleSubmit}
      />
      <br />
      <Search 
      search={search}
      setSearch={setSearch}
      />
      <br />
      <PokemonCollection 
      pokemons={filteredPokemons} 
      />
    </Container>
  );
}

export default PokemonPage;
