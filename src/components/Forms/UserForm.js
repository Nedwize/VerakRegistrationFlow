import { useState } from 'react';
import { useForm } from '../hooks/useForm';
import Login from '../Login';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

function UserForm() {
  const [step, setStep] = useState(0);
  const [values, handleChange] = useForm({
    planType: '',
    organization: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
  });

  // Proceed to next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 0:
      return (
        <Login
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 1:
      return (
        <StepOne
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <StepTwo
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <StepThree
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    default:
      <Login nextStep={nextStep} handleChange={handleChange} values={values} />;
  }
}

export default UserForm;
