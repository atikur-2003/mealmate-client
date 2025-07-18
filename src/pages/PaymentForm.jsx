import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type:'card',

    })

  };

  return (
    <div className="py-40">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white rounded-lg p-6 shadow-md max-w-[350px] mx-auto">
        <CardElement className="p-2 border rounded">
          <button type="submit" disabled={!stripe}>
            Pay
          </button>
        </CardElement>
      </form>
    </div>
  );
};

export default PaymentForm;
