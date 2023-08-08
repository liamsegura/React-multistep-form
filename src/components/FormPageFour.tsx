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
  }`;
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
    <div className="h-[75vh] md:h-auto shadow-xl md:shadow-none m-4 md:m-0 top-28 rounded-lg right-0 left-0 bg-white absolute md:static container-fluid flex flex-col py-12 md:py-6 pb-28 md:pb-0 px-6 md:px-20 lg:w-[35rem]">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">Finishing up</h2>
      <p className="text-gray-600 text-sm mb-8">
        Double-check everything looks OK before confiming.
      </p>
      <div className="flex flex-col mb-4 bg-gray-100 p-4 rounded-md">
        <div className="flex justify-between items-center pb-4 ">
          <div>
            <p className="font-semibold text-blue-900">
              {planName}
              {formData.planType === "month" ? "(Monthly)" : "(Yearly)"}
            </p>
            <button
              className="font-semibold text-gray-400 text-xs underline"
              onClick={onChangePlan}
            >
              change
            </button>
          </div>
          <p className="text-blue-800 text-md font-bold mb-4">
            ${planPrice} {formData.planType === "month" ? "/mo" : "/yr"}
          </p>
        </div>
        <div className={selectedAddOnNames.length > 0 ? "border-t-2 pt-4" : ""}>
          <ul>
            {selectedAddOnNames.map((name, index) => (
              <li
                className="font-semibold text-gray-400 text-xs flex justify-between items-center mb-4"
                key={index}
              >
                <p> {name}</p>
                <p className="text-blue-800 text-md ">
                  +${addOnPrices[index]}
                  {formData.planType === "month" ? "/mo" : "/yr"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-gray-400 text-xs">
          Total {formData.planType === "month" ? "(Per month)" : "(Per year)"}
        </p>
        <p className="font-semibold text-purple-700 text-lg">
          +${totalCost} {formData.planType === "month" ? "/mo" : "/yr"}
        </p>
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="absolute bottom-4 md:relative md:bottom-[-10.3rem] flex justify-between md:left-0 md:right-0 right-4 left-4">
          <button
            className="text-slate-500  text-center hover: transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onPrevious}
          >
            Go Back
          </button>
          <button
            className="ml-[11rem] md:ml-[13.75rem] bg-blue-900 text-white py-3 px-6 rounded-lg  text-center hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
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
