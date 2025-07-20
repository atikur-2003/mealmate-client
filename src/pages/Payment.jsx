import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";
import { useParams } from "react-router";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const packages = [
  { name: "Silver", price: 499 },
  { name: "Gold", price: 899 },
  { name: "Platinum", price: 1299 },
];

const Payment = () => {
  const { packageName } = useParams();
  const selectedPackage = packages.find(
    (pkg) => pkg.name.toLowerCase() === packageName
  );

  if (!selectedPackage) return <p>Invalid package</p>;

  return (
    <div className="py-26">
      <div className="mb-10">
        <h2 className="text-2xl md:text-3xl text-blue-500 font-bold text-center mb-2">
        Pay for {selectedPackage.name} Package
      </h2>
      <p className="text-gray-500 font-medium text-center">Use your card to pay for the package and get the membership package</p>
      </div>
      <Elements stripe={stripePromise}>
        <PaymentForm selectedPackage={selectedPackage} />
      </Elements>
    </div>
  );
};

export default Payment;
