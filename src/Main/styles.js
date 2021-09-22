import { makeStyles } from "@material-ui/core";
import image1 from "../images/image5.jpg";
export default makeStyles((theme) => ({
  grid: {
    display: "block",
    margin: theme.spacing(10),
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      background: "#008900",
      color: "#fff",
      border: "2px solid transparent",
      borderRadius: "30px",
      fontSize: " 1rem",
      fontWeight: " 600",
      position: "relative",
      width: "20%",
      lineHeight: " 26px",
      transition: "transform all .450ms",
      "&:hover": {
        color: "#008900",
        background: "#fff",
        border: "2px solid #008900",
        transform: "scale(1.06)",
      },
    },
    "& .MuiTypography-root": {
      fontWeight: "300",
      color: "#fff",
      position: "relative",
      display: "block",
      lineHeight: "1.2",
    },
    "& .MuiTypography-h6": {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
      margin: theme.spacing(4),
      "& .MuiButtonBase-root": {
        width: "70%",
        lineHeight: " 26px",
        "&:hover": {
          color: "#008900",
          background: "#fff",
          border: "2px solid #008900",
          transform: "scale(1.06)",
        },
      },
      "& .MuiTypography-root": {
        fontWeight: "500",
      },
    },
  },
  back: {
    background: `url(${image1}) 40% 40%`,
    objectFit: "contain",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    marginLeft: "-2%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-6%",
      marginTop: "-1%",
      height: "100vh",
    },
  },
  toolbar: theme.mixins.toolbar,
  gridInner: {
    flexDirection: "column",
  },
  gridInner1: {
    flexDirection: "column",
  },
  div1: {
    marginTop: theme.spacing(10),
  },
  rowMargin: {
    "& .MuiTypography-root": {
      color: "#97979d",
      lineHeight: "1.5rem",
      display: " block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
      fontWeight: 400,
      fontSize: 18,
      marginLeft:'-8%',
    },
    "& .MuiTypography-h4": {
      fontWeight: "400",
      color: "#333",
    },
    "& .MuiTypography-h6": {
      fontWeight: "300",
      color: "#333",
    },
    marginLeft: "11%",
    marginRight: "11%",
  },
  gridCards: {
    marginTop: "2%",
    "& .MuiTypography-root": {
      fontWeight: "bold",
      marginBottom: theme.spacing(6),
      lineHeight: "1.5rem",
      color: "#008900",
      margin: "0 auto",
    },
    display: "flex",
  },
  gridMiddles: {
    marginTop: "3em",
    [theme.breakpoints.down("xs")]:{
      display:'flex',
      flexDirection:'column',
    }
  },
  top: { marginTop: theme.spacing(8) },
  tabTypo: {
    "& .MuiTypography-root": {
      marginLeft: "1%",
      fontWeight: "bold",
      color: "#97979d",
      lineHeight: "1.5rem",
      display: " block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
    },
    margin: "0 auto",
  },
  tabs: {
    marginTop: "4em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-1%",
      "& .MuiTypography-root": {
        fontWeight: "bold",
        fontSize: "18",
        margin:'4% 4% 4% 4%',
      },
    },
  },
  middleBack: {
    background: "#fff5d7",
    width: "100vw",
    marginLeft: "-2%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-6%",
    },
  },
  middlelow: {
    background: "#f5f5f5",
    width: "100vw",
    marginLeft: "-2%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-6%",
      '& .MuiTypography-subtitle2':{
        marginLeft:'20px',
      }
    },
  },
}));
