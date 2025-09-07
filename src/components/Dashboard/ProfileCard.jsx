import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useRef, useState } from "react";
import { server } from "../../store/store";

const ProfileCard = ({ user }) => {
  const [userEditData, setuserEditData] = useState({
    name: user.name,
    email: user.email,
    phoneNumber: user.phoneNumber,
  });
  const [image, setImage] = useState('');

  const handleChange = (e) => {
    setuserEditData({ ...userEditData, [e.target.name]: e.target.value });
  };

  const modalRef = useRef(null);

  const openModal = () => {
    const modal = new bootstrap.Modal(modalRef.current);
    modal.show();
  };

  const closeModal = () => {
    const modal = new bootstrap.Modal(modalRef.current);
    modal.hide();
  };

  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(file);
    };
  };


  const updateHandle = async () => {
    try {
      const newForm = new FormData();
      newForm.append("name", userEditData.name);
      newForm.append("email", userEditData.email);
      newForm.append("phoneNumber", userEditData.phoneNumber);
      newForm.append("file", image);

      const { data } = await axios.put(`${server}/api/profileUpdate`, newForm);
      enqueueSnackbar(data.message, { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card mb-3">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-sm-3 text-center">
                <img
                  src={user.profilePic && user.profilePic.url ? user.profilePic.url : "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3"
                  width="120px"
                  height="120px"
                />
              </div>
              <div className="col-sm-9">
                <h5 className="mb-2">{user.name}</h5>
                <p className="text-secondary mb-1">{user.email}</p>
                <p className="text-secondary mb-0">{user.phoneNumber}</p>
              </div>
            </div>
            <hr className="my-4" />
            <div className="row">
              <div className="col-sm-12">
                <button className="btn btn-primary px-4" onClick={openModal}>
                  Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}
      <div className="modal fade" ref={modalRef} tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderModalLabel">Edit Profile</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" name="name" onChange={handleChange} required value={userEditData.name} />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" onChange={handleChange} required value={userEditData.email} />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number</label>
                <input type="tel" className="form-control" id="phone" name="phoneNumber" onChange={handleChange} required value={userEditData.phoneNumber} />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">Select Profile</label>
                <input type="file" className="form-control" id="image" name="image" onChange={changeImageHandler}  />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={closeModal}>Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={updateHandle}>Update Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
