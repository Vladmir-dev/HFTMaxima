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
      borderBottom: '0.2px solid #333',
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
}));
