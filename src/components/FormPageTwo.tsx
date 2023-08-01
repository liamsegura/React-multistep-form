import React, { useState } from "react";

interface FormTwoProps {
  formData: {
    plan: string;
  };
  onNext: () => void;
  onPrevious: () => void;

  onChange: (name: string, value: string) => void;
  checked: boolean;
}
const FormPageOne: React.FC<FormTwoProps> = ({
  formData,
  onNext,
  onPrevious,
  onChange,
  checked,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
    console.log(checkBox);
  };

  return (
    <div className="container">
      <h2>Page Two</h2>
      <input
        type="text"
        name="email"
        value={formData.plan}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      {checkBox ? <h1>true</h1> : <h1>false</h1>}
      <label className="switch">
        <input type="checkbox" onChange={handleCheckBox} checked={checkBox} />
        <span className="slider round"></span>
      </label>
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
