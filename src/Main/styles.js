import { makeStyles } from "@material-ui/core";
import image1 from "../images/image5.jpg";
export default makeStyles((theme) => ({
  gridFlex: {
    display: "flex",
  },
  gridInner: {
    flexDirection: "column",
    backgroundImage: `url(${image1})`,
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    position: "relative",
    backgroundSize: "center",
    backgroundPosition: "center",
    width: "100%",
    marginTop:theme.spacing(1.9),
    
  },
  gridInner1: {
    flexDirection: "column",
  },
  gridB: {
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
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      "&:hover": {
        color: "#9bc400",
        background: "#fff",
        border: "2px solid #9bc400",
      },
    },
  },
  div: {
    "& .MuiTypography-root": {
      fontWeight: "600",
      color: "#fff",
      marginTop: theme.spacing(3),
      position: "relative",
    },
    
  },
  rowMargin: {
    "& .MuiTypography-root": {
      marginRight: theme.spacing(4),
      fontWeight: "400",
      color: "#97979d",
      marginTop: theme.spacing(4),
      fontSize: "1rem",
      lineHeight: "1.5rem",
      display: " block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
    },
    alignItems: "center",
  },
  gridCards: {
    alignItems: "center",
    marginTop: "4em",
    "& .MuiTypography-root": {
      fontWeight: "bold",
      marginBottom: theme.spacing(6),
      lineHeight: "1.5rem",
      color: "#9bc400",
    },
    display: "flex",
  },
  gridMiddles: {
    marginTop: "7em",
  },
  tabs: {},
  tabTypo: {
    "& .MuiTypography-root": {
      marginRight: theme.spacing(4),
      fontWeight: "bold",
      color: "#97979d",
      marginTop: theme.spacing(4),
      lineHeight: "1.5rem",
      display: " block",
      marginBlockStart: "1em",
      marginBlockEnd: "1em",
    },
  },
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));
