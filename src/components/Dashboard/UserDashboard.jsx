import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoadUser } from '../../store/action/userAction';
import { enqueueSnackbar } from 'notistack';
import ProfileCard from './ProfileCard';
import OrderPage from './Order/OrderPage';
const UserDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {role , isAuthenticated ,message , user} = useSelector((state) => state.user);



  useEffect(() => {
    dispatch(LoadUser());
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (role === "admin") {
      navigate("/admin/dashboard");
    }``
    enqueueSnackbar(message, { variant: "success" });
  }, [isAuthenticated, role]);
  return (
    <div className='container '>
      {isAuthenticated && <ProfileCard user={user} />}
      <OrderPage />
    </div>
  )
}

export default UserDashboard