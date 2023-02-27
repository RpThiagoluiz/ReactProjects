import { PressableButton, Title } from './styles';

interface Props {
  bodyPart: string;
  onPressBodyPart: (filterBy: string) => void;
  isActive: boolean;
}

export const BodyPartCard = ({
  onPressBodyPart,
  isActive,
  bodyPart,
}: Props) => {
  return (
    <PressableButton
      onPress={() => onPressBodyPart(bodyPart)}
      isActive={isActive}
    >
      <Title isActive={isActive}>{bodyPart}</Title>
    </PressableButton>
  );
};
