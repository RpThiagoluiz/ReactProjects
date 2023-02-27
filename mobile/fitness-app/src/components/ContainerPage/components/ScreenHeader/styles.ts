import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  align-items: center;
  padding: ${RFPercentage(5)}px;
  border-radius: ${RFValue(5)}px;
  margin: 10px 0 5px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(26)}px;
`;
