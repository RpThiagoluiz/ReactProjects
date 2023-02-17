import { useEffect } from 'react';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useOnReachedScroll = (value: number) => {
  const widthContainer = useSharedValue(200);
  const endReached = value >= 95;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: widthContainer.value,
    };
  });

  useEffect(() => {
    widthContainer.value = withSpring(endReached ? 56 : 200, { mass: 0.3 });
  }, [value]);

  return {
    animatedStyle,
    endReached,
  };
};
