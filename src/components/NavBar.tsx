interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
  const handleclickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };
  const handleclickNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  return (
    <>
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handleclickPrevious}>
          Précédent
        </button>
      ) : (
        ""
      )}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleclickNext}>
          Suivant
        </button>
      ) : (
        ""
      )}
    </>
  );
}
export default NavBar;
