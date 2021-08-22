import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  div: {
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      fontWeight: "600",
      "&:hover": {
        color: "#9bc400",
      },
      color: "silver",
    },
    "& .MuiTypography-body1": {
      color:'#fff',
      "&:hover": {
        color: "#9bc400",
      },
    },
    display: "flex",
    alignItems: "center",
  },
  gridB: {
    marginLeft: "20em",
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      background: "#9bc400",
      color: "#fff",
      border: "2px solid transparent",
      borderRadius: "30px",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      padding: theme.spacing(1),
      position: "relative",
      display: "inline-block",
      width: "18em",
      lineHeight: " 26px",
      "&:hover": {
        color: "#9bc400",
        background: "#fff",
        border: "2px solid #9bc400",
      },
    },
  },
  root: {
    background: "#00010a",
    borderBottom: "2px solid #333",
  },
  divT: {
    "& .MuiTypography-root": {
      right: " -15.5em",
      top: "1px",
      marginTop: "1px",
      bottom: " -1.5em",
      color: "#9bc400",
      fontSize: ".875rem",
      fontWeight: "600",
      position: "relative",
    },
  },
  gridIn: {
    "& .MuiInputBase-root": {
      color: "#f7f7f7",
      backgroundColor: "#333",
      margin: theme.spacing(2),
      position: "relative",
      width: "110%",
      height: "46px",
      fontSize: "1rem",
      paddingTop: "12px",
      paddingBottom: "12px",
      paddingLeft: "2px",
      top: "-10px",
      left: " 50px",
      marginLeft: "3em",
    },
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    "& .MuiIconButton-label": {
      background: "#9bc400",
      borderRadius: "40px",
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
    },
  },
  gridMid: {
    alignItems: "center",
  },
}));
