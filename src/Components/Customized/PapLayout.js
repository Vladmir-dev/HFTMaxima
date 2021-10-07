import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { Customized } from "../Customized/Customized";
import { Form } from "../Customized/UseForm";
const useStyles = makeStyles((theme) => ({
  profileInputs: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1.5),
    },
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
    "& .MuiButton-root": {
      marginLeft: "2%",
      marginTop: "3%",
    },
    "& .MuiTypography-caption": {
      marginLeft: "2%",
    },
    marginBottom: "3%",
  },
  profileInputsPassword: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1.5),
      borderRadius: "20px",
    },
    marginBottom: "3%",
  },
  profileInputsSelect: {
    "& .MuiFormControl-root": {
      width: "70%",
      margin: theme.spacing(1.5),
      borderRadius: "20px",
    },
    "& .MuiButton-root": {
      marginLeft: "2%",
      marginTop: "3%",
    },
    "& .MuiTypography-caption": {
      marginLeft: "2%",
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
      color: "#008900",
      "&:hover": {
        color: "#000",
      },
    },
  },
  //security passwords
  securityInputsPassword: {
    "& .MuiFormControl-root": {
      width: "50%",
      margin: theme.spacing(1.5),
      borderRadius: "20px",
    },
    marginBottom: "3%",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  },
  caption: {
    "& .MuiTypography-caption": {
      marginLeft: "2%",
      alignText: "left",
    },
    "& .MuiFormControl-root": {
      width: "50%",
      margin: "3% 0% 0% 2%",
    },
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  },
  securityTitleBottom: {
    "& .MuiTypography-body2": {
      textAlign: "right",
      color: "#008900",
      "&:hover": {
        color: "#000",
      },
      marginTop: "-5%",
      marginRight: "50%",
    },
    "& .MuiButton-root": {
      marginLeft: "3%",
      marginTop: "3%",
    },
  },
  // payments styles
  paymentsInputs: {
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
    "& .MuiFormControl-root": {
      marginBottom:theme.spacing(1),
      marginTop:theme.spacing(3),
      marginLeft:theme.spacing(2)
    },
  },
  paymentsInputsSelect: {
    "& .MuiFormControl-root": {
      marginTop:theme.spacing(3),
      marginLeft:theme.spacing(2),
    },
    marginBottom: "3%",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  },
}));
export const PapLayoutDetail = ({
  subtitle,
  Name,
  Email,
  MaximaID,
  accType,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Form>
        <Grid xs={12} className={classes.profileInputs}>
          <Customized.Input label={MaximaID} />
          <Customized.Input label={accType} />
          <Customized.Input label={Name} />
          <Customized.Input label={Email} />
          <Customized.Button text="Back" />
        </Grid>
      </Form>
    </Paper>
  );
};
export const PapLayoutContact = ({ subtitle, country, mobile }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Form>
        <Grid xs={12} className={classes.profileInputs}>
          <Customized.Select label={country} />
          <Customized.Input label={mobile} />
          <Typography variant="caption">
            By presenting your phone number, you accept Maxima to contact you
            with Notifications and other information.
          </Typography>
          <Customized.Button text="Update" />
        </Grid>
      </Form>
    </Paper>
  );
};
export const PapLayoutPassword = ({
  subtitle,
  currentPassword,
  newPassword,
  confirmPassword,
}) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Form>
        <Grid xs={12} className={classes.securityInputsPassword}>
          <div>
            <Customized.Input label={currentPassword} />
          </div>
          <div>
            <Customized.Input label={newPassword} />
            <Customized.Input label={confirmPassword} />
          </div>
        </Grid>
      </Form>
      <div className={classes.securityTitleBottom}>
        <Customized.Button text="Submit" />
        <Typography variant="body2" align="center">
          Show Password
        </Typography>
      </div>
    </Paper>
  );
};
export const PapLayoutPasswordCaption = ({ subtitle }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Grid xs={12} className={classes.caption}>
        <Form>
          <Typography variant="caption" align="center">
            Your Exclusive recent logins are listed below. If any looks weird to
            your knowledge, please update password to protect your account
          </Typography>
          <Customized.Input placeholder="recent logins" />
        </Form>
      </Grid>
    </Paper>
  );
};

export const PapLayout1 = ({ subtitle }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Grid xs={12} className={classes.profileInputsSelect}>
        <Form>
          <Typography variant="caption">
            Verify your account if you haven't
          </Typography>
          <Customized.Button text="Verify Account" />
        </Form>
      </Grid>
    </Paper>
  );
};

export const PapLayoutPayments = ({ subtitle }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Grid xs={12} className={classes.paymentsInputsSelect}>
        <Form>
          <Customized.Select label="Payment Getway" />
        </Form>
      </Grid>
    </Paper>
  );
};

export const PapLayoutPaymentsContact = ({ subtitle, country }) => {
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.profileTitle}>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </div>
      <Form>
        <Grid xs={12} className={classes.paymentsInputs}>
          <Customized.Select label={country} />
          <Customized.Input label="Payment Identifier" />
          <Customized.Button text="Submit" />
        </Grid>
      </Form>
    </Paper>
  );
};
