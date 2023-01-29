import { createContext, useState } from "react";
import { type PokemonDetailsResponse } from "@/@types/pokemonApiResponse";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  highlightedPokemon: PokemonDetailsResponse | null;
  handleHighlight: (pokemon: PokemonDetailsResponse) => void;
}

export const HighlightPokemonContext = createContext({} as ContextProps);

export const HighlightPokemonProvider = ({ children }: Props) => {
  const [highlightedPokemon, setHighlightedPokemon] =
    useState<PokemonDetailsResponse | null>(null);

  const handleHighlight = (pokemon: PokemonDetailsResponse) => {
    setHighlightedPokemon(pokemon);
  };

  return (
    <HighlightPokemonContext.Provider
      value={{
        highlightedPokemon,
        handleHighlight,
      }}
    >
      {children}
    </HighlightPokemonContext.Provider>
  );
};
