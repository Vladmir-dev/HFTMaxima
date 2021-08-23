import { Avatar, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Customized } from "./Customized";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    marginBottom: theme.spacing(6),
    "& .MuiTypography-root": {
      top: "4px",
      marginBottom: theme.spacing(3),
    },
  },
  gridDiv1: {
    marginBottom: theme.spacing(6),
    "& .MuiTypography-root": {
      marginBottom: theme.spacing(2),
    },
  },
  
  gridDiv2: {
    color: "silver",
  },
  gridContainer: {
    "& .MuiTypography-root": {
      color: "#8e8e90",
      fontWeight: "600",
      position: "relative",
    },
  },
  gridContainerInner: {
    display: "flex",
  },
  image: {
    height: "20em",
    width: "100%",
    display: "block",
    backgroundPosition: "center",
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
  },
  image2: {
    marginTop:'2em',
    height: "4em",
    width: "38%",
    display: "block",
    backgroundPosition: "center",
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
  },
  button: {
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      background: theme.palette.background.default,
      color: "#9bc400",
      border: "2px solid #9bc400",
      borderRadius: "30px",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      paddingRight: "0.8em",
      paddingLeft: "0.8em",
      position: "relative",
      display: "inline-block",
      lineHeight: " 26px",
      "&:hover": {
        color: "#fff",
        background: "#9bc400",
        border: "2px solid #9bc400",
      },
    },
  },

  avatar: {
    marginTop: "1.1em",
    "& .MuiAvatar-root": {
      height: "1.7em",
      width: "1.7em",
      display: "inline-block",
    },
  },
  lower:{
    marginBottom:'4em',
    display:'flex',
    flexDirection:'column',
  },
  lowerup:{
    marginTop:'1.5em',
    marginBottom:'0.8em',
  },
  gridContainer1: {
    "& .MuiTypography-root": {
      color: "#565867",
      fontWeight: "600",
      position: "relative",
    },
    "& .MuiTypography-body1": {
      color: "#9bc400",
      marginBottom:theme.spacing(1),
    },
    "& .MuiTypography-body2": {
      fontWeight: "380",
    },
    "& .MuiTypography-caption": {
      fontWeight: "350",
      display:'block',
    },
  },
  column:{
    marginRight:'3em',
  },
  column1:{
    marginLeft:'6.2em',
    marginTop:'-2.22em',
  }
}));

export function Middle({
  titleTop,
  topSubtitle,
  titleMiddle,
  middleSubtitle,
  image,
}) {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer}>
      <div className={classes.gridDiv}>
        <Typography variant="h4" style={{ color: "#9bc400" }}>
          {titleTop}
        </Typography>
        <Typography variant="subtitle2">{topSubtitle}</Typography>
      </div>
      <Grid container className={classes.gridContainerInner} row>
        <Grid direction="column" xs={6} className={classes.button}>
          <div className={classes.gridDiv1}>
            <Typography variant="subtitle2" style={{ color: "#fff" }}>
              {titleMiddle}
            </Typography>
            <Typography variant="subtitle2">{middleSubtitle}</Typography>
          </div>
          <Customized.Button text="Learn more" />
        </Grid>
        <Grid direction="column" xs={6}>
          <img src={image} alt="HFTmaxima web" className={classes.image} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export function MiddleMid({
  titleTop,
  topSubtitle,
  titleMiddle,
  middleSubtitle,
  image,
}) {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer}>
      <div className={classes.gridDiv}>
        <Typography variant="h4" style={{ color: "#9bc400" }}>
          {titleTop}
        </Typography>
        <Typography variant="subtitle2">{topSubtitle}</Typography>
      </div>
      <Grid container className={classes.gridContainerInner} row>
        <Grid direction="column" xs={6}>
          <img src={image} alt="HFTmaxima web" className={classes.image} />
        </Grid>
        <Grid direction="column" xs={6} className={classes.button}>
          <div className={classes.gridDiv1}>
            <Typography variant="subtitle2" style={{ color: "#fff" }}>
              {titleMiddle}
            </Typography>
            <Typography variant="subtitle2">{middleSubtitle}</Typography>
          </div>
          <Customized.Button text="Learn more" component={Link} to="/news" />
        </Grid>
      </Grid>
    </Grid>
  );
}
export function ProductMenuiItem({
  subTitle,
  captionTitle,
  icon,
  image,
  component,
  to,
}) {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid container className={classes.gridContainerInner} direction="row">
        <Grid item className={classes.avatar} align="center">
          <Avatar align="center" src={image} alt={icon}></Avatar>
        </Grid>
        <Grid item>
          <div className={classes.gridDiv2}>
            <Typography variant="subtitle2" component={component} to={to}>
              {subTitle}
            </Typography>
            <Typography variant="caption" component={component} to={to}>
              {captionTitle}
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}

export function SupportMid({
  topTitle,
  topSubtitle,
  middleTitle,
  middleSubtitle,
  src,
  alt,
  max,
}) {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer1}>
      <Grid container className={classes.gridContainerInner} direction="row">
        <Grid direction="column" xs={3} align="center">
          <img src={src} alt={alt} className={classes.image2} />
        </Grid>
        <Grid direction="column" xs={9} container>
          <Grid container direction="row" className={classes.lowerup}>
            <div >
              <Typography variant="body1">{topTitle}</Typography>
              <Typography variant="body2">{topSubtitle}</Typography>
            </div>
          </Grid>
          <Grid container direction="row" className={classes.lower}>
            <Grid container direction="column" className={classes.column}>
              <AvatarGroup max={max}>
                <Avatar alt={alt} srx={src}></Avatar>
                <Avatar alt={alt} srx={src}></Avatar>
                <Avatar alt={alt} srx={src}></Avatar>
              </AvatarGroup>
            </Grid>
            <Grid container direction="column"className={classes.column1}>
              <div>
                <Typography variant="caption">{middleTitle}</Typography>
                <Typography variant="caption">{middleSubtitle}</Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
