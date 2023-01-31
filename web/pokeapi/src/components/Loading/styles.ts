import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const LoadingContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  margin: 0 auto;
`;

export const Image = styled.img<{ size: number }>`
  animation: ${bounce} 2s infinite;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
