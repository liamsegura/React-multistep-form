import React, { useState } from "react";
import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";
import FormPageThree from "./FormPageThree";
import FormPageFour from "./FormPageFour";

const Form: React.FC = () => {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });

  const handleNextStep = () => {
    setPage((prev) => prev + 1);
  };
  const handlePreviousStep = () => {
    setPage((prev) => prev - 1);
  };

  return (
    <div>
      {page === 1 && (
        <FormPageOne formData={formData} onNext={handleNextStep} />
      )}
      {page === 2 && (
        <FormPageTwo
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
      {page === 3 && (
        <FormPageThree
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
      {page === 4 && (
        <FormPageFour
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
        />
      )}
    </div>
  );
};

export default Form;
