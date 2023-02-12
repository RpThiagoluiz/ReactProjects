import { ScrollView } from 'react-native';

export const useMoveToTop = (scrollRef: React.RefObject<ScrollView>) => {
  const handleOnMoveToTop = () => {
    scrollRef.current?.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
  };

  return {
    handleOnMoveToTop,
  };
};
