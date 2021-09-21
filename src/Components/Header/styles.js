import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  logo:{
    height:40,
    position:'relative',
    marginRight:theme.spacing(1)
},
  div: {
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      fontWeight: "600",
      position: "relative",
      display: " inline-block",
      lineHeight: "1",
      marginRight: "3em",
      color: "#fff",
      transition: "width .3s",
      "&:hover": {
        display: "block",
        borderBottom:'2px solid #fff'
      },
    },
    "& .MuiSvgIcon-root": {
      position: "relative",
      display: "inline-block",
    },
    display: "flex",
    alignItems: "center",
  },
  gridB: {
    display: "flex",
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      position: "relative",
      lineHeight: " 26px",
    },
    "& .MuiButton-contained": {
      color: "#164A41",
      borderBottom: "2px solid transparent",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      position: "relative",
      lineHeight: " 26px",
      background: "#fff",
      marginLeft: "0.8em",
      "&:hover": {
        color: "#fff",
        background: "#164A41",
      },
    },
    "& .MuiButton-text": {
      textTransform: "capitalize",
      color: "silver",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      position: "relative",
      lineHeight: " 26px",
      marginRight: "1.6em",
      "&:hover": {
        color: "#9bc400",
      },
    },
  },
  root: {
    background: "#000",
    top: 0,
    transition: " all 0.5s",
    padding: theme.spacing(2.5),
    opacity: ".6",
    transitionTimingFunction: "ease-in",
    zIndex: 1,
  },
  newRoot: {
    background: "#fff",
    "& .MuiTypography-root": {
      color: "#000",
      "&:hover": {
        display: "block",
        borderBottom:'2px solid #164A41'
      },
    },
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
  popper: {
    margin: "6em auto",
    marginLeft: "10%",
    "& .MuiPopover-paper": {
      width: "65%",
    },
    position: "relative",
  },
  userdiv: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiTypography-root": {
      color: "#8e8e90",
      marginTop: "1.5em",
      marginLeft: theme.spacing(2),
    },
    "& .MuiSvgIcon-root": {
      color: "#8e8e90",
    },
  },
  
}));
