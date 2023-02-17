import { useState } from 'react';
import { useWindowDimensions } from 'react-native';

type scrollPercentageProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};

export const usePercentage = () => {
  const [percentage, setPercentage] = useState(0);

  const dimensions = useWindowDimensions();

  function scrollPercentage({
    contentOffset,
    contentSize,
    layoutMeasurement,
  }: scrollPercentageProps) {
    const visibleContent = Math.ceil(
      (dimensions.height / contentSize.height) * 100
    );

    const value =
      (layoutMeasurement.height + contentOffset.y) / contentSize.height;
    const percentValue = value * 100;

    const checkValue = percentValue < visibleContent ? 0 : percentValue;

    const formattedValue = Number(checkValue.toFixed(0));

    setPercentage(formattedValue);
  }

  return {
    scrollPercentage,
    percentage,
  };
};
