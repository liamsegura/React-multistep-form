import React, { useState } from "react";

interface FormOneProps {
  formData: {
    name: string;
    email: string;
    number: string;
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

  const [isFormValid, setIsFormValid] = useState(true);
  const handleNextStep = () => {
    if (formData.name && formData.email && formData.number) {
      setIsFormValid(true);
      onNext();
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="container">
      <h2>Page One</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
      />
      <input
        type="text"
        name="number"
        value={formData.number}
        onChange={handleInputChange}
        placeholder="Enter your number"
      />
      {!isFormValid && <p>Please fill in all required fields.</p>}
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
};

export default FormPageOne;
