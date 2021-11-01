import './style.css';

function StepThree({ values, handleChange, nextStep, prevStep }) {
  const confirm = () => {
    console.log(values);
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
      <input type="text" id="card-input" placeholder="Card" />
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
