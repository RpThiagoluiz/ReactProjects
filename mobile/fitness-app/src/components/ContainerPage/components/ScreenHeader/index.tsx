import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Title } from './styles';

interface Props {
  screenTitle?: string;
}

export const ScreenHeader = ({ screenTitle }: Props) => {
  const { colors } = useTheme();

  const PlatformStyles =
    Platform.OS === 'ios'
      ? {
          start: { x: 0.1, y: 0.2 },
          locations: [0.2, 0.1],
          colors: [colors.tertiary, colors.primary],
        }
      : {
          start: { x: 0.1, y: 0.2 },
          locations: [0.1, 0.9],
          colors: [colors.tertiary, colors.primary],
        };

  return (
    <Container
      start={PlatformStyles.start}
      colors={PlatformStyles.colors}
      locations={PlatformStyles.locations}
    >
      <Title>{screenTitle}</Title>
    </Container>
  );
};
