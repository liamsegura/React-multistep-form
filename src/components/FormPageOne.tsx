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
    <div className=" shadow-xl md:shadow-none m-4 md:m-0 top-28 rounded-lg right-0 left-0 bg-white absolute md:static container-fluid flex flex-col py-12 md:py-6 pb-28 md:pb-0 px-6 md:px-20 lg:w-[35rem]">
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
      <div className="absolute bottom-4 self-end md:relative md:bottom-[-4.7rem] flex justify-between md:px-0">
        <button
          className="bg-blue-900 text-white py-3 px-6 rounded-lg text-center hover:bg-blue-700 transition-all duration-300 ease-in-out cursor-pointer"
          type="button"
          onClick={handleNextStep}
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default FormPageOne;
