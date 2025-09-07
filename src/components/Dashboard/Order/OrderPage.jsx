import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { appointmentHistory, orderHistory } from '../../../store/action/propertyAction';
import PropertyCard from '../../home/Properties/PropertyCard';

const OrderPage = () => {
    const {orders , error} = useSelector((state) => state.orderHistory);
    const { appointments ,error: appointmentError } = useSelector((state) => state.appointmentHistory);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(orderHistory());
    }, [dispatch, orders]);

    useEffect(() => {
        dispatch(appointmentHistory());
    }, [dispatch, appointments]);

    const formatUTCDate = (utcDate) => {
        const date = new Date(utcDate);
        
        // Extracting date components
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(date.getUTCDate()).padStart(2, '0');
      
        // Extracting time components
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        const seconds = String(date.getUTCSeconds()).padStart(2, '0');
        
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };
  return (
    <div>
        <div className='container'>
          <h1>Appointment Pending</h1>
          <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
          {appointments && appointments.map((property, index) => (
                <PropertyCard isDashboard={true} id={property._id} key={index} imgUrl={property.property.Details.Image.url} forType={formatUTCDate(property.createdAt)} type={property.property.PropertyType} price={property.property.Details.Price} name={property.property.Details.Name} address={`${property.property.Details.Address.Street} , ${property.property.Details.Address.City}, ${property.property.Details.Address.State}`} area={property.property.Details.Area} room={property.property.Details.Rooms} bath={property.property.Details.Bathrooms} animationDelay={index*100}/>
              ))}
              </div>
              </div>
              </div>
          {appointmentError && <p className='text-center m-4'>{appointmentError}</p>} 
        </div>
        <div>
          <h1>Appointment History</h1>
          <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
          {orders && orders.map((property, index) => (
                <PropertyCard isDashboard={true} id={property._id} key={index} imgUrl={property.property.Details.Image.url} forType={formatUTCDate(property.createdAt)} type={property.property.PropertyType} price={property.property.Details.Price} name={property.property.Details.Name} address={`${property.property.Details.Address.Street} , ${property.property.Details.Address.City}, ${property.property.Details.Address.State}`} area={property.property.Details.Area} room={property.property.Details.Rooms} bath={property.property.Details.Bathrooms} animationDelay={index*100}/>
              ))}
              </div>
              </div>
              </div>
          {error && <p className='text-center m-4'>{error}</p>} 
        </div>
    </div>
  )
}

export default OrderPage;