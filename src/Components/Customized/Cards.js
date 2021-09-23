import React from "react";
import Card from "./Card";
import Slide from "react-reveal/Slide";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Cards() {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridC1}>
      <Grid item xs={12} sm={4} md={4} className={classes.xs}>
        <Slide bottom>
          <Card
            text="Login"
            icon={<PersonIcon fontSize="large" />}
            textTitle="HFTmaxima Website"
            textSubtitle="Login and access your Essential trading tools in a web-based platform"
            to="/auth/login"
          />
        </Slide>
      </Grid>

      <Grid item xs={12} sm={4} md={4} className={classes.xs}>
        <Slide bottom>
          <Card
            text="Download Now"
            icon={<PodcastsIcon fontSize="large" />}
            textTitle="HFTmaxima Community"
            textSubtitle="A community fully customized software-based trading platform"
          />
        </Slide>
      </Grid>

      <Grid item xs={12} sm={4} className={classes.xs}>
        <Slide bottom>
          <Card
            text="Watch Now"
            icon={<YouTubeIcon fontSize="large" />}
            textTitle="Youtube-tutorial"
            textSubtitle="A wide variety of trade experts with a wide variety of experiences"
          />
        </Slide>
      </Grid>
    </Grid>
  );
}
