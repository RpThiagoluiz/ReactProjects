import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-end;
  background: rgba(244, 244, 244, 0.1);
  box-shadow: 5px 5px 20px 5px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  transition: all 0.3s ease-in-out;
  height: 250px;
  width: 350px;

  &:hover {
    transform: scale(1.15);
  }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.h2`
  font-weight: bold;
  text-transform: capitalize;
  font-size: 1 rem;
  text-align: center;
`;

export const Image = styled.img`
  width: 18rem;
  filter: ${({ theme }) => `drop-shadow(0 -2mm 4mm ${theme.COLORS.BORDER})`};
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const WrapperDetails = styled.div``;

export const Details = styled.p``;

export const WrapperType = styled.div`
  margin-bottom: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
`;
