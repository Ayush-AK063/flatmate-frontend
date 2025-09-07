import React, { useEffect, useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import { clearErrors, getLoginAction } from '../../store/action/userAction';
import { useDispatch, useSelector } from 'react-redux';


import toast from 'react-hot-toast';


const Login = () => {
  const navigateTo = useNavigate();
  const { isAuthenticated , error, message ,loading} = useSelector((state) => state.user);
  useEffect(() => {
    if (isAuthenticated) {
      navigateTo("/");
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

    let toastId = false
    if (loading) {
      toastId = toast.loading('Loading...');
    }else{
      toast.dismiss(toastId);
    }
    

  }, [isAuthenticated ,message ,error, loading]);


  const dispatch = useDispatch();

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
    if (error) {
      
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
  };

  return (
<div className="main">
  <div className="form">
    <h2>Login Here</h2>
    <input type="email" value={loginData.email} onChange={onLoginChange} name="email" placeholder="Enter Email Here" />
    <input type="password" value={loginData.password} onChange={onLoginChange} name="password" placeholder="Enter Password Here" />
    <button onClick={loginSubmit} className="btnn"><a href="#">Login</a></button>
    <p className="link">Don't have an account<br />
      <Link to={"/register"} >Sign up </Link></p>
  </div>
</div>

  )
}

export default Login