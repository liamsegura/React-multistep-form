import React, { useState } from "react";

interface FormTwoProps {
  formData: {
    planType: string;
    plan: number;
  };
  onNext: () => void;
  onPrevious: () => void;

  onChange: (name: string, value: string | number) => void;
  checked: boolean;
}
interface SelectableDivProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const SelectableDiv: React.FC<SelectableDivProps> = ({
  label,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`selectable-div ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};
const FormPageTwo: React.FC<FormTwoProps> = ({
  formData,
  onNext,
  onPrevious,
  onChange,
}) => {
  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);

    console.log(checkBox ? "month" : "year");
  };

  const [selectedDivs, setSelectedDivs] = useState<number | null>(null);

  const handleDivClick = (index: number) => {
    setSelectedDivs(index);
    onChange("plan", index + 1);
    onChange("planType", !checkBox ? "month" : "year");
  };

  return (
    <div className="container">
      <h2>Page Two</h2>
      {!checkBox ? (
        <>
          <SelectableDiv
            label="Div 1"
            selected={selectedDivs === 0}
            onClick={() => handleDivClick(0)}
          />
          <SelectableDiv
            label="Div 2"
            selected={selectedDivs === 1}
            onClick={() => handleDivClick(1)}
          />
          <SelectableDiv
            label="Div 3"
            selected={selectedDivs === 2}
            onClick={() => handleDivClick(2)}
          />
        </>
      ) : (
        <>
          <SelectableDiv
            label="Div 4"
            selected={selectedDivs === 0}
            onClick={() => handleDivClick(0)}
          />
          <SelectableDiv
            label="Div 5"
            selected={selectedDivs === 1}
            onClick={() => handleDivClick(1)}
          />
          <SelectableDiv
            label="Div 6"
            selected={selectedDivs === 2}
            onClick={() => handleDivClick(2)}
          />
        </>
      )}
      <label className="switch">
        <input type="checkbox" onChange={handleCheckBox} checked={checkBox} />
        <span className="slider round"></span>
      </label>
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageTwo;
