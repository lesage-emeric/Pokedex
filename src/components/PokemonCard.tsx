interface Pokemon {
  name: string;
  imgSrc?: string;
}

function PokemonCard({ pokemon }: Pokemon) {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt="bulbasaur pokemon" />
      ) : (
        <p>???</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
