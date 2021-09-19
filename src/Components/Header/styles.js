import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  div: {
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      fontWeight: "600",
      position: "relative",
      display: " block",
      lineHeight: "1",
      marginRight: "3em",
      "&:hover": {
        color: "#9bc400",
        paddingBottom: "1em",
        borderBottom: "2px solid #9bc400",
        transition: "0.5s",
      },
      color: "silver",
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
      color: "#9bc400",
      borderBottom: "2px solid transparent",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      position: "relative",
      lineHeight: " 26px",
      background: "#fff",
      marginLeft: "0.8em",
      "&:hover": {
        color: "#fff",
        background: "#9bc400",
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
    transition: "0.5s",
    padding: theme.spacing(2.5),
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",

      
    },
  },
  newRoot: {
    background: "#fff",
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
    '& .MuiPopover-paper':{
      width:'65%',
    },
    position:'relative',
  },
  userdiv:{
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    '& .MuiTypography-root':{
      color:'#8e8e90',
      marginTop:'1.5em',
      marginLeft:theme.spacing(2)
    },
    '& .MuiSvgIcon-root':{
      color:'#8e8e90',
    }
  }
}));
