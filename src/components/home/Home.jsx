import React from 'react'
import Slider from '../header/slider/Slider'
import Search from './Search'
import Category from './Category/Category'
import Property from './Properties/Property'
import ContactAgent from './ContactAgent'
import Agents from './PropertyAgents/Agents'
import Testimonial from './Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Slider />
      <Search/>
      <Category/>
      <Property/>
      <ContactAgent/>
      {/* <Agents/> */}
      <Testimonial/>
    </div>
  )
}

export default Home