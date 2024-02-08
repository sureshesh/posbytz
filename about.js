import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <Link to="/product">Link to product page</Link>
      <Link to="/">Link to home page</Link>
      <Link to="/contact">Link to contact page</Link>
    </div>
  )
}

export default About