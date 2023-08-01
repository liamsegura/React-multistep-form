import React from "react";

interface FormTwoProps {
  formData: {
    email: string;
  };
  onNext: () => void;
  onPrevious: () => void;
}
const FormPageOne: React.FC<FormTwoProps> = ({
  formData,
  onNext,
  onPrevious,
}) => {
  return (
    <div>
      Page Two
      {formData.email}
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
