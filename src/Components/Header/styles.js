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
        borderBottom:'2px solid #008900'
      },
    },
    "& .MuiSvgIcon-root": {
      position: "relative",
      display: "inline-block",
      marginBottom:'-5%'
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
      color: "#008900",
      borderBottom: "2px solid transparent",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      position: "relative",
      lineHeight: " 26px",
      background: "#fff",
      marginLeft: "0.8em",
      "&:hover": {
        color: "#fff",
        background: "#008900",
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
        color: "#008900",
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
    "& .MuiSvgIcon-root": {
      color: "#fff",
    },
  },
  newRoot: {
    background: "#fff",
    "& .MuiTypography-root": {
      color: "#000",
      "&:hover": {
        display: "block",
        borderBottom:'2px solid #008900'
      },
    },
    "& .MuiSvgIcon-root": {
      color: "#000",
    },
  },
  divT: {
    "& .MuiTypography-root": {
      right: " -15.5em",
      top: "1px",
      marginTop: "1px",
      bottom: " -1.5em",
      color: "#008900",
      fontSize: ".875rem",
      fontWeight: "600",
      position: "relative",
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
    margin: "3.4% auto",
    "& .MuiPopover-paper": {
      width: "60%",
    },
    position: "relative",
    opacity:'.9',
  },
  popper1: {
    "& .MuiPopover-paper": {
      width: "60%",
    },
    position: "relative",
    opacity:'.9',
    marginTop:'-30%',
    [theme.breakpoints.down("sm")]:{
      display:({xsMenuOpen})=>  (xsMenuOpen ? 'flex':'none'),
      "& .MuiPopover-paper": {
        width: "100vw",
        height:'70vh',
        margin:'-5% 2% 0% -3.5%'
      },
      "& .MuiTypography-root": {
        color:'#000'
      },
    },
    [theme.breakpoints.up("sm")]:{
      display:({xsMenuOpen})=>  (xsMenuOpen ? 'none':'none')
    }
    
  },
  xs:{
    display:'none',
    [theme.breakpoints.down("md")]:{
      display:'block'
    }
  },
  lg:{
    display:'none',
    [theme.breakpoints.up("md")]:{
      display:'block'
    }
  },
  menu:{
    display:'none',
    '& .MuiSvgIcon-root':{
      position:'relative',
    },
    [theme.breakpoints.down("sm")]:{
     display:'block',
    }
  }
}));
