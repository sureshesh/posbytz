import React from 'react'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <Link to="/product">Link to product page</Link>
      <Link to="/about">Link to about page</Link>
      <Link to="/">Link to home page</Link>
    </div>
  )
}

export default Contact