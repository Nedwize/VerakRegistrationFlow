import './style.css';

function StepThree({ values, handleChange, nextStep, prevStep }) {
  const confirm = () => {
    console.log(values);
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
            Team plan - The plan for teams that are building several apps or
            even apps for different customers. <br /> $49.9 per month with
            monthly plan
          </p>
        </div>
        <div>
          <p className="heading">TOTAL DUE</p>
          <p className="heading bigger">$49.9</p>
        </div>
      </div>
      <hr />
      <div className="flex-container" id="payment-head">
        <p className="heading">PAYMENT METHOD - CREDIT CARD</p>
        <p className="heading">SECURE FORM</p>
      </div>
      <input type="text" placeholder="Card" />
      <div className="flex-container bottom-div">
        <button className="nxt-btn" onClick={confirm}>
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
