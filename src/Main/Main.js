import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Components/Customized/Customized";
import { Link } from "react-router-dom";

export default function Main() {
  const classes = useStyles();
  return (
      <Grid
        container
        style={{ display: "block", marginBottom: "4em", marginTop: "5em" }}
        className={classes.gridContainer}
      >
        <Grid item container direction="row" className={classes.gridFlex}>
          <Grid container direction="row" className={classes.gridInner}>
            <Container>
              <Grid item className={classes.gridB}>
                <div className={classes.div}>
                  <Typography variant="h6">
                    HFTmaxima Trading Platforms
                  </Typography>
                  <Typography variant="h3">
                    Have power over your Trading
                  </Typography>
                </div>
                <Customized.Button text="Open new Account" component={Link} to='auth/register'/>
              </Grid>
            </Container>
          </Grid>
          <Container>
          <Grid container direction="row" className={classes.rowMargin}>
            <div style={{ marginTop: "4em" }}>
              <Typography variant="subtitle1" component="p">
                HFTmaxima Trading Platform, after a proficient study on similar
                trading application systems, a better and advanced website
                potraying all the insights to forex trade.Now you can have your
                way with the trade either on mobile and website. Real time
                feedbacks from charts and traders, no matter how you prefer to
                trade, you always have access to the innovative features traders
                ask for the most.
              </Typography>
            </div>
          </Grid>
          <Grid
            item
            direction="row"
            className={classes.gridCards}
            align="center"
            styles={{ marginBottom: "4em" }}
            container
          >
            <Typography variant="h4" align="center">
              Start Trading Now
            </Typography>
            <Customized.Cards />
          </Grid>
          <Grid item direction="row" className={classes.gridMiddles} container>
            <Customized.Middles styles={{ marginBottom: "4em" }} />
          </Grid>
          <Grid
            direction="row"
            styles={{ marginBottom: "4em" }}
            className={classes.tabs}
          >
            <div className={classes.tabTypo}>
              <Typography variant="h4" style={{ color: "#9bc400" }}>
                We take trading as seriously as you do
              </Typography>
              <Typography variant="subtitle1" style={{ color: "#8e8e90" }}>
                Discover a complete trading experience powered by real traders
              </Typography>
            </div>
            <Grid align="center">
              <Customized.TabContent />
            </Grid>
          </Grid>
          <Grid direction="row" className={classes.gridMiddles}>
            <Customized.News styles={{ marginBottom: "4em" }} />
          </Grid>
          <Grid direction="row" className={classes.rowMargin}>
            <div style={{ marginTop: "4em" }}>
              <Typography variant="subtitle1" component="p">
                HFTmaxima Trading Network is brought to you by HFTmaxima
                company. HFTmaxima is a company that supports or is supported by
                the HFTmaxima website application. The HFTmaxima is not a
                financial adviser but it helps traders get an efficent automated
                trading experience while maximazing profits.
              </Typography>
            </div>
          </Grid>
          </Container>
        </Grid>
      </Grid>
  );
}
