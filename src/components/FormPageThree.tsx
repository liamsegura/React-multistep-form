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
        <h2>Page Three</h2>
        {formData.planType === "month" ? (
          <>
            month
            <div
              className={`option ${
                formData.addOns.includes(1) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(1)}
            >
              Option 1
            </div>
            <div
              className={`option ${
                formData.addOns.includes(2) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              Option 2
            </div>
            <div
              className={`option ${
                formData.addOns.includes(3) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
              Option 3
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
              Option 1
            </div>
            <div
              className={`option ${
                formData.addOns.includes(2) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(2)}
            >
              Option 2
            </div>
            <div
              className={`option ${
                formData.addOns.includes(3) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(3)}
            >
              Option 3
            </div>
          </>
        )}
      </div>
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </>
  );
};

export default FormPageTree;
