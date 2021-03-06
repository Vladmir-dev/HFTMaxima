import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";

export default function MainLow() {
  const classes = useStyles();
  return (
    <main className={classes.middlelow}>
      <Grid container spacing={3}>
        <Grid item className={classes.tabs}>
          <div className={classes.tabTypo}>
            <Typography
              variant="h4"
              style={{ color: "#008900" }}
              gutterBottom
              align="center"
            >
              We take trading as seriously as you do
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "#8e8e90" }}
              gutterBottom
              align="center"
            >
              Discover a complete trading experience powered by real traders
            </Typography>
          </div>

          <Customized.TabContent />
        </Grid>
        <Grid className={classes.gridMiddles} item>
          <Customized.News styles={{ marginBottom: "4em" }} />
        </Grid>
        <Grid item className={classes.rowMargin} xs={12}>
          <div>
            <Typography variant="subtitle2">
              Maxima Trading Network is brought to you by Maxima company.
              Maxima is a software product that is supported by the
              Maxima website application. Maxima is not a financial
              adviser but it helps traders get an efficent automated trading
              experience while maximazing profits.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
