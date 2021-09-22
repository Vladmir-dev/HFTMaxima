import {
  Avatar,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import RubberBand from "react-reveal/RubberBand";
import { Link } from "react-router-dom";
import { Customized } from "./Customized";
import AvatarGroup from "@material-ui/lab/AvatarGroup";

const useStyles = makeStyles((theme) => ({
  gridDiv: {
    marginBottom: theme.spacing(6),
    "& .MuiTypography-root": {
      fontWeight: "300",
      marginLeft: "3%",
    },
    "& .MuiTypography-subtitle1": {
      fontSize: 18,
    },
    "& .MuiTypography-h4": {
      marginTop: "3%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
      "& .MuiTypography-root": {
        fontWeight: "600",
        fontSize: "19",
        marginRight: "18%",
      },
    },
  },
  gridDiv1: {
    marginLeft: "5%",
    marginRight: "1%",
    "& .MuiTypography-root": {
      marginBottom: theme.spacing(2),
      lineHeight: "2rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(1),
    },
  },
  gridDiv3: {
    marginLeft: "7%",
    "& .MuiTypography-root": {
      marginBottom: theme.spacing(2),
      lineHeight: "2rem",
    },
  },

  gridDiv2: {
    color: "silver",
  },
  gridContainer: {
    "& .MuiTypography-root": {
      color: "#8e8e90",
      position: "relative",
      fontWeight: "300",
    },
    marginBottom: "4%",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  image: {
    maxHeight: "50vh",
    Width: "50vw",
    display: "block",
    position: "relative",
    borderRadius: "12px",
    marginLeft: "15%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "80%",
      margin: "0 0 6% 6%",
    },
  },
  image3: {
    maxHeight: "50vh",
    Width: "50vw",
    display: "block",
    position: "relative",
    borderRadius: "12px",
    marginLeft: "11%",
    marginBottom: "7%",
    [theme.breakpoints.down("xs")]: {
      margin: "10% 1% 6% 13%",
      maxHeight: "50vw",
    },
  },
  image2: {
    marginTop: "2em",
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
      color: "#008900",
      border: "2px solid #008900",
      borderRadius: "30px",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      paddingRight: "0.8em",
      paddingLeft: "0.8em",
      position: "relative",
      display: "inline-block",
      lineHeight: " 26px",
      marginLeft: "10%",
      "&:hover": {
        color: "#fff",
        background: "#008900",
        border: "2px solid #008900",
      },
    },
    "& .MuiTypography-root": {
      marginLeft: "10%",
      fontSize: 18,
      marginBottom: theme.spacing(2),
    },
    "& .MuiDivider-root": {
      marginLeft: "10%",
      marginTop: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
      "& .MuiTypography-root": {
        color: "#8e8e90",
        fontSize: "18px",
        fontWeight: "300",
        marginRight: "7%",
        marginBottom: "4%",
      },
    },
  },
  typoMiddle: {
    "& .MuiTypography-root": {
      marginRight: "15%",
    },
    "& .MuiDivider-root": {
      marginRight: "15%",
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
  lower: {
    marginBottom: "2em",
    display: "flex",
    flexDirection: "column",
  },
  lowerup: {
    marginTop: "1.5em",
    marginBottom: "0.8em",
  },
  gridContainer1: {
    display: "flex",
    "& .MuiTypography-root": {
      color: "#565867",
      fontWeight: "600",
      position: "relative",
    },
    "& .MuiTypography-body1": {
      color: "#008900",
      marginBottom: theme.spacing(1),
    },
    "& .MuiTypography-body2": {
      fontWeight: "380",
    },
    "& .MuiTypography-caption": {
      fontWeight: "350",
      display: "block",
    },
  },
  column: {
    marginRight: "3em",
  },
  column1: {
    marginLeft: "6.2em",
    marginTop: "-2.22em",
  },
}));

export function Middle({
  titleTop,
  topSubtitle,
  titleMiddle,
  middleSubtitle,
  image,
  to,
}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} className={classes.gridDiv} container direction="row">
        <Typography variant="h4" style={{ color: "#9bc400" }} gutterBottom>
          {titleTop}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {topSubtitle}
        </Typography>
      </Grid>
      <Grid container direction="row" spacing={10} className={classes.button}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" style={{ color: "#333" }}>
            {titleMiddle}
          </Typography>

          <Divider />

          <br />
          <Typography variant="subtitle2" gutterBottom>
            {middleSubtitle}
          </Typography>
          <Customized.Button text="Learn more" component={Link} to={to} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RubberBand>
            <img src={image} alt="HFTmaxima web" className={classes.image} />
          </RubberBand>
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
  to,
}) {
  const classes = useStyles();
  return (
    <Grid container className={classes.gridContainer}>
      <Grid xs={12} className={classes.gridDiv}>
        <Typography variant="h4" style={{ color: "#9bc400" }}>
          {titleTop}
        </Typography>
        <Typography variant="subtitle2">{topSubtitle}</Typography>
      </Grid>
      <Grid container direction="row" spacing={3} className={classes.button}>
        <Grid item xs={12} sm={6}>
          <img src={image} alt="HFTmaxima web" className={classes.image3} />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.typoMiddle}>
          <Typography variant="subtitle2" style={{ color: "#333" }}>
            {titleMiddle}
          </Typography>
          <Divider />
          <br />
          <Typography variant="subtitle2" gutterBottom>
            {middleSubtitle}
          </Typography>
          <Customized.Button text="Learn more" component={Link} to={to} />
        </Grid>
      </Grid>
    </Grid>
  );
}
export function ProductMenuiItem({ subTitle, captionTitle, icon, image, to }) {
  const classes = useStyles();
  return (
    <Grid container spacing={1}>
      <Grid container className={classes.gridContainerInner} direction="row">
        <Grid item className={classes.avatar} align="center">
          <Avatar align="center" src={image} alt={icon}></Avatar>
        </Grid>
        <Grid item>
          <div className={classes.gridDiv2}>
            <Typography variant="subtitle2" component={Link} to={to}>
              {subTitle}
            </Typography>
            <Typography variant="caption" component={Link} to={to}>
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
  const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    setAvatar(max);
  }, [max]);
  return (
    <Grid container className={classes.gridContainer1} direction="row">
      <Grid item direction="column" xs={3} align="center">
        <img src={src} alt={alt} className={classes.image2} />
      </Grid>
      <Grid item direction="column" xs={9} container>
        <Grid item container direction="row" className={classes.lowerup}>
          <div>
            <Typography variant="body1">{topTitle}</Typography>
            <Typography variant="body2">{topSubtitle}</Typography>
          </div>
        </Grid>
        <Grid item container direction="row" className={classes.lower}>
          <Grid item container className={classes.column} xs={6}>
            <AvatarGroup max={max}>
              <Avatar alt={alt} srx={src}></Avatar>
              <Avatar alt={alt} srx={src}></Avatar>
              <Avatar alt={alt} srx={src}></Avatar>
            </AvatarGroup>
          </Grid>
          <Grid item container className={classes.column1} xs={6}>
            <div>
              <Typography variant="caption">{middleTitle}</Typography>
              <Typography variant="caption">{middleSubtitle}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
