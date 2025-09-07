import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrorAllOrderHistory, getallOrderhistory,  } from '../../../store/action/propertyAction';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';
import { server } from '../../../store/store';
const ManageOrder = () => {
    const dispatch = useDispatch();
    const {message  ,orderHistory, loading , error} = useSelector(state => state.allorders);

    const [clickChange, setclickChange] = useState(true)

    

    useEffect(() => {
        dispatch(getallOrderhistory());
    }, [clickChange]);

    useEffect(() => {
        if (error) {
            enqueueSnackbar(error, { variant: 'error' });
            dispatch(clearErrorAllOrderHistory());
        }
    }, [error]);

    

    const [selectedOrder, setSelectedOrder] = useState(null);
    const [userType, setuserType] = useState(false)
    const modalRef = useRef(null);

    const handleToggleOrder = async (id) => { 
        try {
            const data = await axios.put(`${server}/api/confirmBooking/${id}`)
            enqueueSnackbar(data.data.message || "Error confirming order", { variant: "success" });
            setclickChange(!clickChange)
        } catch (error) {
            enqueueSnackbar(error.response.data.message || "Error cancelling order", { variant: "error" });
        }
    };
    const handleToggleOrderRemove = async (id) => {  
        try {
            const {data} = await axios.put(`${server}/api/removeBooking/${id}`)
            enqueueSnackbar(data.message || "Error confirming order", { variant: "success" });
            setclickChange(!clickChange)
        } catch (error) {
            enqueueSnackbar(error.response.data.message || "Error cancelling order", { variant: "error" });
        }
    };
    const handleToggleProperty = async (id) => { 
        try {
            const data = await axios.put(`${server}/api/listProperty/${id}`)
            enqueueSnackbar(data.data.message || "Error confirming order", { variant: "success" });
            setclickChange(!clickChange)
        } catch (error) {
            enqueueSnackbar(error.response.data.message || "Error cancelling order", { variant: "error" });
        }
    };
    const handleTogglePropertyRemove = async (id) => {  
        try {
            const {data} = await axios.put(`${server}/api/listRemoveProperty/${id}`)
            enqueueSnackbar(data.message || "Error confirming order", { variant: "success" });
            setclickChange(!clickChange)
        } catch (error) {
            enqueueSnackbar(error.response.data.message || "Error cancelling order", { variant: "error" });
        }
    };

    const openModal = (order , type) => {
        if (type === 'user') {
            setuserType(true)
        }else{
            setuserType(false)
        }
        setSelectedOrder(order);
        const modal = new bootstrap.Modal(modalRef.current);
        modal.show();
    };

    const closeModal = () => {
        setSelectedOrder(null);
        const modal = new bootstrap.Modal(modalRef.current);
        modal.hide();
    };
    return (
        <div className="container mt-5">
            <h2>Order Confirmation</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Property Name</th>
                        <th>Property Type</th>
                        <th>Confirmation</th>
                        <th>List Property</th>
                    </tr>
                </thead>
                <tbody>
                    {loading ? (<h1>Loading...</h1>) : orderHistory.map(order => (
                        <tr key={order.purchaseID}>
                            <td>
                                <button className="btn btn-link" onClick={() => openModal(order.user , "user")}>
                                    {order.user.name}
                                </button>
                            </td>
                            <td>{order.user.email}</td>
                            <td>
                                <button className="btn btn-link" onClick={() => openModal(order.property, "property")}>
                                    {order.property.Details.Name}
                                </button>
                            </td>
                            <td>{order.property.PropertyType}</td>
                            <td>
                                {order.bookingStatus ? <button className="btn btn-danger" onClick={() => handleToggleOrderRemove(order.property._id)}>Cancel</button> : <button className="btn btn-success" onClick={() => handleToggleOrder(order.property._id)}>Confirm</button>}

                            </td>
                            <td>
                                {order.property.Occupied ? <button className="btn btn-danger" onClick={() => handleTogglePropertyRemove(order.property._id)}>List Property</button> : <button className="btn btn-success" onClick={() => handleToggleProperty(order.property._id)}>Remove List </button>}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">Order Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            {userType ? <>{selectedOrder && (
                                <div>
                                    <p><strong>Name:</strong> {selectedOrder.name}</p>
                                    <p><strong>Email:</strong> {selectedOrder.email}</p>
                                    <p><strong>Phone Number:</strong> {selectedOrder.phoneNumber}</p>
                                </div>
                            )}</> : <>{selectedOrder && (
                                <div>
                                    <p><strong>Name:</strong> {selectedOrder.Details.Name}</p>
                                    <p><strong>Address:</strong> {`${selectedOrder.Details.Address.City}, ${selectedOrder.Details.Address.State}`}</p>
                                    <p><strong>Price:</strong> {selectedOrder.Details.Bathrooms}</p>
                                    <p><strong>Area:</strong> {selectedOrder.Details.Area}</p>
                                    <p><strong>Gender Type:</strong> {selectedOrder.Details.genderType}</p>
                                    <p><strong>Rooms:</strong> {selectedOrder.Details.Rooms}</p>
                                    <p><strong>Bathroom:</strong> {selectedOrder.Details.Bathrooms}</p>
                                    
                                </div>
                            )}</>}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;
