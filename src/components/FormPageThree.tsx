import React from "react";

interface FormThreeProps {
  formData: {
    number: string;
  };
  onNext: () => void;
  onPrevious: () => void;
  onChange: (name: string, value: string) => void;
}
const FormPageOne: React.FC<FormThreeProps> = ({
  formData,
  onNext,
  onPrevious,
  onChange,
}) => {
  const handleInputchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };
  return (
    <div>
      <h2>Page Three</h2>
      <input
        type="text"
        name="number"
        value={formData.number}
        onChange={handleInputchange}
      />
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
