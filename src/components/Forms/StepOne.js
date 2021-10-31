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

function StepOne() {
  return (
    <div className="container step-container">
      <div className="flex-container">
        <p className="step">Step 1 of 3</p>
        <p className="back">Back to Login</p>
      </div>
      <p className="nav-heading">Choose a plan that's right for you</p>
      <table>
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
            <input type="radio" name="select" id="option-1" />
          </td>
          <td>
            <input type="radio" name="select" id="option-2" />
          </td>
          <td>
            <input type="radio" name="select" id="option-3" />
          </td>
        </tr>
      </table>
      <div style={{ justifyContent: 'end' }} className="flex-container">
        <button className="nxt-btn">CONTINUE</button>
      </div>
    </div>
  );
}

export default StepOne;
