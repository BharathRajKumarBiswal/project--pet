import React from 'react'
import { useState } from 'react';
import './Home.css'
import './Homeform.css'
import gal1 from '../Image/gal1.jpg'
import gal2 from '../Image/gal3.jpg'
import gal3 from '../Image/gal2.jpeg'
import src1 from '../Image/src2.jpg'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Home() {
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
    <div className="left-side-text">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-left">
            <h1 className="heading">COME TO, </h1>
            <h1 className='heading1' >HAPPY-TAILS Pets care </h1>
            <p className="description">
            Our 'Happy-Tails' pet care center is a haven for your furry friends, offering expert grooming, attentive boarding, and engaging daycare services. With a focus on comfort and companionship, we provide a loving environment where pets thrive and flourish. Trust us to pamper your pets and ensure they receive the care and attention they deserve, leaving you with peace of mind and happy, healthy companions.
            </p>
            <button className="btn explore-button" onClick={()=>{Explore('/')}}>Explore Now</button>
          </div>
        </div>
      </div>
    </div> <br></br>
     
    <div className="container">
      <div>
        <h1> Our Services : </h1>
        <p>At 'Happy-Tails' pet care center, we offer a comprehensive range of services including grooming treatments for a stylish and healthy appearance, expert veterinary care for essential treatments and vaccinations, and therapeutic sessions to address your pet's physical, emotional, and behavioral needs, ensuring their overall well-being and happiness.</p>
      </div> <br></br>
      <div className="row">
        <div className="col-md-3">
          <h2>Surgery :</h2>
          <p>With advanced surgical techniques and compassionate care, we ensure your pet receives safe and effective treatment, promoting their speedy recovery and long-term well-being.</p>
          <button className='btn' onClick={()=>{Explore('/service')}}>More Details</button>
          <h2>24 Hour Care</h2>
          <p>Round-the-clock care means constant monitoring and support for your pet, ensuring their needs are met at any hour for their comfort and well-being.</p>
          <button className='btn' onClick={()=>{Explore('/service')}}>More Details</button>
        </div>
        <div className="col-md-6 text-center">
          <img src={src1} alt="Middle Image" className="middle-image"  w-100 height={'350px'}/>
        </div>
        <div className="col-md-3">
        <h2>Vaccinations :</h2>
          <p>Our vaccination services offer crucial protection, keeping your pet healthy and safe with expert care. Trust our team for reliable vaccinations to ensure your pet's well-being.</p>
          <button className='btn' onClick={()=>{Explore('/service')}}>More Details</button>
          <h2>Laser Therapy :</h2>
          <p>Our laser therapy treatments provide non-invasive relief, promoting healing and pain management for your pet in a gentle and effective manner.</p>
          <button className='btn' onClick={()=>{Explore('/service')}}>More Details</button>
        </div>
      </div>
    </div> <br></br>
     
     <div>
     <header>
      <h1>Our Work</h1>
      <p>
      Our pet care services encompass a comprehensive range of offerings, from grooming and medical treatments to boarding and behavioral therapy. With a dedication to animal welfare and client satisfaction, we provide personalized care tailored to the unique needs of each pet, ensuring their health, happiness, and well-being.
      </p> <br>
      </br>
    </header>
    <div className='gallery'>
      <img src={gal1} alt="Image 1" />
      <img src={gal2} alt="Image 2" />
      <img src={gal3} alt="Image 3" />
    </div>
<br></br>
    <div className='galry'>
      <button className='btn2' onClick={()=>{Explore('/gallery')}}> <p> Visit Our Galley </p></button>
      </div>

     </div>

     <div>
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={date} onChange={(e)=>{setDate(e.target.value)}} required />
        </div>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={(e)=>{setName (e.target.value)}} required />
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
        <button type="submit" className='btn4'>BOOK APPOINTMENT</button>
      </form>
      <div>
        <p>Timing:   Monday to Friday : 9:00 AM to 5:00 PM </p>
        <p>Saturday : 10:00 AM to 4:00 PM  </p>
        <p>Sunday : closed</p>
      </div>
    </div>
    <div> 
    <Footer/>
    </div>
  

    </div>
  )
}

export default Home

// nawfal@kodaiexplorer.com