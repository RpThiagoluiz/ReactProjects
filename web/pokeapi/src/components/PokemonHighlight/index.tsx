import { useHighlightPokemon } from "@/hooks/useHighlightPokemon";
import * as S from "./styles";

export const PokemonHighlight = () => {
  const { highlightedPokemon } = useHighlightPokemon();

  console.log({ highlightedPokemon });

  if (!highlightedPokemon) {
    return null;
  }

  return <S.Container>{highlightedPokemon.name}</S.Container>;
};

// se não tiver escolha ele vai ficar flutuando
// ele sempre acompanha o scroll
