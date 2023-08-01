import React, { useState } from 'react';
import Plan1 from './Plan/Plan1';
import Plan3 from './Plan/Plan3';
import Plan2 from './Plan/Plan2';
import ToggleSwitch from './Plan/ToggleSwitch';
import AddOns from './AddOns';
import './Form.css';
import './Plan/ToggleSwitch.css'; 



const Form = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [addOnsSelection, setAddOnsSelection] = useState({
    option1: false,
    option2: false,
    option3: false
  });

  const [formData, setFormData] = useState({
    // Define initial form data fields here
    // Example:
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleAddOnsSelect = (option) => {
    setAddOnsSelection((prevSelection) => ({
      ...prevSelection,
      [option]: !prevSelection[option]
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Combine the form data with selected plan and add-ons
    const finalFormData = {
      ...formData,
      selectedPlan,
      addOnsSelection,
    };
    // Handle form submission
    console.log(finalFormData);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
            
          <div>
            <h2>Step 1</h2>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <label>Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Number"
            />
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2</h2>
           <div>
            <h2>Step 1: Choose a plan</h2>
            <Plan1
              selected={selectedPlan === 'Plan 1'}
              onSelect={(e) => {
                e.preventDefault();
                handlePlanSelect('Plan 1');
              }}
            />
            <Plan2
              selected={selectedPlan === 'Plan 2'}
              onSelect={(e) => {
                e.preventDefault();
                handlePlanSelect('Plan 2');
              }}
            />
            <Plan3
              selected={selectedPlan === 'Plan 3'}
              onSelect={(e) => {
                e.preventDefault();
                handlePlanSelect('Plan 3');
              }}
            />
            <ToggleSwitch/>
            <button disabled={!selectedPlan} onClick={handleNext}>
              Next
            </button>
          </div>
            <button type="button" onClick={handlePrevious}>Previous</button>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3</h2>
            <AddOns selectedOptions={addOnsSelection} handleSelect={handleAddOnsSelect} />
            <button type="button" onClick={handlePrevious}>Previous</button>
            <button type="button" onClick={handleNext}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Step 4</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button type="button" onClick={handlePrevious}>Previous</button>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <form>
        <div className='steps'>
                <ul>
                    <li className={step === 1 ? "selected-plan" : "none"}>STEP 1</li>
                    <li className={step === 2 ? "selected-plan" : "none"}>STEP 2</li>
                    <li className={step === 3 ? "selected-plan" : "none"}>STEP 3</li>
                    <li className={step === 4 ? "selected-plan" : "none"}>STEP 4</li>
                </ul>
            </div>
      {renderStep()}
    </form>
  );
};

 
export default Form;
