import React from 'react'
import Footer from './Footer'
import './Services.css'
import { useNavigate } from 'react-router-dom'

function Services() {
  const Nav = useNavigate()
  return (
    <div>
      
      <>
            <h1 className='text-center text-success my-5'>Services</h1>
            <div className="row">
                <div className=" d-flex contain">
                    <div className=' col-md-3'>
                    <div className="card1"  services> 
                     <img src="http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-1.jpg " className="card-img-top"  style={{ height: '100px' }}alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Surgery</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-4.jpg" className="card-img-top"  style={{ height: '100px' }} alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">24 Hour Care</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-23.jpg" className="card-img-top"  style={{ height: '100px' }} alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Vaccinations</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div> 
                    
                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="	http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-2.jpg" className="card-img-top"  style={{ height: '100px' }} alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Pet Sitting</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-3.jpg" className="card-img-top"  style={{ height: '100px' }} alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Laser Therapy</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-26.jpg" className="card-img-top"  style={{ height: '100px' }} alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Overnight Care</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div>
                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-25.jpg" className="card-img-top" style={{ height: '100px' }}  alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Specialty Services</h5>
                     <p className="card-text">OOur veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div>

                    <div className='button text-center btn_pos'>
                <button type="button" class="btn btn-outline-warning btn-lg  btn6" onClick={()=>{Nav('/appform')}} >Book Appointment</button>
                </div>

                    <div className='col-md-3'>
                    <div className="card1"  services> 
                     <img src="	http://lovepet.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2017/06/img-24.jpg" className="card-img-top"  style={{ height: '100px' }}  alt="..."/>
                     <div className="card-body">
                      <h5 className="card-title">Holiday Service</h5>
                     <p className="card-text">Our veterinarians can perform orthopedic and soft tissue surgeries your pet may require.</p>
                    {/* <a href="#" className="btn btn-primary">Read More</a> */}
              </div>
          </div>
                    </div>
                   
                    </div> 
                    
                </div>

               
             
        </>
        <br></br>
      <Footer/>
    </div>
  )
}

export default Services
