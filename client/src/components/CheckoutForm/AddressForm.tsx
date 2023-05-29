import React from "react";
import { Link } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { Button, Grid, Typography } from "@material-ui/core";
import FormInput from "./FormInput";

const AddressForm = ({ next, setShippingData }) => {
  const methods = useForm();
  const handleDataSubmit = (data) => {
    setShippingData(data);
    next(data);
  };
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => handleDataSubmit(data))}>
          <Grid container spacing={3}>
            <FormInput
              required
              name="firstName"
              label="First name"
              // autoComplete="given-name"
            />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address" label="Address" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="ZIP" label="ZIP / Postal code" />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back To Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
