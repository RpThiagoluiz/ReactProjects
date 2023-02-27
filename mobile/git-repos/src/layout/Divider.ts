import { RFValue } from "react-native-responsive-fontsize";
import styled, { DefaultTheme } from "styled-components/native";

interface Props {
  color?: keyof DefaultTheme["COLORS"];
}

export const Divider = styled.View<Props>`
  height: ${RFValue(1)}px;
  background-color: ${({ theme, color = "FONT_LIGHT" }) => theme.COLORS[color]};
  margin-left: 60px;
`;
