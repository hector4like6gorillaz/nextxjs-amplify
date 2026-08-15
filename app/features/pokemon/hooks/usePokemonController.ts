import usePokemon from "./usePokemon";

const usePokemonController = () => {
  const pokemon = usePokemon();
  return {
    //variables
    pokemon,
  };
};

export default usePokemonController;
