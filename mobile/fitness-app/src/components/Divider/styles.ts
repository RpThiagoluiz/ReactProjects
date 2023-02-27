import styled, { css } from 'styled-components/native';

export interface ColorProps {
  color: 'primary' | 'secondary' | 'default';
  size: 'small' | 'normal' | 'large';
}

const sizeVertical = {
  small: () =>
    css`
      width: 1px;
      height: 80%;
      opacity: 0.5;
    `,
  normal: () =>
    css`
      width: 3px;
    `,

  large: () =>
    css`
      width: 5px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    `,
};

const sizeHorizontal = {
  small: () =>
    css`
      height: 1px;
      opacity: 0.5;
    `,
  normal: () =>
    css`
      height: 3px;
    `,

  large: () =>
    css`
      height: 5px;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    `,
};

export const DividerVertical = styled.View<ColorProps>`
  background-color: ${({ theme, color }) =>
    color === 'default' ? theme.colors.black : theme.colors[color]};
  height: 100%;
  ${({ size }) => sizeVertical[size]};
`;

export const DividerHorizontal = styled.View<ColorProps>`
  background-color: ${({ theme, color }) =>
    color === 'default' ? theme.colors.black : theme.colors[color]};
  width: 100%;
  ${({ size }) => sizeHorizontal[size]};
`;
