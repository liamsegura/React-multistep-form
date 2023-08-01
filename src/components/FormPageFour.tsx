import React from "react";

interface FormFourProps {
  formData: {
    address: string;
  };
  onNext: () => void;
  onPrevious: () => void;
}
const FormPageOne: React.FC<FormFourProps> = ({ formData, onPrevious }) => {
  return (
    <div>
      Page Four
      {formData.address}
      <button onClick={onPrevious}>previous</button>
    </div>
  );
};

export default FormPageOne;
