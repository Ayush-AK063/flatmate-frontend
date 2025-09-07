import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllContact } from '../../../store/action/otherAction';
import { enqueueSnackbar } from 'notistack';
import { server } from '../../../store/store';
import axios from 'axios';

const ContactMessages = () => {
    const dispatch = useDispatch();
    const { contact, loading, error } = useSelector((state) => state.allContactMessages);

    useEffect(() => {
        dispatch(getAllContact());
    }, [dispatch]);

    const handleDelete = async (id) => {
        try {
          const {data} = await axios.delete(`${server}/api/deleteMessage/${id}`);
          enqueueSnackbar(data.message, { variant: 'success' });
          dispatch(getAllContact());
        } catch (error) {
          enqueueSnackbar(error.response.data.message, { variant: 'error' });
        }
    }

    

  return (
    <div className="container mt-5">
      <h2>Messages</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contact.map((message) => (
            <tr key={message._id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.subject}</td>
              <td>{message.message}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(message._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessages