import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({icon , type , quantity ,animationDelay}) => {
  return (
    <div className="col-lg-3 col-sm-6 " data-aos-delay={animationDelay} data-aos="fade-up">
    <Link to={`featured/${type}`} className="text-decoration-none cat-item d-block bg-light text-center rounded p-3" >
      <div className="rounded p-4">
        <div className="icon mb-3">
          <img className="img-fluid" src={icon} alt="Icon" />
        </div>
        <h6>{type}</h6>
        {/* <span>{quantity}</span> */}
      </div>
    </Link>
  </div>
  )
}

export default CategoryCard