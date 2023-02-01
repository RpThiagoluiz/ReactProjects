import { PokemonDetailsResponse } from "@/@types/pokemonApiResponse";
import { useHighlightPokemon } from "@/hooks/useHighlightPokemon";
import { DefaultHighlight } from "./components/DefaultHighlight";
import * as S from "./styles";

export const PokemonHighlight = () => {
  const { highlightedPokemon } = useHighlightPokemon();

  if (!highlightedPokemon) {
    return <DefaultHighlight />;
  }

  return (
    <S.Container>
      <S.ContainerPokemonInfo>
        <S.PokemonName>{highlightedPokemon.name}</S.PokemonName>
      </S.ContainerPokemonInfo>
      <S.ContainerPokemonImage>
        <S.ContainerPokemonImage>
          <S.Image
            src={
              highlightedPokemon.sprites.front_shiny ??
              highlightedPokemon.sprites.front_default
            }
            alt={`Image of ${highlightedPokemon?.name}`}
          />
        </S.ContainerPokemonImage>
      </S.ContainerPokemonImage>
    </S.Container>
  );
};

// se não tiver escolha ele vai ficar flutuando
// ele sempre acompanha o scroll
