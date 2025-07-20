import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const PaymentForm = ({ selectedPackage }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate()

  const userEmail = user.email;

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
      setError(error.message);
      return;
    } else {
      setError("");
    }

    //payment intent creation
    const res = await axiosSecure.post("/create-payment-intent", {
      price: selectedPackage.price,
    });

    const clientSecret = res.data.clientSecret;

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
        receipt_email: userEmail,
      });

    if (confirmError) {
      Swal.fire(confirmError.message);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const paymentData = {
        email: userEmail,
        package: selectedPackage.name,
        price: selectedPackage.price,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      console.log(paymentData);

      // save payment history to db
      await axiosSecure.post("/payments", paymentData);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Payment Successful",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/')
    }
  };

  return (
    <div>
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
          Pay ৳ {selectedPackage.price}
        </button>

        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
