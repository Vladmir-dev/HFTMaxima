import { makeStyles } from "@material-ui/core";
import image1 from "../images/image5.jpg";
export default makeStyles((theme) => ({
  grid: {
    display: "block",
    margin: theme.spacing(10),
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      background: "#9bc400",
      color: "#fff",
      border: "2px solid transparent",
      borderRadius: "30px",
      fontSize: " 1rem",
      fontWeight: " 600",
      position: "relative",
      width: "20%",
      lineHeight: " 26px",
      "&:hover": {
        color: "#9bc400",
        background: "#fff",
        border: "2px solid #9bc400",
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
  },
  back: {
    background: `url(${image1}) 50% 50%`,
    objectFit: "contain",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    left: 0,
    marginLeft: '-2%',
    position: "relative",
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
      fontWeight: "300",
      color: "#97979d",
      marginTop: theme.spacing(4),
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: " block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
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
      color: "#9bc400",
      margin: "0 auto",
    },
    display: "flex",
  },
  gridMiddles: {
    marginTop: "3em",
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
  tabs: { marginTop: "4em" },
  middleBack: {
    background: "#fff5d7",
    width: "100vw",
    marginLeft: '-2%',
  },
  middlelow: {
    background: "#f5f5f5",
    width: "100vw",
    marginLeft: '-2%',
  },
}));
