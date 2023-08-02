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
    planType: "",
    plan: 0,
    addOns: [],
  });

  const [checkBox, setCheckBox] = useState(false);

  const handleCheckBox = () => {
    setCheckBox((prevState) => !prevState);
    setFormData((prev) => ({
      ...prev,
      plan: 0,
    }));
    console.log(checkBox ? "month" : "year");
  };

  const handleNextStep = () => {
    setPage((prev) => prev + 1);
    console.log(formData);
  };
  const handlePreviousStep = () => {
    setPage((prev) => prev - 1);
  };
  const handleChangePlan = () => {
    setPage(2);
  };

  const handleChange = (name: string, value: string | number | number[]) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted", formData);
    setFormData({
      name: "",
      email: "",
      number: "",
      planType: "",
      plan: 0,
      addOns: [],
    });
    setPage(1);
  };
  return (
    <div>
      {page === 1 && (
        <FormPageOne
          formData={formData}
          onNext={handleNextStep}
          onChange={handleChange}
        />
      )}
      {page === 2 && (
        <FormPageTwo
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onChange={handleChange}
          handleCheckBox={handleCheckBox}
          checkBox={checkBox}
          checked={false}
        />
      )}
      {page === 3 && (
        <FormPageThree
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onChange={handleChange}
        />
      )}
      {page === 4 && (
        <FormPageFour
          formData={formData}
          onNext={handleNextStep}
          onPrevious={handlePreviousStep}
          onSubmit={handleSubmit}
          onChange={handleChange}
          onChangePlan={handleChangePlan}
        />
      )}
    </div>
  );
};

export default Form;
