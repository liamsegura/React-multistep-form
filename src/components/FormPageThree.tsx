import React from "react";
import checkMark from "../assets/images/icon-checkmark.svg";
import { PricingInfo } from "./PriceInfo";

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

  const pricingInfo = PricingInfo as unknown as {
    [key: string]: {
      plans: number[];
      addOns: { [key: number]: number };
    };
  };

  return (
    <>
      <div className="container-fluid flex flex-col py-6 px-10 md:px-20 lg:w-[35rem]">
        <h2 className="text-blue-800 text-2xl font-bold mb-4">Pick add-ons</h2>
        <p className="text-gray-600 text-sm mb-4">
          Add-ons help enhance your gaming experience.
        </p>
        {formData.planType === "month" ? (
          <div className="mt-4 flex flex-col justify-between gap-2">
            <div
              className={`flex flex-row items-center justify-between gap-2 border-2 rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                formData.addOns.includes(1)
                  ? "border-purple-400 bg-gray-50"
                  : ""
              } `}
              onClick={() => handleOptionClick(1)}
            >
              <div
                className={`flex items-center justify-center h-[1.5rem] w-[1.5rem] border-2 rounded-md ${
                  formData.addOns.includes(1)
                    ? "bg-purple-600 border-purple-600"
                    : ""
                }`}
              >
                <img src={checkMark} alt="check mark" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">Online service</p>
                <p className="font-semibold text-gray-400 text-xs">
                  Access to multiplayer games
                </p>
              </div>
              <p className="font-semibold text-purple-400 text-xs">
                {" "}
                +${pricingInfo["month"].addOns[1]}/mo
              </p>
            </div>
            <div
              className={`flex flex-row items-center justify-between gab-2 border-2 rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                formData.addOns.includes(2)
                  ? "border-purple-400 bg-gray-50"
                  : ""
              } `}
              onClick={() => handleOptionClick(2)}
            >
              {" "}
              <div
                className={`flex items-center justify-center h-[1.5rem] w-[1.5rem] border-2 rounded-md ${
                  formData.addOns.includes(2)
                    ? "bg-purple-600 border-purple-600"
                    : ""
                }`}
              >
                <img src={checkMark} alt="check mark" />
              </div>
              <div className="mr-[2rem]">
                <p className="font-semibold text-blue-900">Larger storage</p>
                <p className="font-semibold text-gray-400 text-xs">
                  Extra 1TB of cloud save
                </p>
              </div>
              <p className="font-semibold text-purple-400 text-xs">
                {" "}
                +${pricingInfo["month"].addOns[2]}/mo
              </p>
            </div>
            <div
              className={`flex flex-row items-center justify-between gab-2 border-2 rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                formData.addOns.includes(3)
                  ? "border-purple-400 bg-gray-50"
                  : ""
              } `}
              onClick={() => handleOptionClick(3)}
            >
              {" "}
              <div
                className={`flex items-center justify-center h-[1.5rem] w-[1.5rem] border-2 rounded-md ${
                  formData.addOns.includes(3)
                    ? "bg-purple-600 border-purple-600"
                    : ""
                }`}
              >
                <img src={checkMark} alt="check mark" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Customizable profile
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  Custom theme on your profile
                </p>
              </div>
              <p className="font-semibold text-purple-400 text-xs">
                {" "}
                +${pricingInfo["month"].addOns[3]}/mo
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-4 flex flex-col justify-between gap-2">
            <div
              className={`flex flex-row items-center justify-between gab-2 border-2 rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                formData.addOns.includes(1)
                  ? "border-purple-400 bg-gray-50"
                  : ""
              } `}
              onClick={() => handleOptionClick(1)}
            >
              {" "}
              <div
                className={`flex items-center justify-center h-[1.5rem] w-[1.5rem] border-2 rounded-md ${
                  formData.addOns.includes(1)
                    ? "bg-purple-600 border-purple-600"
                    : ""
                }`}
              >
                <img src={checkMark} alt="check mark" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">Online service</p>
                <p className="font-semibold text-gray-400 text-xs">
                  Access to multiplayer games
                </p>
              </div>
              <p className="font-semibold text-purple-400 text-xs">
                {" "}
                +${pricingInfo["year"].addOns[1]}/yr
              </p>
            </div>
            <div
              className={`flex flex-row items-center justify-between gab-2 border-2 rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                formData.addOns.includes(2)
                  ? "border-purple-400 bg-gray-50"
                  : ""
              } `}
              onClick={() => handleOptionClick(2)}
            >
              {" "}
              <div
                className={`flex items-center justify-center h-[1.5rem] w-[1.5rem] border-2 rounded-md ${
                  formData.addOns.includes(2)
                    ? "bg-purple-600 border-purple-600"
                    : ""
                }`}
              >
                <img src={checkMark} alt="check mark" />
              </div>
              <div className="mr-[2rem]">
                <p className="font-semibold text-blue-900">Larger storage</p>
                <p className="font-semibold text-gray-400 text-xs">
                  Extra 1TB of cloud save
                </p>
              </div>
              <p className="font-semibold text-purple-400 text-xs">
                {" "}
                +${pricingInfo["year"].addOns[2]}/yr
              </p>
            </div>
            <div
              className={`flex flex-row items-center justify-between gab-2 border-2 rounded-lg px-4 py-4 cursor-pointer hover:bg-gray-50 ${
                formData.addOns.includes(3)
                  ? "border-purple-400 bg-gray-50"
                  : ""
              } `}
              onClick={() => handleOptionClick(3)}
            >
              {" "}
              <div
                className={`flex items-center justify-center h-[1.5rem] w-[1.5rem] border-2 rounded-md ${
                  formData.addOns.includes(3)
                    ? "bg-purple-600 border-purple-600"
                    : ""
                }`}
              >
                <img src={checkMark} alt="check mark" />
              </div>
              <div>
                <p className="font-semibold text-blue-900">
                  Customizable profile
                </p>
                <p className="font-semibold text-gray-400 text-xs">
                  Custom theme on your profile
                </p>
              </div>
              <p className="font-semibold text-purple-400 text-xs">
                {" "}
                +${pricingInfo["year"].addOns[3]}/yr
              </p>
            </div>
          </div>
        )}
        <div className="absolute bottom-40 flex justify-between">
          <button
            className="text-slate-500  text-center hover: transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onPrevious}
          >
            Go Back
          </button>
          <button
            className="ml-[13.75rem]  bg-blue-900 text-white py-3 px-6 rounded-lg  text-center hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={onNext}
          >
            Next Step
          </button>
        </div>
      </div>
    </>
  );
};

export default FormPageTree;
