import React from "react";
import {
  Card as MuiCard,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import { Customized } from "./Customized";
import { Link } from "react-router-dom";
export default function Card({
  icon,
  text,
  textTitle,
  textSubtitle,
  to,
}) {
  const classes = useStyles();
  return (
    <MuiCard className={classes.cardRoot} elevation={20}>
      <CardMedia>{icon}</CardMedia>
      <CardContent>
        <Typography
          variant="subtitle1"
          align="center"
          style={{ color: "#97979d",marginBottom:'4%' }}
        >
          {textTitle}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          style={{ color: "#97979d",fontWeight:'300',marginBottom:'-1%' }}
        >
          {textSubtitle}
        </Typography>
      </CardContent>
      <CardActions>
        <Grid item align="center" className={classes.cardButton}>
          <Customized.Button text={text} component={Link} to={to} />
        </Grid>
      </CardActions>
    </MuiCard>
  );
}
