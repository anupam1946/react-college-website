import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <button className="social">
              <FaFacebookF />
            </button>
            <button className="social">
              <FaGoogle />
            </button>
            <button className="social">
              <FaLinkedinIn />
            </button>
          </div>
          <span>Use your name and email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign In</h1>
          <div className="social-container">
            <button className="social">
              <FaFacebookF />
            </button>
            <button className="social">
              <FaGoogle />
            </button>
            <button className="social">
              <FaLinkedinIn />
            </button>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="forgot-password">Forgot your password?</button>
          <button>Sign In</button>
        </form>
      </div>

      {/* Overlay Container */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us, please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>HEY, Friend!</h1>
            <p>Enter your details to register your account</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;