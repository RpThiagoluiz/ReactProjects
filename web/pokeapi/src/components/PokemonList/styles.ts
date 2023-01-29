import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
  height: calc(100vh - 5rem);
  overflow-y: scroll;
  padding: 2.5rem;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: ${({ theme }) =>
      `inset 0 0 5px${theme.COLORS.SCROLLBAR_TRACK}`};
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.SCROLLBAR_THUMB};
    border-radius: 5px;
  }
`;
