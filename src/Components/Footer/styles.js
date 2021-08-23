import { makeStyles } from "@material-ui/core";
export default makeStyles((theme) => ({
  appBar: {
    bottom: 0,
    background: '#fff',
    marginTop:'4em',
  },
  flex1: {
    opacity:'.6',
    marginBottom:'2em',
    marginTop:'2em',
    margin:'0 auto',
  },
  flex: {
    display: "flex",
    marginBottom:'1em',
    "& .MuiTypography-root": {
      color: "silver",
      fontSize: ".875rem",
      fontWeight: "600",
      position: "relative",
      marginLeft: "3em",
      marginTop:'0.8em',
    },
    '& .MuiTypography-subtitle1':{
        fontSize:'20',
        fontWeight:'300',
        margin:theme.spacing(4)
    },
    margin:'0 auto',
  },
  center:{
    margin:'0 auto'
  }
}));
