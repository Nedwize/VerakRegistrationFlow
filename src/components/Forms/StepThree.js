import './style.css';
import Cleave from 'cleave.js/react';
import { FaCcVisa } from 'react-icons/fa';

function StepThree({ values, handleChange, nextStep, prevStep }) {
  // The function below can be used to handle the process after form submission
  // An example API call is commented to provide the gist of the process
  // Data is logged to the console for simplicity
  const handleFormSubmit = () => {
    console.log(values);
    // setLoader(true);
    // postAPI(values)
    //   .then((res) => {
    //     if (res.data.data) {
    //       showToast('Registration Successful');
    //       setLoader(false);
    //     } else {
    //       showToast(`Couldn't process request`);
    //       setLoader(false);
    //     }
    //   })
    //   .catch((err) => {
    //     if (err) {
    //       showToast(`Couldn't process request`);
    //       setLoader(false);
    //     }
    //   });
    // };
  };

  const isValid = () => {
    return !values.cardCVV || !values.cardExpiry || !values.cardNumber;
  };

  const getPrice = () => {
    if (values.planType === 'team') return '49.9';
    if (values.planType === 'enterprise') return '0';
    else return '9.9';
  };

  const getDetails = () => {
    if (values.planType === 'team')
      return 'The plan for teams that are building several apps or even apps for different customers.';
    if (values.planType === 'enterprise')
      return 'A plan for big teams and/or enterprises looking to build a large number of apps or apps with large volumes of users.';
    else
      return 'A plan for individual developers or those just curious to try.';
  };

  return (
    <div className="container step-container">
      <div className="flex-container">
        <p className="step">Step 3 of 3</p>
        <p className="back" onClick={prevStep}>
          Back to Step 2
        </p>
      </div>
      <p className="nav-heading">Set up your payment and you are done!</p>
      <div className="flex-container flex-start">
        <div>
          <p className="heading">YOUR MEMBERSHIP</p>
          <p id="membership-details">
            <span style={{ textTransform: 'capitalize' }}>
              {values.planType}
            </span>{' '}
            plan - {getDetails()} <br />
            {'$'}
            {getPrice()} per month with monthly plan
          </p>
        </div>
        <div>
          <p className="heading">TOTAL DUE</p>
          <p className="heading bigger">
            {'$'}
            {getPrice()}
          </p>
        </div>
      </div>
      <hr />
      <div className="flex-container" id="payment-head">
        <p className="heading">PAYMENT METHOD - CREDIT CARD</p>
        <p className="heading">SECURE FORM</p>
      </div>
      <div className="flex-container">
        <div id="visa-icon">
          <FaCcVisa />
        </div>
        <Cleave
          placeholder="Enter Credit Card Number"
          id="card-input"
          options={{
            creditCard: true,
          }}
          name="cardNumber"
          onChange={handleChange}
          value={values.cardNumber}
        />
        <Cleave
          placeholder="Expiry"
          id="expiry-input"
          options={{ date: true, datePattern: ['m', 'y'] }}
          onChange={handleChange}
          value={values.cardExpiry}
          name="cardExpiry"
        />
        <input
          type="text"
          placeholder="CVV"
          id="cvv-input"
          maxLength="3"
          onChange={handleChange}
          value={values.cardCVV}
          name="cardCVV"
        />
      </div>
      <div className="flex-container bottom-div">
        <button
          className="nxt-btn"
          onClick={handleFormSubmit}
          disabled={isValid()}
        >
          START MEMBERSHIP
        </button>
        <p id="payment-msg">
          <em>
            WIP Msg - You might be prompted to your bank's website to complete
            the payment process. We will find you on the other side.
          </em>
        </p>
      </div>
    </div>
  );
}

export default StepThree;
