import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LoadUser } from '../../store/action/userAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {role , isAuthenticated } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(LoadUser());
    if (!isAuthenticated) {
      navigate("/login");
    }
    if (role !== "admin") {
      navigate("/dashboard");
    }
  }, [dispatch, role, isAuthenticated]);

  return (
    <div className='container d-grid gap-2'>
      <Link to={'/admin/create'} className="btn btn-primary" >Create Property</Link>
      <Link to={'/admin/updateProperty'} className="btn btn-primary" >Update Property</Link>
      <Link to={'/admin/manageOrders'} className="btn btn-primary" >Manage Orders</Link>
      <Link to={'/admin/manageStateCIty'} className="btn btn-primary" >Manage State/City</Link>
      <Link to={'/admin/allFeedback'} className="btn btn-primary" >All Feedback</Link>
      <Link to={'/admin/contact-messages'} className="btn btn-primary" >Contact Messages</Link>
    </div>
  )
}

export default Dashboard