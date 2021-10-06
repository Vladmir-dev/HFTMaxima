import { makeStyles } from "@material-ui/core";
import image2 from "../../images/image2.jpg";

export default makeStyles((theme) => ({
  form: {
    marginTop: "40px",
    position: "absolute",
    "& .MuiInputBase-root": {
      width: "85%",
      background: "#fff",
      color: "#000",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2),
      color: "#707075",
      marginTop: "10px",
      transition: "color 300ms",
      textTransform: "capitalize",
      width: "85%",
      "&:hover": {
        color: "#fff",
        background: "#008900",
      },
    },
  },
  logo: {
    height: 40,
    position: "relative",
    marginRight: theme.spacing(1),
  },
  rightdivLogo: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
    "& .MuiTypography-h5": {
      color: "#fff",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(13),
      "& .MuiTypography-h5": {
        color: "#008900",
      },
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(13),
    },
  },
  rightdivForm: {
    marginLeft: "25%",
    "& .MuiButton-root": {
      marginRight: "12%",
      background:'#008900',
      color:'#fff'
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "15%",
    },
    [theme.breakpoints.only("sm")]: {
      marginLeft: "15%",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "30%",
    },
    marginTop: "-4%",
  },
  rightDiv: {
    margin: theme.spacing(10),
    marginLeft: "15%",
    marginRight: "15%",
  },
  container: {
    background: `url(${image2}) 50% 50%`,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
  },
  rightXs: {
    "& .MuiTypography-h4": {
      fontWeight: "450",
      color: "#008900",
    },
    "& .MuiTypography-body2": {
      color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      color: "#000",
      "& .MuiTypography-root": {
        color: "#111",
      },
    },
    rightImage: {
      background: "#fff",
      height: "103vh",
      opacity: ".9",
      position: "relative",
    },
  },
  bott: {
    bottom: "-20%",
    "& .MuiTypography-subtitle1": {
      bottom: "32%",
      position: "absolute",
      textAlign: "auto",
      color:'#008900'
    },
  },
}));
