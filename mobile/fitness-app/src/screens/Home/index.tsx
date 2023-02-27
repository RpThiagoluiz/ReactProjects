import Logo from '@assets/images/logo.webp';
import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { ContainerGradient } from '@components/ContainerGradient';
import { RootStackScreenProps } from '@routes/StackRoutes';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import React from 'react';
import { useAuthStore } from 'src/store/useAuthStore';
import { Title, ImageLogo, ButtonText } from './styles';

export const Home = ({
  navigation: { navigate },
}: RootStackScreenProps<'Home'>) => {
  const { login } = useAuthStore();

  const handleLogin = () => {
    //Async login Logic
    login();
    navigate('App');
  };

  return (
    <ContainerGradient>
      <Title>V-TiF</Title>
      <ImageLogo source={Logo} />
      <ButtonTouchableOpacity activeOpacity={0.8} onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </ButtonTouchableOpacity>
    </ContainerGradient>
  );
};
