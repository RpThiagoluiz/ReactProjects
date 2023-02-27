import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 6px 0;
`;

export const BackIcon = styled(SimpleLineIcons).attrs({
  name: "arrow-left",
  size: RFValue(18),
})`
  color: ${({ theme }) => theme.COLORS.YELLOW_400};
  margin-right: 12px;
`;
