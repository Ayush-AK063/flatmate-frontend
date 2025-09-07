import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogout } from "../../store/action/userAction";
import { clearErrors } from "../../store/action/userAction";
import toast from 'react-hot-toast';

const Logout = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { isAuthenticated, error, message ,loading} = useSelector(
    (state) => state.user
  );


  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/login");
    }
  }, [isAuthenticated])
  
  
  
  useEffect(() => {


    let toastId = false
    if (loading) {
      toastId = toast.loading('Loading...');
    }else{
      toast.dismiss(toastId);
    }

    if (message) {
      toast.success(message);
      dispatch(clearErrors());
      navigateTo("/login");
    }
  }, [message , loading]);

  useEffect(() => {
    dispatch(userLogout());
  }, []);

  return <div>Logout Success</div>;
};

export default Logout;