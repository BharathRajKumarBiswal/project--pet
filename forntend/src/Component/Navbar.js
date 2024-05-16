import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Petcare.css'

function Navbar() {
  const [dropdown, setDropDown] = useState('')

  const navigate = useNavigate()
  const handleChange = (e) => {
    setDropDown(e.target.value)
    navigate(e.target.value)
  }
  return (
    <div>
      <nav class='Nav-bar'>

        <NavLink className='home' to='/'> Home </NavLink>
        <NavLink className='home' to='/appointment'> Appointments </NavLink>
        <NavLink className='home' to='/service'>Services </NavLink>
        <NavLink className='home' to='/shop'>Shop </NavLink>
        {/* <NavLink className='home' to='/profile'>Profile</NavLink> */}
        <select value={dropdown} onChange={handleChange} class='option'>
          <option value={'/profile'}>Profile</option>
          <option value={'/cart'}>CART</option>
          <option value={'/'}>LOGOUT</option>
        </select>
        <select value={dropdown} onChange={handleChange} class='option'>
          <option value={'/'}>Home</option>
          <option value={'/gallery'}>Gallery</option>
          <option value={'/aboutus'}>About us</option>
        </select>
        <NavLink className='home' to='/signup'> Sign Up </NavLink>
        <NavLink className='home' to='/login'> Login </NavLink>


      </nav>

    </div>
  )
}

export default Navbar
