import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  Container: {
    display: " flex",
    height: "320px",
    margin: "4em auto",
    width: "640px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      height: "630px",
      width: "320px",
    },
  },
  left: {
    background: "white;",
    height: "calc(100% - 40px)",
    top: "20px",
    position: "relative",
    width: " 50%",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "cal(100%-40px)",
      maxHeight: "270px",
    },
    "& .MuiButton-root": {
      textTransform: "capitalize",
      marginTop: "2em",
    },
  },
  right: {
    background: " #170041",
    boxShadow: "0px 0px 40px 16px rgba(0,0,0,0.22)",
    color: "#F1F1F2",
    position: "relative",
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      flexShrink: 0,
      height: "100%",
      width: "100%",
      maxHeight: "350px",
    },
  },
  form: {
    marginTop: "40px",
    position: "absolute",
    "& .MuiInputBase-root": {
      width: "85%",
      background:'#fdfdfd',
      color:'#333',
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2),
      color: "#707075",
      marginTop: "40px",
      transition: "color 300ms",
      textTransform: "capitalize",
      "&:hover": {
        color: "#d0d0d2",
        background: "#9bc400",
      },
    },
    right: {
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column",
        flexShrink: 0,
        height: "100%",
        width: "100%",
        maxHeight: "350px",
      },
    },
  },
  google: {
    background: "#fff",
    "&:hover": {
      background: "#fff",
      "& .MuiButton-label": {
        color: "#164A41",
      },
    },
  },
  facebook: {
    background: "#fff",
    "&:hover": {
      background: "#fff",
    },
  },
 
}));
