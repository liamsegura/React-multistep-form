import React from "react";
import { PricingInfo } from "./PriceInfo";

interface FormFourProps {
  formData: {
    planType: string;
    addOns: number[];
  };
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onChange: (name: string, value: string) => void;
}

const FormPageFour: React.FC<FormFourProps> = ({
  formData,
  onPrevious,
  onSubmit,
}) => {
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  // Calculate the total cost based on the user's selections
  const calculateTotalCost = () => {
    const pricingInfo = PricingInfo as unknown as {
      [key: string]: {
        plan: number;
        addOns: { [key: number]: number }[];
      };
    };

    const selectedPlan = pricingInfo[formData.planType];
    if (!selectedPlan) return 0;

    // Access the plan cost and add-ons from selectedPlan
    const planCost = selectedPlan.plan;
    const selectedAddOns = formData.addOns || []; // Assuming you have addOns in formData
    const addOnCosts = selectedAddOns.map((addOn) => {
      const addOnInfo = selectedPlan.addOns[addOn - 1]; // Subtract 1 to match array index
      return Object.values(addOnInfo)[0]; // Get the cost value from the addOnInfo object
    });

    // Calculate the total cost
    const totalCost =
      planCost + addOnCosts.reduce((total, addOnCost) => total + addOnCost, 0);
    return totalCost;
  };

  const totalCost = calculateTotalCost(); // Calculate the total cost

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <h2>Page Four</h2>
        {/* Display the total cost */}
        <p>Total Cost: ${totalCost}</p>

        <button onClick={onPrevious}>Previous</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormPageFour;
