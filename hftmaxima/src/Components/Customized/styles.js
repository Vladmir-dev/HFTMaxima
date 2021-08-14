import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 210,
    lineHeight: "1.5rem",
    backgroundColor: theme.palette.background.default,
    "& .MuiTypography-root": {
      top: "1px",
      marginTop: "1px",
      bottom: " -1.5em",
      color: "#97979d",
      fontSize: "1rem",
      fontWeight: "400",
      position: "relative",
      "&:hover": {
        color: "#9bc400",
      },
    },
    "& .MuiSvgIcon-root": {
      color: "#8e8e90",
      marginLeft: "3em",
      "&:hover": {
        color: "#9bc400",
      },
    },
    "& .MuiListItem-divider": {
      borderBottom: "0.2px solid #333",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  breadC: {
    "& .MuiTypography-root": {
      top: "1px",
      marginTop: "1px",
      bottom: " -1.5em",
      color: "#8e8e90",
      fontSize: ".875rem",
      fontWeight: "600",
      position: "relative",
    },
    "& .MuiBreadcrumbs-separator": {
      color: "#333",
    },
  },
  cardRoot: {
    maxWidth: 280,
    backgroundColor: theme.palette.background.default,
    "& .MuiTypography-root": {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "26px",
    },
    
  },
  cardMedia: {
    height: 140,
    backgroundSize: "cover",
    objectFit:'contain',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    alignSelf: "normal",
    marginBottom: "1.875rem",
    width: "100%",
  },
  cardButton:{
    marginLeft:'4.2em',
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      background: theme.palette.background.default,
      color: "#9bc400",
      border: "2px solid #9bc400",
      borderRadius: "30px",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      paddingRight: '0.8em',
      paddingLeft: '0.8em',
      position: "relative",
      display: "inline-block",
      lineHeight: " 26px",
      "&:hover": {
        color: "#fff",
        background: "#9bc400",
        border: "2px solid #9bc400",
      }
    }
  },
  gridC1:{
    display:'flex',
    justifyContent:'space-around'
  }
}));
