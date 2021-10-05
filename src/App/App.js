import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
import NewsPage from "../Components/News/NewsPage";
import Support from "../Components/Support/Support";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Forgot from "../Components/forgot/Forgot";
import Dashboard from "../Components/Dashboard/Home";
import Profile from "../Components/Dashboard/views/Profile";
import Accounts from "../Components/Dashboard/views/Accounts";
import Settings from "../Components/Dashboard/views/Settings";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={NewsPage} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/register" component={Register} />
        <Route exact path="/auth/forgot" component={Forgot} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/accounts" component={Accounts} />
        <Route exact path="/dashboard/settings" component={Settings} />
      </Switch>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
