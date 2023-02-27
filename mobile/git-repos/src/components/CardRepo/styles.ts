import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

export const UserAvatar = styled.Image`
  width: 52px;
  height: 52px;
  border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_400};
  border-radius: 26px;
  margin-right: 12px;
`;

export const WrapperInfo = styled.View`
  flex: 1;
`;

export const WrapperStars = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: flex-start;
  justify-content: flex-end;
`;
