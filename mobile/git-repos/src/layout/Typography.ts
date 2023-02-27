import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

interface Props {
  bold?: boolean;
  fontSize?: number;
  color?: keyof DefaultTheme["COLORS"];
}

export const Typography = styled.Text<Props>`
  color: ${({ theme, color = "FONT" }) => theme.COLORS[color]};
  font-size: ${(props) => RFValue(props.fontSize ?? 12)}px;
  font-family: ${(props) =>
    props.bold ? props.theme.FONTS.BOLD : props.theme.FONTS.REGULAR};
`;
