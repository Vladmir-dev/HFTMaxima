import { Grid, Paper, Typography, Container, Card } from "@material-ui/core";
import React from "react";
import { Customized } from "../../Customized/Customized";
import useStyles from "./styles";
import WarningIcon from '@mui/icons-material/Warning';
export default function Profile() {
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <div className={classes.profileTitle}>
        <Typography variant="h6" gutterBottom> Complete your Profile</Typography>
        <Typography variant="caption">Having a complete profile helps Maxima know you better</Typography>
      </div>
      <Grid container className={classes.profileLeft}>
        <Grid item sm={6} container direction="column">
          <div className={classes.profilePaper}>
            <Customized.PapLayoutDetail
              subtitle="Details"
              Name="Name"
              Email="Email Address"
              Mobile="Mobile Number"
              Gender="Gender"
            />
          </div>
          <div className={classes.profilePaper}>
            <Customized.PapLayoutPassword
              subtitle="Update Password"
              input1="Current Password"
              input2="New Password"
            />
          </div>
          <div className={classes.profilePaper}>
            <Customized.PapLayout1
              subtitle="Dashboard Language"
              input1="Dashboard Language"
            />
          </div>
        </Grid>
        <Grid
          item
          sm={4}
          container
          direction="column"
          className={classes.profileLeft}
        >
          <div className={classes.leftUp}>
            <Paper elevation={2}>
              <Customized.Button text="Save Changes" />
            </Paper>
          </div>
          <div className={classes.leftDown}>
            <Paper elevation={2}>
              <div className={classes.leftDownFlex}>
                <div>
                  <Typography variant="body1">Delete Account</Typography>
                </div>
                <div>
                  <Customized.Button text="Delete Profile" />
                </div>
              </div>
              <div className={classes.leftDownTypo}>
                <Card>
                  <div styles={{display:'flex'}}>
                  <WarningIcon/>
                  <Typography variant="body2">
                    Deleting this account will permanently have an effect,
                    Please make sure you really sure about your decision.
                  </Typography>
                  </div>
                </Card>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
