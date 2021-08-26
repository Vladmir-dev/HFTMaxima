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
    "& .MuiTypography-subtitle1": {
      "&:hover": {
        color: "#9bc400",
      },
    },
  },
  cardRoot: {
    maxWidth: 280,
    backgroundColor: theme.palette.background.default,
    "& .MuiTypography-root": {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1em",
    },
  },
  cardMedia: {
    height: 140,
    backgroundSize: "cover",
    objectFit: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    alignSelf: "normal",
    marginBottom: "1.875rem",
    width: "100%",
  },
  cardButton: {
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
      background: theme.palette.background.default,
      color: "#9bc400",
      border: "2px solid #9bc400",
      borderRadius: "30px",
      fontSize: " 1.16625rem",
      fontWeight: " 600",
      paddingRight: "0.8em",
      paddingLeft: "0.8em",
      position: "relative",
      display: "inline-block",
      lineHeight: " 1em",
      "&:hover": {
        color: "#fff",
        background: "#9bc400",
        border: "2px solid #9bc400",
      },
    },
    margin: "0px auto",
  },
  gridC1: {
    display: "flex",
    justifyContent: "space-between",
    marginRight: "4%",
  },
  img: {
    backgroundRepeat: "no-repeat",
    backgroundCover: "center",
    position: "relative",
    objectFit: "contain",
    width: "100%",
  },
  menu: {
    background: theme.palette.background.paper,
    maxWidth: "50%",
    color: "#fff",
  },
  paper: {
    background: theme.palette.background.paper,
    width: "75%",
    height: "50%",
    borderRadius: "8px",
  },
  papergrid1: {
    marginLeft: "1.5em",
    margin: theme.spacing(4),
    "& .MuiTypography-root": {
      margin: theme.spacing(2),
      fontWeight: "600",
      position: "relative",
      display: " block",
      lineHeight: "1",
      color: "#a28089",
    },
    "& .MuiTypography-subtitle2": {
      color: "#9bc400",
      "&:hover": {
        color: "#9bc400",
      },
    },
    "& .MuiTypography-caption": {
      marginTop: "-1em",
    },
  },
  paperdiv: {
    "& .MuiTypography-subtitle2": {
      color: "#8D91B4",
      marginLeft: "-1em",
      "&:hover": {
        color: "#8D91B4",
      },
    },
  },
  flex: {
    display: "flex",
    justifyContent: "space-between",
    color: "#A3BCB6",
    marginLeft: theme.spacing(1),
    "& .MuiSvgIcon-root": {
      marginLeft: "10px",
      opacity: ".6",
    },
  },
  dialog: {
    "& .MuiDialog-paper": {
      width: "26%",
      padding: theme.spacing(3),
      margin: "30px auto",
    },
    "& .MuiDialogContent-root": {
      marginRight: theme.spacing(-2),
      marginLeft: theme.spacing(-2.5),
    },
    "& .MuiButtonBase-root": {
      textTransform:'capitalize',
      fontWeight:'bold'
    },
  },
  forgotBut: {
    marginLeft: "70%",
    "& .MuiButtonBase-root": {
      marginLeft: theme.spacing(1),
      "& .MuiSvgIcon-root": {
        marginLeft: "10px",
        opacity: ".6",
      },
    },
  },
}));
