import { EvilIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInput as NativeTextInput } from "react-native";
import styled, { css } from "styled-components/native";

interface ContainerProps {
  disabled: boolean;
}

export const Container = styled.View<ContainerProps>`
  padding: 12px 6px;
  margin: 24px 0;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_400};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`;

export const SearchIcon = styled(EvilIcons).attrs(() => ({
  size: RFValue(18),
  name: "search",
}))`
  margin: 0 5px;
`;

export const TextInput = styled(NativeTextInput)`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.COLORS.FONT};
  height: ${RFValue(16)}px;
  flex: 1;
`;
