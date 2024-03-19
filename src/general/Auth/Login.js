import React from "react";
import "./auth.css";
// importaing image
import logo from "../../assets/logo.png";

// importing icons
import { FaLock, FaUser } from "react-icons/fa";

const Login = () => {
  return (
    <div className="form-container">
      <div className="form-main">
        <div className="form-header">
          <img src={logo} alt="logo" />
          <div>
            <a href="/login" className="forms  active">
              Login
            </a>
            <a href="/register" className="forms">
              Sign up
            </a>
          </div>
        </div>
        {/* form */}
        <form action="#">
          <div className="field">
            <input type="text" required />
            <span>
              <FaUser className="icons" />
            </span>
            <label>Email or Phone</label>
          </div>
          <div className="field">
            <input type="password" required />
            <span>
              <FaLock className="icons" />
            </span>
            <label>Password</label>
          </div>
          <div className="forgot-pass">
            <a href="#">Forgot Password?</a>
          </div>
          <button>Sign in</button>
          <div className="sign-up">
            Not a member?
            <a href="#">signup now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
