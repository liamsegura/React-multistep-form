import React, { useEffect, useState } from "react";
import { PricingInfo } from "./PriceInfo";

interface FormTwoProps {
  formData: {
    planType: string;
    plan: number;
    addOns: number[];
  };
  onNext: () => void;
  onPrevious: () => void;

  onChange: (name: string, value: string | number | []) => void;
  checked: boolean;
  handleCheckBox: () => void;
  checkBox: boolean;
}
interface SelectableDivProps {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const SelectableDiv: React.FC<SelectableDivProps> = ({
  selected,
  onClick,
  children,
}) => {
  return (
    <div
      className={`selectable-div ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
const FormPageTwo: React.FC<FormTwoProps> = ({
  formData,
  onNext,
  onPrevious,
  onChange,
  handleCheckBox,
  checkBox,
}) => {
  useEffect(() => {
    setSelectedDivs(formData.plan - 1); // Subtract 1 to match the index in the plans array
  }, [formData.plan]);
  const [selectedDivs, setSelectedDivs] = useState<number | null>(null);

  const handleDivClick = (index: number) => {
    setSelectedDivs(index);
    onChange("plan", index + 1);
    onChange("planType", !checkBox ? "month" : "year");
  };

  const [isFormValid, setIsFormValid] = useState(true);
  const handleNextStep = () => {
    if (formData.plan) {
      setIsFormValid(true);
      onNext();
    } else {
      setIsFormValid(false);
    }
  };
  useEffect(() => {
    // Clear addons when the plan changes
    if (formData.plan !== 0) {
      onChange("addOns", []);
    }
  }, [formData.plan]);

  const pricingInfo = PricingInfo as unknown as {
    [key: string]: {
      plans: number[];
      addOns: { [key: number]: number };
    };
  };

  return (
    <div className="container">
      <h2>Page Two</h2>
      {!checkBox ? (
        <>
          <SelectableDiv
            selected={selectedDivs === 0}
            onClick={() => handleDivClick(0)}
          >
            <p>Arcade</p>
            <p>${pricingInfo["month"].plans[0]}/mo</p>
          </SelectableDiv>
          <SelectableDiv
            selected={selectedDivs === 1}
            onClick={() => handleDivClick(1)}
          >
            <p>Advanced</p>
            <p>${pricingInfo["month"].plans[1]}/mo</p>
          </SelectableDiv>
          <SelectableDiv
            selected={selectedDivs === 2}
            onClick={() => handleDivClick(2)}
          >
            <p>Pro</p>
            <p>${pricingInfo["month"].plans[2]}/mo</p>
          </SelectableDiv>
        </>
      ) : (
        <>
          <SelectableDiv
            selected={selectedDivs === 0}
            onClick={() => handleDivClick(0)}
          >
            <p>Arcade</p>
            <p>${pricingInfo["year"].plans[0]}/yr</p>
            <p>2 months free</p>
          </SelectableDiv>

          <SelectableDiv
            selected={selectedDivs === 1}
            onClick={() => handleDivClick(1)}
          >
            <p>Advanced</p>
            <p>${pricingInfo["year"].plans[1]}/yr</p>
            <p>2 months free</p>
          </SelectableDiv>

          <SelectableDiv
            selected={selectedDivs === 2}
            onClick={() => handleDivClick(2)}
          >
            <p>Pro</p>
            <p>${pricingInfo["year"].plans[2]}/yr</p>
            <p>2 months free</p>
          </SelectableDiv>
        </>
      )}
      <div className="flex">
        <p className={checkBox ? "gray" : ""}>monthly</p>
        <label className="switch">
          <input type="checkbox" onChange={handleCheckBox} checked={checkBox} />
          <span className="slider round"></span>
        </label>
        <p className={!checkBox ? "gray" : ""}>yearly</p>
      </div>
      {!isFormValid && <p>Please fill in all required fields.</p>}
      <button onClick={onPrevious}>previous</button>
      <button onClick={handleNextStep}>next</button>
    </div>
  );
};

export default FormPageTwo;
