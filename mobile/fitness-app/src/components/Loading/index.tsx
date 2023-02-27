import LottieView from 'lottie-react-native';
import FitnessLoading from '@assets/lottie/fitnessLoading.json';
import { Container } from './styles';

interface Props {
  width?: number;
}

export const Loading = ({ width = 150 }: Props) => {
  return (
    <Container>
      <LottieView style={{ width }} source={FitnessLoading} autoPlay loop />
    </Container>
  );
};
