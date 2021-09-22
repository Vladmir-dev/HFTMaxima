import React from "react";
import Card from "./Card";

import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import PersonIcon from '@mui/icons-material/Person';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Cards() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridC1}>
      <Grid item xs={12} sm={4} className={classes.xs}>
        <Card
          text="Login"
          icon={<PersonIcon fontSize="large"/>}
          textTitle="HFTmaxima Website"
          textSubtitle="Login and access your Essential trading tools in a web-based platform"
          to="/auth/login"
        />
      </Grid>
      <Grid item  xs={12} sm={4} className={classes.xs}>
        <Card
          text="Download Now"
          icon={<PodcastsIcon fontSize="large"/>}
          textTitle="HFTmaxima Community"
          textSubtitle="A community fully customized software-based trading platform"
        />
      </Grid>
      <Grid item  xs={12} sm={4} className={classes.xs}>
        <Card
          text="Watch Now"
          icon={<YouTubeIcon fontSize="large"/>}
          textTitle="Youtube-tutorial"
          textSubtitle="A wide variety of trade experts with a wide variety of experiences"
        />
      </Grid>
    </Grid>
  );
}
