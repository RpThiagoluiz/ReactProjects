import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  children: React.ReactNode;
}

export function ButtonTouchableOpacity({ children, ...rest }: Props) {
  const { colors } = useTheme();
  return (
    <Container
      start={{ x: 0.3, y: 0.2 }}
      colors={[colors.tertiary, colors.secondary, colors.primary]}
    >
      <TouchableOpacity {...rest}>{children}</TouchableOpacity>
    </Container>
  );
}
