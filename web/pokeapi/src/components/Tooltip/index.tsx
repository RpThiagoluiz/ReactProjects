import * as S from "./styles";

interface Props {
  text: string;
  children: React.ReactNode;
}
export const Tooltip = ({ text, children }: Props) => (
  <S.TooltipContainer>
    {children}
    <S.TooltipText>{text}</S.TooltipText>
  </S.TooltipContainer>
);
