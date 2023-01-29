import PokeballSvg from "@/assets/pokeball/pokeball.svg";
import * as S from "./styles";

interface Props {
  size?: number;
}

export const Loading = ({ size = 120 }: Props) => (
  <S.LoadingContainer>
    <S.Image src={PokeballSvg} alt="Pokeball Image" size={size} />
  </S.LoadingContainer>
);
