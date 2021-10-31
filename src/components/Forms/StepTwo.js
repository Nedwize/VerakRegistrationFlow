import './style.css';

function StepTwo() {
  return (
    <div className="container step-container">
      <div className="flex-container">
        <p className="step">Step 2 of 3</p>
        <p className="back">Back to Step 1</p>
      </div>
      <p className="nav-heading">Please tell us about yourself</p>
      <div className="form">
        <div className="form-row">
          <div>
            <p>Organization</p>
            <input type="text" placeholder="Organization" />
            <p id="input-detail">
              <em>This will appear as tenant name for your users</em>
            </p>
          </div>
          <div>
            <p>First name</p>
            <input type="text" placeholder="First name" />
          </div>
          <div>
            <p>Last name</p>
            <input type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="form-row">
          <div>
            <p>Email</p>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <p>
              Phone Number <em>(optional)</em>
            </p>
            <input type="text" placeholder="Phone number" />
          </div>
          <div>
            <p>Country</p>
            <input type="text" placeholder="Country" />
          </div>
        </div>
      </div>
      <div className="flex-container">
        <div class="tacbox">
          <input id="checkbox" type="checkbox" />
          <label for="checkbox">
            <strong>
              {' '}
              I have read and agreed to the{' '}
              <a href="https://google.com">Privacy Policy</a>
              {' and '}
              <a href="https://google.com">Terms of Service</a>.
            </strong>
          </label>
        </div>
        <button className="nxt-btn">CONTINUE</button>
      </div>
      <hr />
      <p id="message">
        We will send you a confirmation email after completing all the steps,
        where you will be prompted to set up your password.
      </p>
    </div>
  );
}

export default StepTwo;
