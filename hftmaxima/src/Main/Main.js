import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";

export default function Main() {
  const classes = useStyles();
  return (
    <Grid container style={{ display: "block" }}>
      <Grid item row style={{ margin: "2em" }}>
        <Customized.BreadCrumbs separator=">" />
      </Grid>
      <Grid item row className={classes.gridFlex}>
        <Grid direction="column" className={classes.gridInner1}>
          <Customized.Lists />
        </Grid>
        <Grid direction="column">
          <Grid direction='row' className={classes.gridInner}>
            <Grid item className={classes.gridB}>
              <div className={classes.div}>
                <Typography variant="h6">
                  HFTmaxima Trading Platforms
                </Typography>
                <Typography variant="h3">
                  Have power over your Trading
                </Typography>
              </div>
              <Customized.Button text="Open new Account" />
            </Grid>
          </Grid>
          <Grid direction='row' className={classes.rowMargin}>
            <div style={{ marginTop: "4em" }}>
              <Typography variant="subtitle1" component="p">
                HFTmaxima Trading Platform, after a proficient study on similar
                trading application systems, a better and advanced website
                potraying all the insights to forex trade.Now you can have your way with the trade either on mobile and
                website. Real time feedbacks from charts and traders, no matter how you prefer to trade, you always have access
                to the innovative features traders ask for the most.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
