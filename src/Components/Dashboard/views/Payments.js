import React from "react";
import { Customized } from "../../Customized/Customized";
import { Grid, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
export default function Payments() {
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <div className={classes.profileTitle}>
        <Typography variant="h6">Payments Information</Typography>
      </div>
      <Grid container className={classes.profileLeft}>
        <Grid item>
          <div className={classes.paymentsPaper}>
            <Customized.PapLayoutPayments subtitle="Payment Details" />
            <Customized.Button text="Back" />
          </div>
          <div className={classes.paymentsPaper}>
            <Customized.PapLayoutPaymentsContact
              subtitle="Country of Residence"
              country="Country"
            />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
