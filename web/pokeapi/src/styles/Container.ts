import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.COLORS.FONTCOLOR};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  overflow-y: hidden;
  min-height: calc(100vh);
`;
