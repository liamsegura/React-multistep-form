import React from "react";
import { PricingInfo } from "./PriceInfo";

interface FormFourProps {
  formData: {
    plan: number;
    planType: string;
    addOns: number[];
  };
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onChange: (name: string, value: string) => void;
  onChangePlan: () => void;
}

const FormPageFour: React.FC<FormFourProps> = ({
  formData,
  onPrevious,
  onChangePlan,
  onSubmit,
}) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  const pricingInfo = PricingInfo as unknown as {
    [key: string]: {
      planType: string;
      plans: number[];
      addOns: { [key: number]: number };
    };
  };
  // Calculate the total cost based on the user's selections
  const calculateTotalCost = () => {
    const selectedPlan = pricingInfo[formData.planType];
    if (!selectedPlan) return 0;

    const planCost = selectedPlan.plans[formData.plan - 1] || 0;
    const selectedAddOns = formData.addOns || [];

    const addOnCosts = selectedAddOns.map(
      (addOn) => selectedPlan.addOns[addOn] || 0
    );

    const totalCost =
      planCost + addOnCosts.reduce((total, addOnCost) => total + addOnCost, 0);
    return totalCost;
  };

  const totalCost = calculateTotalCost(); // Calculate the total cost

  const selectedPlanInfo = pricingInfo[formData.planType];
  const selectedPlan = formData.plan;
  const selectedAddOns = formData.addOns || [];

  const planName = `${
    selectedPlan === 1 ? "Arcade" : selectedPlan === 2 ? "Advanced" : "Pro"
  } (${selectedPlanInfo.planType === "month" ? "Monthly" : "Yearly"})`;
  const planPrice = selectedPlanInfo.plans[selectedPlan - 1] || 0;

  const selectedAddOnNames = selectedAddOns.map((addOn) =>
    addOn === 1
      ? "Online services"
      : addOn === 2
      ? "Larger storage"
      : addOn === 3
      ? "Customizable profile"
      : null
  );
  const addOnPrices = selectedAddOns.map(
    (addOn) => selectedPlanInfo.addOns[addOn] || 0
  );

  return (
    <div className="container-fluid flex flex-col py-6 px-10 md:px-20 lg:w-[35rem]">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">Finishing up</h2>
      <p className="text-gray-600 text-sm mb-4">
        Double-check everything looks OK before confiming.
      </p>

      <p className="font-semibold text-blue-900">{planName}</p>
      <p className="font-semibold text-gray-400 text-xs">
        ${planPrice} {selectedPlanInfo.planType === "month" ? "/mo" : "/yr"}
      </p>
      <button
        className="font-semibold text-gray-400 text-xs"
        onClick={onChangePlan}
      >
        change
      </button>

      <p className="font-semibold text-gray-400 text-xs"> Selected Add-Ons:</p>
      <ul>
        {selectedAddOnNames.map((name, index) => (
          <li className="font-semibold text-gray-400 text-xs" key={index}>
            {name}: ${addOnPrices[index]}
          </li>
        ))}
      </ul>

      <p className="font-semibold text-gray-400 text-xs">
        Total Cost: ${totalCost}
      </p>
      <form onSubmit={handleFormSubmit}>
        <div className="flex justify-between mt-16">
          <button
            className="text-slate-500  text-center hover: transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onPrevious}
          >
            Go Back
          </button>
          <button
            className=" bg-blue-900 text-white py-3 px-6 rounded-lg  text-center hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
            type="submit"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPageFour;
