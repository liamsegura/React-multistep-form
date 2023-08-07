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
    <div className="container-fluid flex flex-col py-6 px-10 md:px-20 lg:w-[35rem]">
      <h2 className="text-blue-800 text-2xl font-bold mb-4">Personal info</h2>
      <p className="text-gray-600 text-sm mb-4">
        Please provide your name, email, address, and phone number.
      </p>
      <label className="mb-2 mt-4 text-sm text-blue-800">Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
        className="p-2 border-2 border-gray-300 rounded-lg"
      />
      <label className="mb-2 mt-4 text-sm text-blue-800">Email Address</label>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Enter your email"
        className="p-2 border-2 border-gray-300 rounded-lg"
      />
      <label className="mb-2 mt-4 text-sm text-blue-800">Phone Number</label>
      <input
        type="text"
        name="number"
        value={formData.number}
        onChange={handleInputChange}
        placeholder="Enter your number"
        className="p-2 border-2 border-gray-300 rounded-lg"
      />
      {!isFormValid && <p>Please fill in all required fields.</p>}
      <button
        className="absolute bottom-40 bg-blue-900 text-white py-3 px-6 rounded-lg self-end text-center hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
        type="button"
        onClick={handleNextStep}
      >
        Next Step
      </button>
    </div>
  );
};

export default FormPageOne;
