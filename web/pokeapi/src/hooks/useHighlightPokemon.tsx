import { HighlightPokemonContext } from "@/context/highlightPokemon";
import { useContext } from "react";

export const useHighlightPokemon = () => useContext(HighlightPokemonContext);
