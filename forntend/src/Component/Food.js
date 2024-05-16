import React, { useState } from 'react'
import food1 from '../Image/food1.jpeg'
import axios from 'axios'


function Food() {
    const[mrp,setMrp] =useState('999')
    const[description,setDescription]=useState('Pedigree')
    const onAddToCart =()=>{
    axios.post('http://localhost:3002/cart',{mrp,description}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
    }
  return (
    <div>
      <h1>  FOOD</h1>
      <div className="card2">
      <img src={food1} className="card-img-top" alt="Product" />
      <div className="card-body">
        
        <h5 className="card-title" onChange={(e)=>{setDescription(e.target.value)}}>{description}</h5>
        <p className="card-text" onChange={(e)=>{setMrp(e.target.value)}}>MRP: ${mrp}</p>
        <button className="btn btn-primary" onClick={onAddToCart}>Add to Cart</button>
      </div>
    </div>

    </div>
  )
}

export default Food
