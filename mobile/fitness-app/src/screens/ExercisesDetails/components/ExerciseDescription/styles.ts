import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 50px;
`;

export const DescriptionTitleWrapper = styled.View`
  padding: 2px 0 25px;
`;

export const DescriptionTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(22)}px;
  line-height: ${RFValue(25)}px;
  margin-bottom: 5px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Title = styled.Text`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(20)}px;
`;

export const Description = styled.Text`
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(20)}px;
`;
