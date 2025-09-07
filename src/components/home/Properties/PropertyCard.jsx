import React from "react";

import "./modal.css" 
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { server } from "../../../store/store";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const PropertyCard = ({Occupied, isAdmin, id, imgUrl, forType, type, price, name, address, area, room, bath, animationDelay , isDashboard }) => {

  const navigateTo = useNavigate();


  const modalRef = useRef(null);

  const openModal = () => {
    if (!isDashboard) {
      const modal = new bootstrap.Modal(modalRef.current);
      modal.show();
    }
};

const closeModal = () => {
    const modal = new bootstrap.Modal(modalRef.current);
    modal.hide();
};

const handlePurchase = async () => {
  
  try {
    // Simulate a delay (replace this with your actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    const response = await axios.get(`${server}/api/bookAppointment/${id}`);

    // Close the loading snackbar

    // Show success snackbar
    enqueueSnackbar(response.data.message, { variant: "success" });
    
  } catch (error) {

    // Show error snackbar
    enqueueSnackbar(error.response.data.message, { variant: "error" });
    
  }
}

  const editHandle = () => {
    navigateTo(`/admin/editProperty?id=${id}`);
  }

  return (
    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={animationDelay}>
      {/* Property Card */}
      <div className="property-item rounded overflow-hidden" onClick={isAdmin ? editHandle : ""}>
        <div className="position-relative overflow-hidden">
          <a href="#">
          <Carousel emulateTouch infiniteLoop showThumbs={false} showStatus={false} autoPlay>
             {imgUrl && imgUrl.map((img, index) => (
                <div>
                    <img className="img-fluid" src={img.url} key={index} />
                </div>
              ))}
        </Carousel>
            {/* <img className="img-fluid" src={imgUrl} alt={name} /> */}
          </a>
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            {forType}
          </div>
          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            {type}
          </div>
        </div>
        <div className="p-4 pb-0">
          <div className="d-flex justify-content-between">
          <h5 className="text-primary mb-3">₹ {price}/Person</h5>
          <button className={`${isAdmin ? ".d-none" : ""} btn btn-primary`} onClick={openModal} >Book</button>
          </div>
          <a className="d-block h5 mb-2" href="#">
            {name}
          </a>
          <p>
            <i className="fa fa-map-marker-alt text-primary me-2" />
            {address}
          </p>
        </div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2" />
            {area} Sqft
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-bed text-primary me-2" />{room} Rooms
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2" />{bath} Bath
          </small>
        </div>
      </div>

  {!isAdmin && (
      <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true" >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="orderModalLabel">Order Details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                        <p>
                    <i className="fa fa-map-marker-alt text-primary me-2" />
                    {address}
                  </p>
                  <p>{`Area: ${area} Sqft`}</p>
                  <p>{`Price: ₹ ${price}`}</p>
                  <p>{`Booking Status: ${Occupied ? 'Booked' : 'Available'}`}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handlePurchase}>Book Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
  )}
    </div>
  );
};

export default PropertyCard;
