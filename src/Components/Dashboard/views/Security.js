import React from "react";
import { Customized } from "../../Customized/Customized";
import { Grid, Paper, Typography, Container } from "@material-ui/core";
import useStyles from "./styles";
export default function Security() {
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <div className={classes.profileTitle}>
        <Typography variant="h6">Update Password</Typography>
      </div>
      <Grid container className={classes.profileLeft}>
        <Grid item>
          <div className={classes.securityPaper}>
            <Customized.PapLayoutPassword
              subtitle="Change Password"
              currentPassword="Current Password"
              newPassword="New Password"
              confirmPassword="Confirm Password"
            />
          </div>
          <div className={classes.securityPaper}>
            <Customized.PapLayoutPasswordCaption subtitle="Login Attempts" />
            <Customized.Button text="Back" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
