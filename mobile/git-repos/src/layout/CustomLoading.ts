import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

const loadingColor = "#FFD369";

export const CustomLoading = styled(ActivityIndicator).attrs({
  color: loadingColor,
  size: "large",
})``;
