import React from 'react'
import './nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'><img src="\src\assets\react.svg" alt="logo" /></div>
        <div className='links'>
          <Link className='link'>Home</Link>
          <Link className='link'>guide</Link>
          <Link className='link'>about</Link>
        </div>
    </div>
  )
}

export default Nav