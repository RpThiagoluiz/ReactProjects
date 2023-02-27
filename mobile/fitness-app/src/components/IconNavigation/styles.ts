import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';

interface IconProps {
  focused: boolean;
}

export const Container = styled.View``;

export const Icon = styled(AntDesign)<IconProps>`
  color: ${({ theme,focused }) => focused ? theme.colors.primary : theme.colors.quaternary};
`;
