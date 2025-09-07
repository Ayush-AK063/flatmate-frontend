import React from "react";

import imgScr from "../../../public/img/SignUp.jpg";

const About = () => {
  return (
    <div>
      {/* body */}
      <div>
        <div className="container-fluid bg-white p-0 ">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-6">
              <h1 data-aos="fade-up" className=" mb-4">About Us</h1>
              <h4>
                <p className="animated fadeIn mb-4 pb-2 text-primary">
                  A Nestio is a type of business that provides rental
                  services of various types of Flats and houses or services,
                  often using technology platforms to facilitate the
                  transactions.
                  <br /> Typically, Nestio aim to provide a convenient,
                  cost-effective, and sustainable alternative to purchasing
                  Flats and Houses, especially for Flats that are only needed
                  for a short period of time.
                </p>
              </h4>
            </div>
            <div className="col-md-6 mb-5">
                  <img src={imgScr} alt="SignUp" width={'100%'} />
            </div>
          </div>
        </div>
        <div className="container-fluid header bg-white p-0 ">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="p-5">
              <h4>
                <p className="animated fadeIn mb-4 pb-2 text-primary">
                  To succeed, Nestio need to have a reliable and
                  user-friendly platform for managing rentals, a strong
                  logistics and customer service infrastructure, and effective
                  marketing and outreach strategies to attract customers. It may
                  also need to develop innovative approaches to managing
                  inventory and ensuring the quality and condition of their
                  rental products.
                </p>
              </h4>
              <br />
              <br />
              <br />
              <h1 className="display-5 animated fadeIn mb-4">
                Vision &amp; Mission of Company
              </h1>
              <h4>
                <p className="animated fadeIn mb-4 pb-2 text-primary">
                  Nestio’s vision is to provides a peer-to-peer rental
                  platform that connects people who need rental flats with
                  people who have rental flat to offer.
                  <br />
                  <br /> Nestio’s mission is to make renting flats easier,
                  faster, and more secure for both renters and owners.
                </p>
              </h4>
            </div>
          </div>
        </div>
        {/* Social Links Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className=" mb-4 fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <h1 className="display-5 animated fadeIn mb-4">Social</h1>
            </div>
            <div className="container-fluid header bg-white p-0 ">
              <div className="row g-5 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-6">
                  <h4>
                    <p className="animated fadeIn">
                      Facebook:-
                      <br /> Instagram:-
                      <br /> LinkedIn:-
                      <br /> Youtube:-
                    </p>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Social Links End */}
        {/* Social Links End */}
        <div className="container-fluid header bg-white p-0">
          <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 p-5 mt-lg-5">
              <h1 className="display-5 animated fadeIn mb-4">
                CONNECT WITH US FROM{" "}
                <span className="text-primary">
                  <br />
                  OUR WEBSITE
                </span>
              </h1>
            </div>
            <div className="col-md-6 animated fadeIn">
                  <img src={imgScr} alt="SignUp" width={'100%'} />
            </div>
          </div>
        </div>
        {/* Social Links End */}
      </div>
    </div>
  );
};

export default About;
