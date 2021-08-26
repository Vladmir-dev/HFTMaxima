import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import NewsPage from "../Components/News/NewsPage";
import Support from "../Components/Support/Support";
import Login from "../Components/Auth/Login";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/auth/login" component={Login} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
