import { Container, Icon } from './styles';

interface Props {
  focused: boolean;
  name: 'dingding' | 'home' | 'calendar';
}

export const IconNavigation = ({ focused, name }: Props) => {
  return (
    <Container>
      <Icon name={name} size={24} focused={focused} />
    </Container>
  );
};
