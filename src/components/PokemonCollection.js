import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemons }) {
  

  const pokemonCardInfo = pokemons.map((pokemon) => (
    <PokemonCard 
      key={pokemon.id}
      name={pokemon.name}
      hp={pokemon.hp}
      sprites={pokemon.sprites}
      pokemon={pokemon}
      
         
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemonCardInfo}
    </Card.Group>
  );
}

export default PokemonCollection;
