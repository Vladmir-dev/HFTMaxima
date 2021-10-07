import { Grid, Paper, Typography, Container} from "@material-ui/core";
import React from "react";
import { Customized } from "../../Customized/Customized";
import useStyles from "./styles";
import WarningIcon from "@mui/icons-material/Warning";
import { Tooltip } from "@mui/material";
export default function Account() {
  const classes = useStyles();
  return (
    <Container className={classes.profileContainer}>
      <div className={classes.profileTitle}>
        <Typography variant="h6">Account Information</Typography>
      </div>
      <Grid container className={classes.profileLeft}>
        <Grid item sm={6} container direction="column">
          <div className={classes.profilePaper}>
            <Customized.PapLayoutDetail
              subtitle="Personal Details"
              MaximaID="Maxima ID"
              Name="FullName"
              Email="Email Address"
              accType="Account Type"
            />
          </div>
          <div className={classes.profilePaper}>
            <Customized.PapLayoutContact
              subtitle="Contact Information"
              country="Country"
              mobile="Mobile"
            />
          </div>

          <div className={classes.profilePaper}>
            <Customized.PapLayout1
              subtitle="Account Verification"
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
            <Paper elevation={0}>
              <Customized.Button text="Save Changes" />
            </Paper>
          </div>
          <div className={classes.leftDown}>
            <Paper elevation={0}>
              <div className={classes.leftDownFlex}>
                <div>
                  <Typography variant="body1">Delete Account</Typography>
                </div>
                <div>
                  <Customized.Button text="Delete Account" />
                </div>
              </div>
              <div className={classes.leftDownTypo}>
                  <div styles={{ display: "flex" }}>
                    <Tooltip title='Warning'>
                      <WarningIcon />
                    </Tooltip>
                    <Typography variant="body2">
                      Deleting this account will permanently have an effect,
                      Please make sure you really sure about your decision.
                    </Typography>
                  </div>
              </div>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
