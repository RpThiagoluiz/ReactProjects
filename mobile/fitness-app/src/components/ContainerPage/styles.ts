import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.tertiary};
  padding: ${RFValue(10)}px;
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: ${RFValue(15)}px ${RFValue(25)}px ${RFValue(0)}px;
  border-radius: ${RFValue(5)}px;
`;
