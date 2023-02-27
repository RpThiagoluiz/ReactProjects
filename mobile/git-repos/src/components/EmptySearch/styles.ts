import styled from "styled-components/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  height: ${RFValue(300)}px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px 0;
`;

export const SearchOffIcon = styled(FontAwesome5).attrs({
  name: "searchengin",
  size: RFValue(52),
})`
  color: ${({ theme }) => theme.COLORS.YELLOW_400};
  margin-bottom: 15px;
`;
