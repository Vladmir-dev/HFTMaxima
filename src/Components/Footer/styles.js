import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    background: "#363636",
    width: "100vw",
    height: "100%",
    marginLeft: "-2%",
    marginTop: "-2%",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginLeft: "-6%",
      marginBottom: "-6%",
    },
  },
  flex1: {
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "8%",
      marginRight: "8%",
    },
  },
  flex: {
    display: "flex",
    marginTop: "1em",
    "& .MuiTypography-root": {
      color: "silver",
      fontWeight: "600",
      position: "relative",
      marginLeft: "3em",
      marginTop: "0.8em",
    },
    "& .MuiTypography-subtitle2": {
      fontSize: "20",
      fontWeight: "300",
      margin: theme.spacing(4),
    },
    "& .MuiTypography-subtitle1": {
      fontSize: "20",
      fontWeight: "300",
      margin: theme.spacing(4),
    },
    "& .MuiSvgIcon-root": {
      marginLeft: theme.spacing(2),
    },
    marginLeft: "8%",
    [theme.breakpoints.down("xs")]: {
      display: "block",
      marginLeft: "8%",
      "& .MuiTypography-subtitle2": {
        fontSize: "20",
        fontWeight: "300",
        margin: "0 8% 4% -3%",
      },
    },
  },

  logo: {
    height: 40,
    position: "relative",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginLeft: "25%",
      marginTop: "4%",
    },
  },
  xs: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
      "& .MuiTypography-root": {
        marginLeft: "25%",
      },
    },
  },
}));
