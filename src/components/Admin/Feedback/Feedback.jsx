import React, { useEffect } from 'react'
import { getAllFeedback } from '../../../store/action/otherAction';
import { useDispatch, useSelector } from 'react-redux';

const Feedback = () => {
    const { feedback , error } = useSelector((state) => state.feedback);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllFeedback());
    }, [dispatch]);

  return (
    <div className="container mt-5">
            <h2>User Reviews</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                        <th>Message</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map((review, index) => (
                        <tr key={index}>
                            <td>{review.User.name}</td>
                            <td>{review.User.email}</td>
                            <td>{review.User.phoneNumber}</td>
                            <td>{review.message}</td>
                            <td>{review.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Feedback