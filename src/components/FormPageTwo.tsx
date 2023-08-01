import React from "react";

interface FormTwoProps {
  formData: {
    email: string;
  };
  onNext: () => void;
  onPrevious: () => void;

  onChange: (name: string, value: string) => void;
}
const FormPageOne: React.FC<FormTwoProps> = ({
  formData,
  onNext,
  onPrevious,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div>
      <h2>Page Two</h2>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
