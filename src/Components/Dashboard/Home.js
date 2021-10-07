import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import DashboardLeftSide from "./DashboardLeftSide";
import DashboardMain from "./DashboardMain";
import DashboardTop from "./DashboardTop";
import useStyles from "./styles";
export default function Dashboard() {
  const classes = useStyles();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("userProfile"))
  );
  return (
    <main >
      <DashboardTop user={user} setUser={setUser}/>
      <Grid container>
        <Grid item sm={2}>
          <DashboardLeftSide/>
        </Grid>
        <Grid item sm={10} className={classes.spaceup}>
          <DashboardMain user={user}/>
        </Grid>
      </Grid>
    </main>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  );
}
