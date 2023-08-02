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

  const planName = `Plan ${selectedPlan}`;
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
    <div className="container">
      <h2>Page Four</h2>

      <p>{planName}</p>
      <p>Plan Price: ${planPrice}</p>
      <button onClick={onChangePlan}>change</button>

      <p>Selected Add-Ons:</p>
      <ul>
        {selectedAddOnNames.map((name, index) => (
          <li key={index}>
            {name}: ${addOnPrices[index]}
          </li>
        ))}
      </ul>

      <p>Total Cost: ${totalCost}</p>
      <form onSubmit={handleFormSubmit}>
        <button onClick={onPrevious}>Previous</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPageFour;
