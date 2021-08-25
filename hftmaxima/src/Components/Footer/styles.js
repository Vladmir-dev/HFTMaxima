import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    borderTop: "1px solid #8e8e90",
    background: '#333',
    "& .MuiTypography-root": {
      color: "silver",
      fontSize: ".875rem",
      fontWeight: "600",
      position: "relative",
      marginLeft: "3em",
      marginTop:'0.8em',
    },
  },
  rightButton: {
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
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
      "&:hover": {
        color: "#9bc400",
      },
      "& .MuiButton-label": {
        marginLeft: "2.3em",
      },
    },
    marginRight:'2em',
  },
  leftButton: {
    display: "flex",
    "& .MuiButtonBase-root": {
      borderRadius: "50%",
      width: "2.5rem",
      height: "2.5rem",
      marginRight: "1.875rem",
      minWidth: "2.5rem",
      display: "flex",
      webkitBoxAlign: "center",
      alignItems: "center",
      webkitBoxPack: "center",
      justifyContent: "center",
      position: "relative",
      webkitTransition: " .3s all",
      transition: ".3s all",
      border: "2px solid #9bc400",
    },
    "& .MuiSvgIcon-root": {
      marginLeft: "10px",
      color: "#9bc400",
    },
    marginLeft:'1em',
  },
  flex: {
    display: "flex",
  },
}));
