import React from "react";
import { FaCheck } from "react-icons/fa6";

const Payment = () => {
  const plans = [
    {
      name: "BASIC",
      price: "$ 39.99",
      description: "a basic plan for payment without any stress",
      features: [
        "a basic plan for payment",
        "contracts and new orders",
        "strategy and marketing",
      ],
    },
    {
      name: "STANDARD",
      price: "$ 59.99",
      description: "an ordinary plan for payment without any stress",
      features: [
        "a basic plan for payment",
        "contracts and new orders",
        "strategy and marketing",
      ],
    },
    {
      name: "PREMIUM",
      price: "$ 89.99",
      description: "an upgrade plan for payment without any stress",
      features: [
        "a basic plan for payment",
        "contracts and new orders",
        "strategy and marketing",
      ],
    },
  ];

  return (
    <div className="w-full bg-[url('/img/home2.jpg')] bg-cover bg-center py-32">
      
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="bg-white p-10 border-3 border-blue-400 rounded-lg  text-center flex flex-col justify-between space-y-8 h-[540px]"
          >
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{plan.name}</h2>
              <p className="text-3xl text-blue-400 font-semibold">
                {plan.price}
              </p>
              <p className="text-lg text-gray-600">{plan.description}</p>
              <ul className="  text-gray-700 space-y-4">
                {plan.features.map((feature, i) => (
                  <li className="flex  items-start ps-4 gap-2" key={i}>
                    <FaCheck className=" mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className=" mx-12 py-2 border border-black  hover:bg-blue-400  hover:-translate-y-1 transition-all duration-500 ease-in-out transform ">
              BUY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
