import React from 'react'
import { useState } from 'react';
import './Appform.css'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Appointment() {
  const Explore = useNavigate()

  const[name,setName] = useState('')
  const[date,setDate] =useState('')
  const[number,setNumber] = useState('')
  const[email,setEmail] = useState('')
  const[msg,setMsg] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  axios.post('http://localhost:3000/Appdata',{date,name,number,email,msg}).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
setName('')
setDate('')
setNumber('')
setEmail('')
setMsg('')  
  };

  return (
    <div>
       <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="tel" name="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message" value={msg} onChange={(e)=>{setMsg(e.target.value)}} rows="4" />
        </div>
        <button type="submit" className='btn3'>Submit</button>
      </form>
      <div>
      <p>Timing:   Monday to Friday : 9:00 AM to 5:00 PM </p>
        <p>Saturday : 10:00 AM to 4:00 PM  </p>
        <p>Sunday : closed</p>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Appointment
