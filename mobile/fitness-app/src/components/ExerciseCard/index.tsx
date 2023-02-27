import { Divider } from '@components/Divider';
import { type ExercisesType } from '@interface/ExerciseType';
import {
  Container,
  ImageWrapper,
  Image,
  TitleWrapper,
  Title,
  Description,
} from './styles';

interface Props {
  data: ExercisesType;
  onPress: (item: ExercisesType) => void;
}

export const ExerciseCard = ({ onPress, data }: Props) => {
  return (
    <Container onPress={() => onPress(data)}>
      <Divider isVertical color="primary" size="large" />
      <ImageWrapper>
        <Image key={data.id} source={{ uri: data.gifUrl }} />
      </ImageWrapper>
      <Divider isVertical size="small" />
      <TitleWrapper>
        <Title>Target: {data.target}</Title>
        <Description>{data.name}</Description>
        <Description>Body part: {data.bodyPart}</Description>
      </TitleWrapper>
    </Container>
  );
};
