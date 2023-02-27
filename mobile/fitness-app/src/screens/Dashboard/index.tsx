import { ButtonTouchableOpacity } from '@components/ButtonTouchableOpacity';
import { ContainerPage } from '@components/ContainerPage';
import { RootTabScreenProps } from '@routes/TabsRoutes';
import { useAuthStore } from '@store/useAuthStore';
import { WrapperButton, Title } from './styles';

export const Dashboard = ({
  navigation: { navigate },
}: RootTabScreenProps<'Dashboard'>) => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    //Async login Logic
    logout();
    navigate('Home');
  };

  return (
    <ContainerPage>
      <WrapperButton>
        <ButtonTouchableOpacity activeOpacity={0.8} onPress={handleLogout}>
          <Title>LogOut</Title>
        </ButtonTouchableOpacity>
      </WrapperButton>
    </ContainerPage>
  );
};
