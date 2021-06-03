import React, { useContext } from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import {
  Elements,
  CardElement,
  ElementsConsumer,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import { CartContext, CartSubtotalContext } from "../../PlantContext";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ shippingData, backStep, nextStep }) => {
  const [cartItems] = useContext(CartContext);
  const [subtotal] = useContext(CartSubtotalContext);

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) console.log(error);
    else {
      const orderData = {
        customer: {
          firstname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        payment: {
          gateway: "stripe",
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };
      nextStep();
    }
  };

  return (
    <>
      <Review cartItems={cartItems} subtotal={subtotal} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment method
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
              <CardElement />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button onClick={backStep} variant="outlined">
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!stripe}
                  color="primary"
                >
                  Pay ${subtotal}
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </>
  );
};

export default PaymentForm;
