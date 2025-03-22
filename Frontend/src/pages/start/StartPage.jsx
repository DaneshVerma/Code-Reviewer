import React from 'react'
import { Link } from 'react-router-dom'
import "./start.css"
const StartPage = () => {
  return (
    <div>
        <h1 className='start-h1'>Welcome To code-view</h1>
        <Link to={"/review"}>
        <button>Start</button>
        </Link>
    </div>
  )
}

export default StartPage