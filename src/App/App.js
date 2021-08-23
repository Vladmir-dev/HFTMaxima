import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import NewsPage from "../Components/News/NewsPage";
import Support from "../Components/Support/Support";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/support" component={Support} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
