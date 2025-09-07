import React from 'react'
import { Link } from 'react-router-dom'

const AgentCard = ({imgUrl , name , animationDelay , fb , twitter , insta , designation}) => {
  return (
<div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={animationDelay}>
  <div className="team-item rounded overflow-hidden">
    <div className="position-relative">
      <img className="img-fluid" src={imgUrl} alt />
      <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
        <Link to={fb} className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></Link>
        <Link to={twitter} className="btn btn-square mx-1" href><i className="fab fa-twitter" /></Link>
        <Link to={insta} className="btn btn-square mx-1" href><i className="fab fa-instagram" /></Link>
      </div>
    </div>
    <div className="text-center p-4 mt-3">
      <h5 className="fw-bold mb-0">{name}</h5>
      <small>{designation}</small>
    </div>
  </div>
</div>

  )
}

export default AgentCard