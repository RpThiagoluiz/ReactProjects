import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.logo};
  text-shadow: ${({ theme }) => `1px 1px 2px ${theme.colors.secondary}`};
  font-size: ${RFValue(75)}px;
  line-height: ${RFValue(80)}px;
`;

export const ImageLogo = styled.Image`
  width: ${RFPercentage(40)}px;
  height: ${RFPercentage(40)}px;
  object-fit: contain;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.black_medium};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(30)}px;
`;
