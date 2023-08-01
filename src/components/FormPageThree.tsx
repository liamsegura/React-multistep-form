import React from "react";

interface FormThreeProps {
  formData: {
    number: string;
  };
  onNext: () => void;
  onPrevious: () => void;
}
const FormPageOne: React.FC<FormThreeProps> = ({
  formData,
  onNext,
  onPrevious,
}) => {
  return (
    <div>
      Page Three
      {formData.number}
      <button onClick={onPrevious}>previous</button>
      <button onClick={onNext}>next</button>
    </div>
  );
};

export default FormPageOne;
