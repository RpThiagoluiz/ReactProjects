import styled from "styled-components";
import { pokemonTypeColors } from "@/utils/pokemonTypeColors";

type pokemonType = typeof pokemonTypeColors;

type PokemonType = {
  type: keyof pokemonType;
};

export const TypeIcon = styled.img<PokemonType>`
  width: 24px;
  border-radius: 50%;
  background-color: ${({ type }) => pokemonTypeColors[type].colorBck};
  padding: 4px;
`;
