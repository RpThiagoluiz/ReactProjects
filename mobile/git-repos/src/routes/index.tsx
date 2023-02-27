import { NavigationContainer } from "@react-navigation/native";
import { BackgroundNavigationView } from "@layout/BackgroundNavigationView";
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <BackgroundNavigationView>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </BackgroundNavigationView>
  );
}
