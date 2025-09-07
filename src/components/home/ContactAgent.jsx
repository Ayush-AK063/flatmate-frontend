import React from 'react'

const ContactAgent = () => {
  return (
<div className="container-xxl py-5">
  <div className="container">
    <div className="bg-light rounded p-3">
      <div className="bg-white rounded p-4" style={{border: '1px dashed rgba(0, 185, 142, .3)'}}>
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1000">
            <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt />
          </div>
          <div className="col-lg-6 " data-aos="fade-up" data-aos-duration="1000">
            <div className="mb-4">
              <h1 className="mb-3">Contact With Our Certified Agent</h1>
              <p>Our agents are your first line of help when it comes to any issue that you may have.You can be sure that our certified agents are up to date with all the services that we offer. </p>
            </div>
            <a href="tel: +917376319926" className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2" />Make A Call</a>
             </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default ContactAgent