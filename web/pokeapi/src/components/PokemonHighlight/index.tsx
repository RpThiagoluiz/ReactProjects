import { useFetchPokemonDetails } from "@/hooks/useFetchPokemonDetails";
import { useHighlightPokemon } from "@/hooks/useHighlightPokemon";
import { baseUrl } from "@/services/urls";
import * as S from "./styles";

export const PokemonHighlight = () => {
  const { highlightedPokemon } = useHighlightPokemon();

  if (!highlightedPokemon) {
    return <S.Container>TODO: DEFAULT</S.Container>;
  }

  return <S.Container>{highlightedPokemon.name}</S.Container>;
};

// se não tiver escolha ele vai ficar flutuando
// ele sempre acompanha o scroll
