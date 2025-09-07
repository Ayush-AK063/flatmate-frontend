import React, { useEffect, useState, useRef } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { clearErrors, getLoginAction } from "../../store/action/userAction";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

const Login = () => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, error, message, loading } = useSelector(
    (state) => state.user
  );

  const toastId = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
    }

    if (error === "You are not Login") {
      dispatch(clearErrors());
    } else if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message);
      dispatch(clearErrors());
    }

    if (loading && !toastId.current) {
      toastId.current = toast.loading("Loading...");
    } else if (!loading && toastId.current) {
      toast.dismiss(toastId.current);
      toastId.current = null;
    }
  }, [isAuthenticated, message, error, loading, dispatch, navigateTo]);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((preData) => ({
      ...preData,
      [name]: value,
    }));
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(getLoginAction(loginData));
  };

  return (
    <div className="main">
      <div className="form">
        <h2>Login Here</h2>
        <input
          type="email"
          value={loginData.email}
          onChange={onLoginChange}
          name="email"
          placeholder="Enter Email Here"
        />
        <input
          type="password"
          value={loginData.password}
          onChange={onLoginChange}
          name="password"
          placeholder="Enter Password Here"
        />
        <button onClick={loginSubmit} className="btnn">
          Login
        </button>
        <p className="link">
          Don't have an account?
          <br />
          <Link to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
