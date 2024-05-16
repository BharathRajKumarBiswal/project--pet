import React, { useState } from 'react'
import Footer from './Footer'
import { Link, Outlet } from 'react-router-dom'
import './Shop.css'

function Shop() {
 


  return (
    <div>
    
        <button className='btn8'>

      <Link to="food"> FOOD  </Link>
      <Link to="accery"> ACCESERIES  </Link>
        </button>

        <Outlet/>

      <br></br>
      <Footer/>
    </div>
  )
}

export default Shop
