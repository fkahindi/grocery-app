import React from 'react'
import { Link } from "react-router-dom";

const  NavBar = ()=>{
  return (
    <div>
       <nav>
          <ul>
            <li>
              <Link to="/" className='link'>Home</Link>
            </li>
            <li>
              <Link to="/login" className='link'>Login</Link>
            </li>
            <li>
              <Link to="/signup" className='link'>Signup</Link>
            </li>
            <li>
              <Link to="/dashboard" className='link'>Dashboard</Link>
            </li>
          </ul>
        </nav>
    </div>
  )
}

export default NavBar