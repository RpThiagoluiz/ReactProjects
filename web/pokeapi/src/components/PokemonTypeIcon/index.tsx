import { pokemonTypeColors } from "@/utils/pokemonTypeColors";
import { pokemonTypeIcons } from "@/utils/pokemonTypeIcons";
import { Tooltip } from "../Tooltip";
import * as S from "./styles";

type pokemonType = typeof pokemonTypeColors;

type Props = {
  type: keyof pokemonType;
};

export const PokemonTypeIcon = ({ type }: Props) => {
  return (
    <Tooltip text={type}>
      <S.TypeIcon
        type={type ?? "default"}
        src={pokemonTypeIcons[type] ?? pokemonTypeIcons.default}
        alt={`Pokemon ${type} svg`}
      />
    </Tooltip>
  );
};
