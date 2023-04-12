import React from "react";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useState, useEffect } from "react";

const stripePromise = loadStripe("pk_test_51MsyqEFO9onsprqUFdB9X6nuhuHPGLTXofsYCcQny1W53dZhGb042Gs7scAN9IiiqbaZQybzjtueVFoFsPp5Usr700gSXMSHrL");

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <main>
      <div className="flex flex-col justify-center">
        <div className="col-12 col-md-10 my-3">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
        </div>
      </div>
    </main>
  );
};

export default Checkout;
