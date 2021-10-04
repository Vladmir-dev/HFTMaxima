import { Grid } from "@material-ui/core";
import React from "react";
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardMain from "./DashboardMain";
import DashboardTop from "./DashboardTop";
import useStyles from "./styles";
export default function Dashboard() {
  const backgroundcolor = {background:'#000'}
  const classes = useStyles({backgroundcolor});
  return (
    <main  className={classes.container}>
      <DashboardTop/>
      <Grid item xs={2} sm={3}>
        <DashboardLeftSide />
      </Grid>
      <Grid item xs={10} sm={9}>
        <DashboardMain />
      </Grid>
    </main>
  );
}
