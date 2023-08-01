import React from "react";

interface FormOneProps {
  formData: {
    name: string;
  };
  onNext: () => void;
}
const FormPageOne: React.FC<FormOneProps> = ({ formData, onNext }) => {
  return (
    <div>
      Page One
      {formData.name}
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
