import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { ContextCoffeProvider } from "./contexts/ContextCoffeProvider";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      
        <BrowserRouter>
          <ContextCoffeProvider>
            <Router />
          </ContextCoffeProvider>
        </BrowserRouter>
      
    </ThemeProvider>
  )
}