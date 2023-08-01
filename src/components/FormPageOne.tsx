import React, { useEffect } from "react";

interface FormOneProps {
  formData: {
    name: string;
  };
  onNext: () => void;
  onChange: (name: string, value: string) => void;
}
const FormPageOne: React.FC<FormOneProps> = ({
  formData,
  onNext,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div>
      <h2>Page One</h2>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
