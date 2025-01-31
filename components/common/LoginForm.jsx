"use client";

import { useState } from "react";
import { signIn } from "../../app/auth"; // Adjust the path if necessary

const handleSubmit = async (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;

  try {
    const result = await signIn(email, password);
    console.log('Sign in successful:', result);
    // Handle successful sign-in (e.g., save tokens, redirect user)
  } catch (error) {
    console.error('Error signing in:', error);
    // Handle sign-in error (e.g., show error message to the user)
  }
};


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      action="#"
      className="user-data-form mt-40 lg-mt-30"
      onSubmit={handleSubmit}
    >
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta mb-30">
            <label>Email</label>
            <input type="email" name="email" placeholder="hasan@gmail.com" required />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="input-group-meta mb-25">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              className="pass_log_id"
              required
            />
            <span className="placeholder_icon" onClick={handleTogglePassword}>
              <span className="d-flex align-items-center">
                {showPassword ? (
                  <i className="fa-regular fa-eye"></i>
                ) : (
                  <i className="fa-regular fa-eye-slash"></i>
                )}
              </span>
            </span>
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Keep me logged in</label>
            </div>
            <a href="#">Forget Password?</a>
          </div>
          {/* /.agreement-checkbox */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <button className="btn-twentyTwo w-100 fw-500 tran3s text-uppercase mt-30">
            Login
          </button>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default LoginForm;
