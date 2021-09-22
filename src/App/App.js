import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import NewsPage from "../Components/News/NewsPage";
import Support from "../Components/Support/Support";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import AlgoInterface from "../Components/Algorithm/AlgoInterface";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/algorithm" component={AlgoInterface} />
      </Switch>
      <Footer/>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
