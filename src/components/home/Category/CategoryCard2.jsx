import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard2 = ({icon , type , quantity ,animationDelay}) => {
  return (
    <div className='container' data-aos-delay={animationDelay} data-aos="fade-up">
        <Link to={`featured/${type}`}>
            <img src={icon} alt="" />
        </Link>
    </div>
  )
}

export default CategoryCard2