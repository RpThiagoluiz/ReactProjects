import { type PokemonGenericResponse } from "@/@types/pokemonApiResponse";
import { PokemonCard } from "./PokemonCard";
import * as S from "./styles";

interface Props {
  pokemons: PokemonGenericResponse[];
}

export const PokemonList = ({ pokemons }: Props) => {
  return (
    <S.Container>
      {pokemons?.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </S.Container>
  );
};
