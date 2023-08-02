import React from "react";

interface FormFourProps {
  formData: {
    name: string;
    email: string;
    number: string;
  };
  onNext: () => void;
  onPrevious: () => void;
  onSubmit: () => void;
  onChange: (name: string, value: string) => void; // Add the onChange prop
}

const FormPageFour: React.FC<FormFourProps> = ({
  formData,
  onPrevious,
  onSubmit,
  onChange, // Receive the onChange prop
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onChange(name, value); // Call the onChange prop to update the form data in Form component
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="container">
        <h2>Page Four</h2>
        <input
          type="text"
          name="address"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your address"
        />
        <button onClick={onPrevious}>Previous</button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default FormPageFour;
