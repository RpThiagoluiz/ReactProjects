import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

const bckColor = "#222831";
const loadingColor = "#FFD369";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${bckColor};
`;

export const Loading = styled(ActivityIndicator).attrs({
  size: "large",
  color: loadingColor,
})``;
