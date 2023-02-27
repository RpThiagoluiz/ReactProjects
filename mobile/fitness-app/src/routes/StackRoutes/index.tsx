import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { TabsRoutes } from '@routes/TabsRoutes';
import { Home } from '@screens/Home';

export type RootStackParamList = {
  Home: undefined;
  App: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export const StackRoutes = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="App" component={TabsRoutes} />
    </Stack.Navigator>
  );
};
