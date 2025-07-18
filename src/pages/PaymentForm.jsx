import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error);
      console.log(error);
    } else {
      setError("");
      console.log("PaymentMethod", paymentMethod);
    }
  };

  return (
    <div className="py-40">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white rounded-lg p-6 shadow-md max-w-[300px] md:max-w-[400px] mx-auto"
      >
        <CardElement className="p-2 border rounded"></CardElement>
        <button
          type="submit"
          className="border border-blue-500 text-blue-500 py-1 rounded-lg w-full cursor-pointer"
          disabled={!stripe}
        >
          Pay
        </button>
        {
            error && <p className="text-red-500">{error}</p>
            
        }
        
      </form>
    </div>
  );
};

export default PaymentForm;
