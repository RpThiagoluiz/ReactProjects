import { ThemeProvider } from "styled-components";
import { Container } from "./styles/Container";
import { Home } from "./pages/Home";
import { darkTheme } from "./themes/darkTheme";
import { GlobalStyle } from "./styles/GlobalStyles";
import { lightTheme } from "./themes/lightTheme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Container>
        <Home />
      </Container>
    </ThemeProvider>
  );
}

export default App;
