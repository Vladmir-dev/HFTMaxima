import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import Header from "../Components/Header/Header";
import Main from "../Main/Main";
import Footer from "../Components/Footer/Footer";
import Login from "../Auth/Login/Login";

function App() {
  return <ThemeProvider theme={theme}>
    <Header/>
    <Main/>
    <Footer/>
    <CssBaseline/>
  </ThemeProvider>;
}

export default App;
