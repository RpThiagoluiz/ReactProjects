import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "styled-components";
import { Home } from "@screens/Home";
import { RepoDetails } from "@screens/RepoDetails";
import { HeaderPage } from "@components/HeaderPage";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="home" component={Home} options={{ headerShown: false }} />
      <Screen name="repoDetails" component={RepoDetails} />
    </Navigator>
  );
}
