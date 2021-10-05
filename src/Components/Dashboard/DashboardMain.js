import {
  Box,
  Grid,
  Stepper,
  Step,
  StepLabel,
  Typography,
  StepContent,
  Paper,
} from "@material-ui/core";
import React, { useState } from "react";
import { Customized } from "../Customized/Customized";
import { steps } from "./arsenal";
import useStyles from "./styles";
export default function DashboardMain({ user }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <main className={classes.background}>
      <Paper>
        <Typography variant="h5" gutterBottom align="center">
          {activeStep === 0 ? "Checkout" : "Payment Reciept"}
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <Typography variant='subtitle1'>{step.description}</Typography>
              <Customized.Button
            onClick={handleNext}
            text={index === steps.length - 1 ? "Finish" : "Continue"}
            sx={{ mt: 1, mr: 1 }}
          />
          <Customized.Button
            onClick={handleNext}
            disable={index === 0}
            sx={{ mt: 1, mr: 1 }}
            onClick={handleBack}
            text="Back"
          />
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <div>Hello</div>
        ) : (
          user && <div>Hey</div>
        )}
      </Paper>
    </main>
  );
}
