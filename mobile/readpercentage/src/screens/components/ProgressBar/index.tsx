import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Animated, { BounceIn, FadeIn, FadeOut } from 'react-native-reanimated';
import { useOnReachedScroll } from '../../Post/hooks/useOnReachedScroll';
import { AnimatedTouchableOpacity } from '../../../components/AnimatedTouchableOpacity';
import { styles } from './styles';

type Props = {
  value: number;
  onMoveToTop: () => void;
};

export function ProgressBar({ value, onMoveToTop }: Props) {
  const { animatedStyle, endReached } = useOnReachedScroll(value);

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      {endReached ? (
        <AnimatedTouchableOpacity
          onPress={onMoveToTop}
          entering={BounceIn}
          exiting={FadeOut}
        >
          <Feather name="arrow-up" size={24} color="#c4c4cc" />
        </AnimatedTouchableOpacity>
      ) : (
        <Animated.View
          style={styles.progressContent}
          entering={FadeIn}
          exiting={FadeOut}
        >
          <Text style={styles.value}>{value}%</Text>
          <View style={styles.tracker}>
            <View style={[styles.progress, { width: `${value}%` }]} />
          </View>
        </Animated.View>
      )}
    </Animated.View>
  );
}
