import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider } from "styled-components/native";
import { store } from "@store/index";
import { LoadingFonts } from "@components/LoadingFonts";
import { defaultTheme } from "@themes/defaultTheme";
import { Routes } from "routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <LoadingFonts />;
  }

  return (
    <ReduxProvider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <Routes />
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </ThemeProvider>
    </ReduxProvider>
  );
}
