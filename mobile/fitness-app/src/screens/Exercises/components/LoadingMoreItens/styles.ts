import { ActivityIndicatorProps } from 'react-native';
import styled from 'styled-components/native';

interface LoadingProps extends ActivityIndicatorProps {}

export const Container = styled.View`
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator<LoadingProps>`
  background-color: ${({ theme }) => theme.colors.tertiary};
`;
