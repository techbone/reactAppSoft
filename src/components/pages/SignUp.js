import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import "../SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="home-con">
        <div className="first-container"></div>
        <div className="second-container">
          <p className="sine-up">Sign Up</p>
          <form className="form-con">
            <label for="Full-Name">Full Name</label>
            <input type="text" placeholder="Name..." />
            <label for="Email">Email</label>
            <input type="email" placeholder="Email address..." />
            <label for="Username">Username</label>
            <input type="text" placeholder="Username..." />
            <label for="Password">Password</label>
            <input type="password" placeholder="******************" />
            <label for="Password">Repeat Password</label>
            <input type="password2" placeholder="******************" />
          </form>
          <input
            className="terms"
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          ></input>
          <label for="vehicle1">
            <span>
              I agree to the <b>Terms of User</b>
            </span>
          </label>
          <br></br>
        </div>
      </div>
    </>
  );
};

export default SignUp;
