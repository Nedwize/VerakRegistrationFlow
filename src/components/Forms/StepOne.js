import './style.css';

function Plan({ type, price, details }) {
  return (
    <div className="plan">
      <p id="plan-type">{type}</p>
      <p id="plan-price">${price}</p>
      <p>
        <em>per month</em>
      </p>
      <p id="plan-details">
        <em>{details}</em>
      </p>
    </div>
  );
}

function StepOne({ values, handleChange, nextStep, prevStep }) {
  return (
    <div className="container step-container">
      <div className="flex-container">
        <p className="step">Step 1 of 3</p>
        <p className="back" onClick={prevStep}>
          Back to Login
        </p>
      </div>
      <p className="nav-heading">Choose a plan that's right for you</p>
      <table>
        <thead>
          <tr>
            <th>Benefits</th>
            <th>
              {
                <Plan
                  type={'solo'}
                  price={'9.9'}
                  details={
                    'A plan for individual developers or those just curious to try.'
                  }
                />
              }
            </th>
            <th>
              {
                <Plan
                  type={'team'}
                  price={'49.9'}
                  details={
                    'The plan for teams that are building several apps or even apps for different customers.'
                  }
                />
              }
            </th>
            <th>
              {
                <Plan
                  type={'enterprise'}
                  price={'0'}
                  details={
                    'A plan for big teams and/or enterprises looking to build a large number of apps or apps with large volumes of users.'
                  }
                />
              }
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No of apps</td>
            <td>1</td>
            <td>5</td>
            <td>0</td>
          </tr>
          <tr>
            <td>No of devs</td>
            <td>1</td>
            <td>5</td>
            <td>0</td>
          </tr>
          <tr>
            <td>No of sms</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>No of storage</td>
            <td>5</td>
            <td>5</td>
            <td>0</td>
          </tr>
          <tr>
            <td>No of users</td>
            <td>5</td>
            <td>50</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Choose a plan</td>
            <td>
              <input
                type="radio"
                name="planType"
                id="solo"
                value="solo"
                checked={values.planType === 'solo'}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="radio"
                name="planType"
                id="team"
                value="team"
                checked={values.planType === 'team'}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                type="radio"
                name="planType"
                id="enterprise"
                value="enterprise"
                checked={values.planType === 'enterprise'}
                onChange={handleChange}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex-container just-flex-end bottom-div">
        <button
          className="nxt-btn"
          onClick={nextStep}
          disabled={!values.planType}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}

export default StepOne;
