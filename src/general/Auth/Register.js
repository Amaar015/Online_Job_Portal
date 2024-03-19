import React from "react";
import "./auth.css";
// importaing image
import logo from "../../assets/logo.png";
// importing react icons
import { FaLock, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
const Register = () => {
  return (
    <div className="form-container">
      <div className="form-main">
        <div className="form-header">
          <img src={logo} alt="logo" />
          <div>
            <a href="/login" className="forms">
              Login
            </a>
            <a href="/register" className="forms active">
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
            <label>Name</label>
          </div>
          <div className="field">
            <input type="text" required />
            <span>
              <FaUser className="icons" />
            </span>
            <label>Email or Phone</label>
          </div>
          <div className="field">
            <input type="text" required />
            <span>
              <MdEmail className="icons" />
            </span>
            <label>Location</label>
          </div>
          <div className="field">
            <input type="password" required />
            <span>
              <CiLocationOn className="icons" />
            </span>
            <label>Password</label>
          </div>
          <div className="field">
            <input type="password" required />
            <span>
              <FaLock className="icons" />
            </span>
            <label>Confirm Password</label>
          </div>
          <button>Sign up</button>
          <div className="sign-up">
            Already have an account!
            <a href="/login">signin now</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
