import { AntDesign } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import styled from 'styled-components/native';

export const ImageBackgroundContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  margin-top: 15px;
`;

export const ImageWrapper = styled.View`
  margin-top: 15px;
  border: ${({ theme }) => `2px ${theme.colors.secondary} solid`};
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.secondary_light};
`;

export const Image = styled.Image`
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(35)}px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(22)}px;
`;

export const Button = styled(ButtonTouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonTitle = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22)}px;
`;

export const ButtonIcon = styled(AntDesign)`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(22)}px;
  color: ${({ theme }) => theme.colors.gray};
`;
