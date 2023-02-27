import { DividerVertical, DividerHorizontal } from './styles';

interface Props {
  isVertical?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  size?: 'small' | 'normal' | 'large';
}

export const Divider = ({
  isVertical = false,
  color = 'default',
  size = 'normal',
}: Props) => {
  if (isVertical) return <DividerVertical color={color} size={size} />;

  return <DividerHorizontal color={color} size={size} />;
};
