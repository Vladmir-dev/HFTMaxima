import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  //Logo Styles
  logo: {
    height: 40,
    position: "relative",
  },
  popLogo: {
    margin: " -3% 20% 10% 25%",
  },
  //profile
  profileContainer: {
    margin: theme.spacing(12),
    "& .MuiButton-root": {
      textDecoration: "capitilize",
    },
    "& .MuiPaper-root": {
      width: "100%",
      border: "1px solid silver",
    },
  },
  profileTitle: {
    marginBottom: theme.spacing(4),
    marginLeft: "4%",
  },
  profileLeft: {
    marginRight: "0",
    marginLeft: "4%",
    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
  leftUp: {
    marginBottom: theme.spacing(7),
    "& .MuiButton-root": {
      margin: "8% 8% 8% 5.5%",
      width: "90%",
      background: "#008900",
      color: "#fff",
    },
    "& .MuiPaper-root": {
      width: "100%",
    },
  },
  leftDownFlex: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiButton-root": {
      borderRadius: "20px",
      background: "#ff1e00",
      color: "#fff",
      padding: "-2% 1rem -2% 1rem",
      fontWeight: " 600",
      position: "relative",
    },
    "& .MuiPaper-root": {
      width: "100%",
    },
    "& .MuiTypography-body1": {
      fontWeight: "bold",
      borderBottom: "1px solid #008900",
      display: "inline-block",
    },
    margin: theme.spacing(2),
  },
  profilePaper: {
    marginBottom: theme.spacing(7),
  },
  leftDownTypo: {
    margin: theme.spacing(2),
    "& .MuiCard-root": {
      marginBottom: theme.spacing(4),
    },
    "& .MuiTypography-body2": {
      margin: theme.spacing(4),
    },
    "& .MuiSvgIcon-root": {
      color: "#f2d53c",
      marginRight: "2%",
    },
  },
}));
