import React from "react";
import image1 from "../../images/Award1.svg";
import image2 from "../../images/Award2.svg";
import image3 from "../../images/Award3.svg";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import Award from "./Award";
export default function Cards() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridC1}>
      <Grid item className={classes.gridC}>
        <Award
          image={image1}
          className={classes.cardMedia}
          textTitle="#1 Overall Broker"
          textSubtitle="StockBroker.com"
        />
      </Grid>
      <Grid item className={classes.gridC}>
        <Award
          image={image2}
          className={classes.cardMedia}
          textTitle="#1 Desktop Platform"
          textSubtitle="StockBroker.com"
        />
      </Grid>
      <Grid item className={classes.gridC}>
        <Award
          image={image3}
          className={classes.cardMedia}
          textTitle="#1 Active Trading"
          textSubtitle="StockBroker.com"
        />
      </Grid>
    </Grid>
  );
}
