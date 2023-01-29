import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  height: calc(100vh - 6rem);
  padding: 3rem;
`;
