import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  form: {
    marginTop: "40px",
    position: "absolute",
    "& .MuiInputBase-root": {
      width: "85%",
      background: "#fff",
      color: "#000",
    },
    "& .MuiFormControl-root": {
      margin: theme.spacing(2),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(2),
      color: "#707075",
      marginTop: "10px",
      transition: "color 300ms",
      textTransform: "capitalize",
      width: "85%",
      "&:hover": {
        color: "#fff",
        background: "#008900",
      },
    },
  },
  logo: {
    height: 40,
    position: "relative",
    marginRight: theme.spacing(1),
  },
  rightdivLogo: {
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(4),
    "& .MuiTypography-h5": {
      color: "#000",
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiTypography-h5": {
        color: "#008900",
      },
    },
  },
  rightdivForm: {
    marginLeft: "25%",
    "& .MuiButton-root": {
      marginRight: "12%",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "15%",
    },
    marginTop: "-4%",
  },
  rightDiv: {
    margin: theme.spacing(10),
    marginLeft:'15%',
    marginRight:'15%',
},
container: {
  background: "#fff",
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  opacity: ".6",
},
}));
