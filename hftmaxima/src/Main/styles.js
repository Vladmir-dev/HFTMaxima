import { makeStyles } from "@material-ui/core";
import image1 from "../images/image5.jpg";
export default makeStyles((theme) => ({
  gridFlex: {
    display: "flex",
    margin: "2em",
  },
  gridInner: {
    flexDirection: "column",
    marginLeft: "5em",
    flexDirection: "column",
    backgroundImage: `url(${image1})`,
    backgroundRepeat: "no-repeat",
    objectFit: "contain",
    position: "relative",
    backgroundSize: "center",
    backgroundPosition: "center",
    height: "23em",
  },
  gridInner1: {
    flexDirection: "column",
  },
  gridB: {
    marginLeft: "4em",
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
      width: "12em",
      lineHeight: " 26px",
      marginTop: theme.spacing(10),
      "&:hover": {
        color: "#9bc400",
        background: "#fff",
        border: "2px solid #9bc400",
      },
    },
  },
  div: {
    "& .MuiTypography-root": {
      marginRight: theme.spacing(4),
      fontWeight: "600",
      color: "#fff",
      marginTop: theme.spacing(4),
    },
    alignItems: "center",
  },
  rowMargin: {
    marginLeft: "5em",
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
}));
