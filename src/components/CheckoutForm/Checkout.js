import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "../../styles/checkout-style";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import { Link } from "react-router-dom";
const steps = ["Shipping address", "Payment details"];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  console.log(shippingData);
  let Confirmation = () => (
    <>
      <div>
        <Typography variant="h6">
          Thank you for your purchase! {shippingData.firstName}{" "}
          {shippingData.lastName}
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">
          Order ref: {shippingData.lastName}1Ba34
        </Typography>
      </div>
      <br />
      <Button href="/" variant="outlined" type="button">
        Back To Home Page
      </Button>
    </>
  );

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm next={next} setShippingData={setShippingData} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        backStep={backStep}
        nextStep={nextStep}
      />
    );

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  return (
    <>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
