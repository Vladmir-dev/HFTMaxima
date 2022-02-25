import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { Customized } from "../../Components/Customized/Customized";
import { Form, UseForm } from "../../Components/Customized/UseForm";
import useStyles from "./styles";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Image } from "../../images/Img";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GOOGLE_LOGIN } from "../../Actions/types";
import logo from "../../images/price.png";
import { loginUser } from "../../Actions/authActions";
export default function Login() {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");
  const history = useHistory();
  const classes = useStyles();
  const { loginValues, handleInputChange, handleFormClear } = UseForm();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(loginValues));
    handleFormClear();
  };
  const googleSuccess = (res) => {
    const results = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: GOOGLE_LOGIN, payload: { results, token } });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google sign in was unsuccessful, try again later");
  };
  const facebookLogin = (response) => {
    setData(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  return (
    <main className={classes.container}>
      <Grid container spacing={6} justify="center">
        <Grid item xs={12} sm={6} className={classes.leftImage}>
          <div className={classes.div}>
            <Typography
              variant="h4"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Welcome! To <span style={{ color: "#008900" }}>Maxima.</span>
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "300" }}
              gutterBottom
            >
              We got you covered in your trading interest, have your way with
              our platform. Our interest is giving you the best experience a
              trader can ever receive. Learn basic skills to make profit and
              regulate volatility. Play around with our features and you might
              get lucky but this is only possible if you login with your email
            </Typography>
            <Typography
              variant="h6"
              style={{ fontWeight: "100" }}
              align="center"
            >
              Or
            </Typography>
          </div>
          <div className={classes.divButton}>
            <GoogleLogin
              clientId={process.env.REACT_APP_CLIENTID}
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
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_KEY}
              autoLoad={false}
              fields="name,email,picture"
              scope="public_profile"
              callback={facebookLogin}
              icon={<FacebookIcon fontSize="small" />}
              cssClass={classes.facebook}
            />
          </div>
          <div className={`${classes.div} ${classes.copydiv}`}>
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
            <Typography component={Link} to="/" variant="h5" align="center">
              <img src={logo} alt="Maxima logo" className={classes.logo} />
              Maxima
            </Typography>
          </div>
          <div className={classes.xs}>
            <Typography variant="h4" gutterBottom>
              Sign in to Maxima
            </Typography>
            <Typography variant="caption" gutterBottom>
              Enter your details to access your account
            </Typography>
          </div>
          <div className={classes.divForm}>
            <Form onSubmit={handleSubmit} className={classes.form}>
              <Customized.Input
                label="Username"
                value={loginValues.username}
                name="username"
                // type="text"
                onChange={handleInputChange}
                variant="outlined"
              />
              <Customized.Input
                label="Password"
                value={loginValues.password}
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
                  to="/auth/forgot"
                >
                  Forgot password?
                </Typography>
              </div>
              <Customized.Button text="Login" type="submit" fullWidth />
            </Form>
          </div>
          <div className={classes.divTop}>
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
