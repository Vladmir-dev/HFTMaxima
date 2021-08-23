import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    background: '#fff',
    "& .MuiTypography-root": {
      color: "silver",
      fontSize: ".875rem",
      fontWeight: "600",
      position: "relative",
      marginLeft: "3em",
      marginTop:'0.8em',
    },
    marginTop:'4em',
  },
  flex1: {
    display: "flex",
    marginLeft:'9em',
    opacity:'.6',
    marginBottom:'2em',
    marginTop:'2em',
  },
  flex: {
    display: "flex",
    marginBottom:'1em',
    '& .MuiTypography-subtitle1':{
        fontSize:'20',
        fontWeight:'300',
        margin:theme.spacing(4)
    }
  },
  center:{
    margin:'10px 25em',
  }
}));
