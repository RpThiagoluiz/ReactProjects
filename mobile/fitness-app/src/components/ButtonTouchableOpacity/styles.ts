import { RFValue } from 'react-native-responsive-fontsize';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  width: 80%;
  margin: ${RFValue(15)}px;
  padding: ${RFValue(5)}px ${RFValue(50)}px;
  border-radius: 15px;
`;
