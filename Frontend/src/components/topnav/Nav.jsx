import React from 'react'
import './nav.css'
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
        <div className='logo'><Link to={'/'} ><img src="public/assets/react.svg" alt="logo" /></Link></div>
        <div className='links'>
          <Link to={"/"} className='link'>Home</Link>
          <Link to={"/guide"} className='link'>guide</Link>
          <Link to={"/about"} className='link'>about</Link>
        </div>
    </div>
  )
}

export default Nav