import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGOUT } from "../../Actions/types";
import Leftbar from "./Leftbar.";
import Topbar from "./Topbar";
import useStyles from './styles';
export default function AlgoInterface() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("userProfile")));
    console.log(user);
  }, [user]);
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/");
  };
  const classes = useStyles()
  return (
    <main className={classes.dashboardContainer}>
      <Topbar /> 
     <Grid container>
     <Grid item sm={3} xs={2}>
        <Leftbar />
      </Grid>
      <Grid item sm={9} xs={10}></Grid>
     </Grid>
    </main>
  );
}
