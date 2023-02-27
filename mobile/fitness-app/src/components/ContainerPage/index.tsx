import { ScreenHeader } from './components/ScreenHeader';
import { Container, Wrapper } from './styles';

interface Props {
  hasHeader?: boolean;
  screenTitle?: string;
  children: React.ReactNode;
}

export const ContainerPage = ({
  hasHeader = false,
  screenTitle = undefined,
  children,
}: Props) => (
  <Container>
    {hasHeader && <ScreenHeader screenTitle={screenTitle} />}
    <Wrapper>{children}</Wrapper>
  </Container>
);
