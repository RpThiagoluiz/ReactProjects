import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BORDER};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-radius: 50px;
  margin: 2rem;
  height: calc(60vh);
  padding: 3rem;
`;

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const Title = styled.h1`
  text-transform: capitalize;
  text-align: center;
`;

export const ContainerPokemonInfo = styled.div`
  margin: 30px 0;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  text-align: center;
`;

export const ContainerPokemonImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 50em;
  filter: ${({ theme }) => `drop-shadow(0 -2mm 4mm ${theme.COLORS.BORDER})`};
`;
