import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ totalPrice }) => {
  const price = totalPrice * 1000;
  const publishKey =
    "pk_test_51H911oEncpkhXlhVinYbkNrSjGLq5LYvMUUMQAJiq4izAZDXVRsEUp8D4bYXbh1gs1xYYoydXIczo2R0miktbVLG00fE7VQwP9";

    const onToken = (token) => {
        console.log(token);
        alert("Payment success")
    }

  return <StripeCheckout
    label="Pay"
    name="My Company"
    billingAddress
    shippingAddress
    image="https://svgshare.com/i/CUz.svg"
    description={`The price value is ${price}`}
    panelLabel="Pay Now"
    token={onToken}
    stripeKey={publishKey}
  />;
};

export default StripeBtn;
