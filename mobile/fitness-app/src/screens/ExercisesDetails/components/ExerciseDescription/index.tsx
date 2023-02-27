import { Divider } from '@components/Divider';
import { type ExercisesType } from '@interface/ExerciseType';
import {
  Container,
  DescriptionTitleWrapper,
  DescriptionTitle,
  DescriptionContainer,
  Title,
  Description,
} from './styles';

interface Props {
  exercise: ExercisesType;
}

export const ExerciseDescription = ({ exercise }: Props) => {
  return (
    <Container>
      <DescriptionTitleWrapper>
        <DescriptionTitle>Description</DescriptionTitle>
        <Divider size="small" color="primary" />
      </DescriptionTitleWrapper>
      <DescriptionContainer>
        <Title>BodyPart:</Title>
        <Description>{exercise.bodyPart}</Description>
      </DescriptionContainer>

      <DescriptionContainer>
        <Title>Equipment:</Title>
        <Description>{exercise.equipment}</Description>
      </DescriptionContainer>

      <DescriptionContainer>
        <Title>Target:</Title>
        <Description>{exercise.target}</Description>
      </DescriptionContainer>
    </Container>
  );
};
