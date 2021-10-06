import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Customized } from "../Customized/Customized";
import { Form } from "../Customized/UseForm";
const useStyles = makeStyles((theme) => ({
  profileInputs: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiFormControl-root": {
      width: "92%",
      margin: theme.spacing(1.5),
    },
    marginBottom: "3%",
  },
  profileInputsPassword: {
    "& .MuiFormControl-root": {
      width: "96%",
      margin: theme.spacing(1.5),
    },
    marginBottom: "3%",
  },
  profileInputsSelect: {
    "& .MuiFormControl-root": {
      width: "96%",
      margin: theme.spacing(1.5),
    },
    marginBottom: "3%",
  },
  profileTitle: {
    "& .MuiTypography-subtitle2": {
      marginLeft: theme.spacing(2),
      marginTop: "3%",
      borderBottom: "1px solid #008900",
      display: "inline-block",
    },
    marginBottom: "3%",
  },
  profileTitleBottom: {
    right: 0,
    "& .MuiTypography-body2": {
      textAlign: "right",
      marginRight: theme.spacing(3),
      color: "#008900",
      "&:hover": {
        color: "#000",
      },
      
    },
  },
}));
export const PapLayoutDetail = ({ subtitle, Name, Email, Mobile, Gender }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Form>
        <Grid xs={12} className={classes.profileInputs}>
          <div>
            <Customized.Input label={Name} required />
            <Customized.Input label={Email} required />
          </div>
          <div>
            <Customized.Input label={Mobile} required />
            <Customized.Input label={Gender} />
          </div>
        </Grid>
      </Form>
    </Paper>
  );
};
export const PapLayoutPassword = ({ subtitle, input1, input2 }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Form>
        <Grid xs={12} className={classes.profileInputsPassword}>
          <Customized.Input label={input1} required />
          <Customized.Input label={input2} required />
        </Grid>
      </Form>
      <div className={classes.profileTitleBottom}>
        <Typography variant="body2">Show Password</Typography>
      </div>
    </Paper>
  );
};

export const PapLayout1 = ({ subtitle, input1 }) => {
  const classes = useStyles();
  return (
    <Paper elevation={2}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Grid xs={12} className={classes.profileInputsSelect}>
        <Form>
          <Customized.Input label={input1} />
        </Form>
      </Grid>
    </Paper>
  );
};
