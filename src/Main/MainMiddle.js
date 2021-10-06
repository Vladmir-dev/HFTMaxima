import { Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";

export default function MainMiddle() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Grid container spacing={3}>
        <Grid item container direction="row" className={classes.rowMargin}>
          <div>
            <Typography variant="h4" gutterBottom>
              Why Choose Maxima?
            </Typography>
            <Typography variant="h6" gutterBottom>
              Our Website is in great niche to understand your challenges as a
              trader.
            </Typography>
            <Typography variant="subtitle1" component="p">
              Maxima Trading Platform, after a proficient study on similar
              trading application systems, designed a better and advanced website
              potraying all the insights to ForEx trade. Now you can have your
              way with the trade either on mobile and website. Real-time
              feedbacks from charts and traders with access to the innovative features traders
              ask for the most.
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          direction="row"
          className={classes.gridCards}
          alignItems="center"
          styles={{ marginBottom: "4%" }}
          container
        >
          <Typography variant="h4" align="center">
            Start Your Journey Now
          </Typography>
          <Customized.Cards />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
