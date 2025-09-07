import React from 'react'

import "./testimonial.css";

const TestimonialCard = () => {
  return (
<div  className=" bg-light rounded p-3 testimonial-div">
  <div className="bg-white border testimonial-item rounded p-4">
    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
    <div className="d-flex align-items-center">
      <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: 45, height: 45}} />
      <div className="ps-3">
        <h6 className="fw-bold mb-1">Client Name</h6>
        <small>Profession</small>
      </div>
    </div>
  </div>
</div>

  )
}

export default TestimonialCard