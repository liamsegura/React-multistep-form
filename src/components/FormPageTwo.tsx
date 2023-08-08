import React, { useEffect, useState } from "react";
import { PricingInfo } from "./PriceInfo";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

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
  style?: React.CSSProperties;
}

const SelectableDiv: React.FC<SelectableDivProps> = ({
  selected,
  onClick,
  children,
}) => {
  return (
    <div
      className={`flex flex-col items-start justify-between gab-2 h-[10rem] w-[8rem] border-2 rounded-lg px-3 py-4 cursor-pointer hover:bg-gray-50 ${
        selected ? "border-purple-400 bg-gray-50" : ""
      }`}
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
    <div className="h-[70vh] md:h-auto shadow-xl md:shadow-none m-4 md:m-0 top-28 rounded-lg right-0 left-0 bg-white absolute md:static container-fluid flex flex-col py-12 md:py-6 pb-28 md:pb-0 px-6 md:px-20 lg:w-[35rem]">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">
        Select your plan
      </h2>
      <p className="text-gray-600 text-sm mb-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="mt-4 flex flex-row justify-between gap-2">
        {!checkBox ? (
          <>
            <SelectableDiv
              selected={selectedDivs === 0}
              onClick={() => handleDivClick(0)}
            >
              <img src={arcade} alt="arcade" className="w-1/3" />
              <div>
                <p className="font-semibold text-blue-900">Arcade</p>
                <p className="font-semibold text-gray-400 text-xs">
                  ${pricingInfo["month"].plans[0]}/mo
                </p>
              </div>
            </SelectableDiv>
            <SelectableDiv
              selected={selectedDivs === 1}
              onClick={() => handleDivClick(1)}
            >
              <img src={advanced} alt="advanced" className="w-1/3" />
              <div>
                <p className="font-semibold text-blue-900">Advanced</p>
                <p className="font-semibold text-gray-400 text-xs">
                  ${pricingInfo["month"].plans[1]}/mo
                </p>
              </div>
            </SelectableDiv>
            <SelectableDiv
              selected={selectedDivs === 2}
              onClick={() => handleDivClick(2)}
            >
              <img src={pro} alt="pro" className="w-1/3" />
              <div>
                <p className="font-semibold text-blue-900">Pro</p>
                <p className="font-semibold text-gray-400 text-xs">
                  ${pricingInfo["month"].plans[2]}/mo
                </p>
              </div>
            </SelectableDiv>
          </>
        ) : (
          <>
            <SelectableDiv
              selected={selectedDivs === 0}
              onClick={() => handleDivClick(0)}
            >
              <img src={arcade} alt="arcade" className="w-1/3" />
              <div>
                <p className="font-semibold text-blue-900">Arcade</p>
                <p className="font-semibold text-gray-400 text-xs">
                  ${pricingInfo["year"].plans[0]}/yr
                </p>
                <p className="font-semibold text-blue-900 text-sm">
                  2 months free
                </p>
              </div>
            </SelectableDiv>

            <SelectableDiv
              selected={selectedDivs === 1}
              onClick={() => handleDivClick(1)}
            >
              <img src={advanced} alt="advanced" className="w-1/3" />
              <div>
                <p className="font-semibold text-blue-900">Advanced</p>
                <p className="font-semibold text-gray-400 text-xs">
                  ${pricingInfo["year"].plans[1]}/yr
                </p>
                <p className="font-semibold text-blue-900 text-sm">
                  2 months free
                </p>
              </div>
            </SelectableDiv>

            <SelectableDiv
              selected={selectedDivs === 2}
              onClick={() => handleDivClick(2)}
            >
              <img src={pro} alt="pro" className="w-1/3" />
              <div>
                <p className="font-semibold text-blue-900">Pro</p>
                <p className="font-semibold text-gray-400 text-xs">
                  ${pricingInfo["year"].plans[2]}/yr
                </p>
                <p className="font-semibold text-blue-900 text-sm">
                  2 months free
                </p>
              </div>
            </SelectableDiv>
          </>
        )}
      </div>
      <div className="flex justify-center items-center py-2 w-full bg-slate-100 rounded-lg mt-4">
        <p
          className={
            checkBox
              ? "text-slate-400 font-semibold"
              : "text-blue-900 font-semibold"
          }
        >
          Monthly
        </p>
        <label className="switch mx-2 cursor-pointer">
          <input type="checkbox" onChange={handleCheckBox} checked={checkBox} />
          <span className="slider round"></span>
        </label>
        <p
          className={
            !checkBox
              ? "text-slate-400 font-semibold"
              : "text-blue-900 font-semibold"
          }
        >
          Yearly
        </p>
      </div>
      {!isFormValid && <p>Please fill in all required fields.</p>}
      <div className=" absolute bottom-4  md:relative md:bottom-[-6rem] flex justify-between md:left-0 md:right-0 right-4 left-4">
        <button
          className=" text-slate-500  text-center hover: transition-all duration-300 ease-in-out cursor-pointer"
          onClick={onPrevious}
        >
          Go Back
        </button>
        <button
          className="bg-blue-900 text-white py-3 px-6 rounded-lg  text-center hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default FormPageTwo;
