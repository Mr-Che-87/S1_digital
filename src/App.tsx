import { ThemeProvider } from "styled-components";
import AppRoutes from "./Rourtes";
import { FontStyles, GlobalStyle } from "./globalStyles";
import { theme } from "./theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <FontStyles />
        <GlobalStyle />
        <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
