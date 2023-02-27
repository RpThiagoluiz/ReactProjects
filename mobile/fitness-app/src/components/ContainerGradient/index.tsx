import { useTheme } from 'styled-components';
import { Container } from './styles';

interface Props {
  children: React.ReactNode;
}

export function ContainerGradient({ children }: Props) {
  const { colors } = useTheme();

  return (
    <Container
      start={{ x: 0.1, y: 0.1 }}
      colors={[colors.primary, colors.secondary, colors.tertiary]}
    >
      {children}
    </Container>
  );
}
