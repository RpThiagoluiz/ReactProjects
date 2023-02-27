import Logo from '@assets/images/logo.webp';
import { ContainerPage } from '@components/ContainerPage';
import { type ExercisesStackRoutesProps } from '@routes/ExercisesStackRoutes';
import { ExerciseDescription } from './components/ExerciseDescription';
import {
  ImageBackgroundContainer,
  ImageWrapper,
  Image,
  Title,
  Button,
  ButtonTitle,
  ButtonIcon,
} from './styles';

export const ExercisesDetails = ({
  route,
}: ExercisesStackRoutesProps<'ExercisesDetails'>) => {
  const exercise = route.params.exercise;

  return (
    <ContainerPage>
      <ImageBackgroundContainer
        source={Logo}
        resizeMode="contain"
        imageStyle={{
          width: '80%',
          height: '80%',
          opacity: 0.08,
          position: 'absolute',
          top: 200,
          left: 30,
        }}
      >
        <Title>{exercise.name}</Title>
        <ImageWrapper>
          <Image resizeMode="contain" source={{ uri: exercise.gifUrl }} />
        </ImageWrapper>

        <ExerciseDescription exercise={exercise} />

        <Button
          onPress={() => {
            console.log(`Select where day this exercise will be favorite`);
          }}
        >
          <ButtonTitle>Favorite</ButtonTitle>
          <ButtonIcon name="star" />
        </Button>
      </ImageBackgroundContainer>
    </ContainerPage>
  );
};
