import React from "react";

type PlanType = "month" | "year";

interface FormThreeProps {
  formData: {
    planType: string;
    addOns: number[];
  };
  onNext: () => void;
  onPrevious: () => void;
  onChange: (name: string, value: number[] | PlanType) => void;
}

const FormPageTree: React.FC<FormThreeProps> = ({
  formData,
  onNext,
  onPrevious,
  onChange,
}) => {
  const handleOptionClick = (option: number) => {
    const selectedOptions = formData.addOns.includes(option)
      ? formData.addOns.filter((selectedOption) => selectedOption !== option)
      : [...formData.addOns, option];
    onChange(
      "addOns",
      selectedOptions.sort((a, b) => a - b)
    );
  };

  return (
    <>
      <div className="container">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        {formData.planType === "month" ? (
          <>
            month
            <div
              className={`option ${
                formData.addOns.includes(1) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
            <div
              className={`option ${
                formData.addOns.includes(2) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div
              className={`option ${
                formData.addOns.includes(3) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
          </>
        ) : (
          <>
            year
            <div
              className={`option ${
                formData.addOns.includes(1) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              <p>Online service</p>
              <p>Access to multiplayer games</p>
            </div>
            <div
              className={`option ${
                formData.addOns.includes(2) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              <p>Larger storage</p>
              <p>Extra 1TB of cloud save</p>
            </div>
            <div
              className={`option ${
                formData.addOns.includes(3) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
              <p>Customizable profile</p>
              <p>Custom theme on your profile</p>
            </div>
          </>
        )}
        <button onClick={onPrevious}>Go Back</button>
        <button onClick={onNext}>Next Step</button>
      </div>
    </>
  );
};

export default FormPageTree;
