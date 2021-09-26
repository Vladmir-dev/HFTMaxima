import React from "react";
import {Grid, Typography } from "@material-ui/core";
import { Customized } from "../../Components/Customized/Customized";
import { Form, UseForm } from "../Customized/UseForm";
import { initialState } from "../../state";
import useStyles from "./styles";
import GoogleLogin from "react-google-login";
import { Image } from "../../images/Img";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GOOGLE_LOGIN } from "../../Actions/types";
import logo from "../../images/price.png";
export default function Login() {
  const [openPopup, setOpenPopup] = React.useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { values, handleInputChange, setValues } = UseForm(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const googleSuccess = (res) => {
    const results = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: GOOGLE_LOGIN, payload: { results, token } });
      history.push("/algorithm");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful, try again later");
  };
  return (
    <main className={classes.container}>
      <Grid container spacing={6} justify='center'>
        <Grid item xs={12} sm={6} className={classes.leftImage}>
        <div className={classes.div}>
        <Typography
              variant="h4"
              style={{ fontWeight: "bold"}}
              gutterBottom
            >
              Welcome! To <span style={{color:'#008900'}}>Maxima.</span>
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "300"}}
              gutterBottom
            >
              We got you covered in your trading interest, have your
              way with our platform. Our interest is giving you the best experience a trader can ever 
              receive. Learn basic skills to make profit and regulate volatility.
              Play around with our features and you might get lucky but this is only possible if you login with
              your email
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "100"}}
              align="center"
            >
              Or
            </Typography>
          </div>
          <div className={classes.divButton}>
            <GoogleLogin
              clientId={process.env.CLIENTID}
              render={(renderProps) => (
                <Customized.Button
                  className={classes.google}
                  startIcon={<Image />}
                  text="Sign in with Google"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
              )}
              cookiePolicy="single_host_origin"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
            />
            <Customized.Button
              className={classes.facebook}
              startIcon={<FacebookIcon />}
              text="Sign in with facebook"
              fullWidth
            />
          </div>
          <div className={classes.div}>
            <Typography variant="body2" gutterBottom align="right">
              Don't have an account?
              <Typography
                variant="subtitle2"
                component={Link}
                to="/auth/register"
              >
                Sign up
              </Typography>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} align="center" className={classes.divRight}>
          <div className={classes.divLogo}>
            <Typography
              component={Link}
              to="/"
              variant="h5"
              align="center"
            >
              <img src={logo} alt="Maxima logo" className={classes.logo} />
              Maxima
            </Typography>
          </div>
          <div className={classes.xs}>
            <Typography
              variant="h4"
              gutterBottom

            >
              Sign in to Maxima
            </Typography>
            <Typography variant="caption" gutterBottom>
              Enter your details to access your account
            </Typography>
          </div>
          <div className={classes.divForm}>
            <Form
              onSubmit={handleSubmit}
              className={classes.form}
            >
              <Customized.Input
                label="Email"
                value={values.email}
                name="email"
                type="email"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Input
                label="Password"
                value={values.password}
                name="password"
                type="password"
                onChange={handleInputChange}
                variant="outlined"
              />
              <div className={classes.xs}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  component={Link}
                  to='/auth/forgot'
                >
                  Forgot password?
                </Typography>
              </div>
              <Customized.Button text="Login" type="submit" fullWidth />
            </Form>
          </div>
          <div className={classes.divTop} >
            <Typography variant="body2" gutterBottom align="right">
              Don't have an account?
              <Typography
                variant="subtitle2"
                component={Link}
                to="/auth/register"
              >
                Sign up
              </Typography>
            </Typography>
          </div>
          
        </Grid>
      </Grid>
    </main>
  );
}
