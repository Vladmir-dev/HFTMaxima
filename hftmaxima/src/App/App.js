import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import Header from "../Components/Header/Header";
import Main from "../Main/Main";

function App() {
  return <ThemeProvider theme={theme}>
    <Header/>
    <Main/>
    <CssBaseline/>
  </ThemeProvider>;
}

export default App;
