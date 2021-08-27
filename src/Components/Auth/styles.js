import { makeStyles } from "@material-ui/core";
import image from "../../images/svg3.jpeg";
export default makeStyles((theme) => ({
  Container: {
    display: " flex",
    height: "320px",
    margin: "4em auto",
    width: "640px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      width: "400px",
      height:'1%',
    },
  },
  left: {
    background: "#fff",
    height: "calc(100% - 40px)",
    top: "20px",
    position: "relative",
    width: " 50%",
    height: "100%",
    "& .MuiButton-root": {
      textTransform:'capitalize',
      marginTop: "1em",
      width:'100%',
      padding:theme.spacing(1)
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxHeight: "270px",
      div:{
        display:'block',
      },
      marginBottom:theme.spacing(5)
    },
  },
  leftRegister: {
    background: "#fff",
    height: "calc(100% - 40px)",
    top: "20px",
    position: "relative",
    width: " 50%",
    height: "120%",
    "& .MuiButton-root": {
      textTransform: "capitalize",
      marginTop: "1em",
      padding:theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      width: "100%",
      maxHeight: "350px",
      marginBottom:theme.spacing(13),
      "& .MuiButton-root": {
        marginTop: "1em",
        width:'100%',
        padding:theme.spacing(1)
      },
      display:'block',
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
  rightRegister: {
    background: " #170041",
    boxShadow: "0px 0px 40px 16px rgba(0,0,0,0.22)",
    color: "#F1F1F2",
    position: "relative",
    width: "50%",
    height: "140%",
    [theme.breakpoints.down("xs")]: {
      flexShrink: 0,
      flexDirection: "column",
      height: "190%",
      width: "100%",
      maxHeight: "350px",
      display: "block",
    },
  },
  form: {
    marginTop: "40px",
    position: "absolute",
    "& .MuiInputBase-root": {
      width: "85%",
      background: "#fdfdfd",
      color: "#fff",
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
        color: "#fff",
        background: "#9bc400",
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
      background: "#101357",
      color: "#fff",
      "& .MuiSvgIcon-root": {
        color: "#fff",
      },
    },
    "& .MuiSvgIcon-root": {
      color: "#101357",
    },
  },
  divTop: {
    marginTop: "1em",
  },
  page: {
   
  },
}));
