import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { Loading } from '@components/Loading';
import lightTheme from '@theme/global/lightTheme';
import { Routes } from 'src/routes/app.routes';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    BroadwayD: require('@assets/fonts/BroadwayD.ttf'),
    Silkscreen_Bold: require('@assets/fonts/Silkscreen-Bold.ttf'),
    Urbanist_Regular: require('@assets/fonts/Urbanist-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <StatusBar
        translucent
        animated
        backgroundColor="transparent"
        style="dark"
        hideTransitionAnimation="slide"
      />
      <Routes />
    </ThemeProvider>
  );
}
