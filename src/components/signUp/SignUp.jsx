import React, { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerAction } from "../../store/action/userAction";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigateTo = useNavigate();
  const { isAuthenticated , error, message , loading} = useSelector((state) => state.user);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/dashboard");
    }
  }, [isAuthenticated]);

  useEffect(() => {

    let toastId = false
    if (loading) {
      toastId = toast.loading('Loading...');
    }else{
      toast.dismiss(toastId);
    }

    if (error === "You are not Login") {
      dispatch(clearErrors());
    }else if(error){
      toast.error(error);
      dispatch(clearErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(clearErrors());
    }

  }, [message , error , loading]);

  const [registerData, setregisterData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const registerDataChange = (event) => {
    const { name, value } = event.target;
    setregisterData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(registerData));
    navigateTo("/");
  };

  return (
    <div className="signup-div">
      <div className="form">
        <h2>Register</h2>
        <input type="email" value={registerData.email} onChange={registerDataChange} name="email" placeholder="Enter Email Here" />
        <input type="text" value={registerData.name} onChange={registerDataChange} name="name" placeholder="Enter Name Here" />
        <input type="number" value={registerData.phoneNumber} onChange={registerDataChange} name="phoneNumber" placeholder="Enter Mobile Number Here" />
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter Password Here"
            value={registerData.password} onChange={registerDataChange}
          />

          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password Here"
          />

          <button
            type="button"
            className="password-toggle-btn"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button className="btnn" onClick={registerSubmit}>
          Sign Up
        </button>
        <p className="link">
          Already have an account
          <br />
          <Link to={'/login'}>Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
