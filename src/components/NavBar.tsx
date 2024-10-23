import { useState } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
  return (
    <>
      {pokemonList.map((pokemon, index) => (
        <button
          key={pokemon.name}
          type="button"
          onClick={() => {
            setPokemonIndex(index);
            pokemon.name === "pikachu" ? alert("pika pikachu !!!") : "";
          }}
        >
          {pokemon.name}
        </button>
      ))}
    </>
  );
}
// const handleclickPrevious = () => {
//   setPokemonIndex(pokemonIndex - 1);
// };
// const handleclickNext = () => {
//   setPokemonIndex(pokemonIndex + 1);
// };
// return (
//   <>
//     {pokemonIndex > 0 ? (
//       <button type="button" onClick={handleclickPrevious}>
//         Précédent
//       </button>
//     ) : (
//       ""
//     )}
//     {pokemonIndex < pokemonList.length - 1 ? (
//       <button type="button" onClick={handleclickNext}>
//         Suivant
//       </button>
//     ) : (
//       ""
//     )}
//   </>
// );
export default NavBar;
