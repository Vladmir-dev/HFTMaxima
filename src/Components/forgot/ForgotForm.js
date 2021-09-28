import { Grid, InputAdornment, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { Customized } from "../Customized/Customized";
import logo from "../../images/price.png";
import { Link } from "react-router-dom";
import { Form, UseForm } from "../Customized/UseForm";
import { initialState } from "../../state";
export default function ForgotForm() {
  const classes = useStyles();
  const { values, handleInputChange, setValues, handleSubmit } =
    UseForm(initialState);
  return (
    <main className={classes.container}>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} sm={6} className={classes.rightImage} align="center">
          <div className={classes.rightdivLogo}>
            <Typography component={Link} to="/" variant="h5" align="center">
              <img src={logo} alt="Maxima logo" className={classes.logo} />
              Maxima
            </Typography>
          </div>
          <div className={classes.rightXs}>
            <Typography variant="h4" gutterBottom>
              Forgot Password?
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              Enter your email and we will help you reset your password
            </Typography>
          </div>
          <div className={classes.rightdivForm}>
            <Form onSubmit={handleSubmit} className={classes.form}>
              <Customized.Input
                label="Email"
                value={values.email}
                name="email"
                type="email"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Button text="Reset Password" type="submit" />
            </Form>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}
