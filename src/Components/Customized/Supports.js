import {Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import { SupportMid } from "./middle";
import books from "../../images/books.png";
const useStyles = makeStyles((theme) => ({
  container: { 
    marginTop: "1.7em",
    margin:'0 auto',
  },
  row: {
    margin: theme.spacing(1),
    "& .MuiPaper-root": {
      fontSize: "18px",
      borderRadius: "4px",
      background: "#fff",
      display: "block",
      alignItems: "center",
      width: "76%",
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 3px 8px 0 rgb(0 0 0 / 3%)",
      transition: "all 0.45s ease-in",
      "&:hover": {
        opacity:'.85',
      },
    },
    paperAuto:{
      margin:'0 auto',
    },
  },
}));
export default function Supports() {
  const classes = useStyles();
  return (
    <Grid className={classes.container} container alignItems='center'>
      <Grid item container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="Get started on HFTMaxima"
              topSubtitle="How to verify your account and contact HFTMaxima"
              middleTitle="23 articles in this section"
              middleSubtitle="Written by Mayanja James and Hall Enoch Asanda"
              src={books}
              alt="books Icon"
              max={0}
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="How to Transact on HFTMaxima"
              topSubtitle="How to use the demo account with virtual money and place your trade"
              middleTitle="11 articles in this section"
              middleSubtitle="Written by Pius Tumwebaze"
              src={books}
              alt="books Icon"
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="HFTMaxima notificatons"
              topSubtitle="Information to look for the right time to trade especially with your busy schedule"
              middleTitle="8 articles in this section"
              middleSubtitle="Written by Pius Tumwembaze"
              src={books}
              alt="books Icon"
              max={1}
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="News"
              topSubtitle="Information on world wide happenings"
              middleTitle="12 articles found in this section"
              middleSubtitle="Written by Hall Enoch Asanda"
              src={books}
              alt="books Icon"
              max={0}
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="HFTMaxima terms and conditions"
              topSubtitle="HFMaxima polices"
              middleTitle="1 article in this section"
              middleSubtitle="Written by Mayanja James"
              src={books}
              alt="books Icon"
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="HFTMaxima Virtual Account"
              topSubtitle="All you need is a demo account to exercise your luck"
              middleTitle="4 articles in this section"
              middleSubtitle="Written by Pius Tumwebaze"
              src={books}
              alt="books Icon"
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle=" HFTMaxima Charts"
              topSubtitle="Visualize trade changes on our charts"
              middleTitle="10 articles in this section"
              middleSubtitle="Written by Wycoff"
              src={books}
              alt="books Icon"
            />
          </Grid>
        </Paper>
      </Grid>
      <Grid container direction="row" className={classes.row}>
        <Paper elevation={0} style={{margin:'0 auto'}}>
          <Grid item>
            <SupportMid
              topTitle="HFTMaxima: World Wide"
              topSubtitle="Frequently asked questions for Users globally"
              middleTitle="20 articles in this section"
              middleSubtitle="Written by the API system"
              src={books}
              alt="books Icon"
            />
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
