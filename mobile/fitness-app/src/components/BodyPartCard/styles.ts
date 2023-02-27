import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IsActiveProps {
  isActive: boolean;
}

export const PressableButton = styled.Pressable<IsActiveProps>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.gray};
  border-bottom-width: 2px;
  padding-bottom: 5px;
  margin-right: ${RFValue(20)}px;
  align-items: center;
`;

export const Title = styled.Text<IsActiveProps>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(24)}px;
  text-transform: capitalize;
`;
