import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { server } from "../../store/store";
import { enqueueSnackbar } from "notistack";
import axios from "axios";
import { Link } from "react-router-dom";

const Footer = () => {
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  const [message, setmessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handlefeedback = async () => {
    // send feedback to backend
    try {
      const { data } = await axios.post(`${server}/api/feedback`, {
        rating,
        message,
      });
      enqueueSnackbar(data.message, { variant: "success" });
    } catch (error) {
      enqueueSnackbar(error.response.data.message, { variant: "error" });
    }
  };
  return (
    <div
      className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5 d-flex justify-content-between">
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Get In Touch</h5>
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              Goel phase-3 Lucknow,226028
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              +918112863935
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              akgroupzsocial@gmail.com
            </p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href>
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-outline-light btn-social" href>
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-outline-light btn-social" href>
                <i className="fab fa-youtube" />
              </a>
              <a className="btn btn-outline-light btn-social" href>
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Quick Links</h5>
            <Link className="btn btn-link text-white-50" to={"/about"}>
              About Us
            </Link>
            <Link className="btn btn-link text-white-50" to={"/contact"}>
              Contact Us
            </Link>
            <Link className="btn btn-link text-white-50" to={"/login"}>
              Login
            </Link>
            <Link className="btn btn-link text-white-50" to={"/register"}>
              Register
            </Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-white mb-4">Feedback</h5>
            <p>Please rate our service</p>
            <Rating className="m-2" onClick={handleRating} />
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <div className="position-relative">
                <textarea
                  className="form-control w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter Message"
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                {!isFocused && (
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                    onClick={handlefeedback}
                  >
                    Submit
                  </button>
                )}
              </div>
              {isFocused && (
                <button
                  type="button"
                  className="btn btn-primary w-100 mt-2"
                  onClick={handlefeedback}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              ©{" "}
              <a className="border-bottom" href="#">
                Your Site Name
              </a>
              , All Right Reserved. Designed By{" "}
              <a className="border-bottom" href="#">
                your Site name
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;