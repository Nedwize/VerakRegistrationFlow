import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import './style.css';

function Login({ values, nextStep, handleChange }) {
  return (
    <div className="container">
      <div className="login-container">
        <p className="title uppercase">WELCOME TO</p>
        <p id="logo">
          app<span>ivo</span>
        </p>
        <p>
          <strong>Software has never been so simple.</strong>
        </p>
        <input
          type="email"
          name="email"
          placeholder="Email address"
          value={values.email}
          onChange={handleChange}
        ></input>
        <button onClick={nextStep}>CONTINUE</button>
        <p className="divider">
          <span>or login with</span>
        </p>
        <div className="flexbox">
          <button id="linkedin-btn">
            <span className="icon">
              <FaLinkedin />
            </span>
            LinkedIn
          </button>
          <button id="facebook-btn">
            <span className="icon">
              <FaFacebookF />
            </span>
            Facebook
          </button>
        </div>
        <div id="more-links">
          <a href="https://google.com">Don't have an account?</a>
          <span> / </span>
          <a href="https://google.com">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
