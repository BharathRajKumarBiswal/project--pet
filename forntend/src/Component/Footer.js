import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import image from '../Image/Animal4.jpg'
import image2 from '../Image/treatmen1.jpg'
import image3 from '../Image/treatment2.jpg'
import image4 from '../Image/trt6.jpg'
import image5 from '../Image/treatment4.png'


function Footer() {
  return (
   <div>
     <footer className="footer">
      <div className="container1 col">
        <div className="row-md-3">
          {/* Logo and Contact Details */}
          <div >
            <div className="footer-section">
              <img src="logo.png" alt="Logo" className="logo" />
              <div className="contact-details">
                <p>Address: Happy-Tails Petcare,
                    <br></br>   Saravanapatti,combatore,500043. </p>
                <p>Email: Happy-Tails@pcare.com </p>
                <p>Number : **********</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="https://www.whatsapp.com"><FontAwesomeIcon icon={faWhatsapp} /></a>
                  <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-md-3">
          {/* Timing Details */}
          <div>
            <div className="footer-section">
              <h3>Opening Hours</h3>
              <div className="timing-details">
              <p> <FontAwesomeIcon icon={faClock} /> Monday - Friday: 9am - 5pm</p>
                <p>  <FontAwesomeIcon icon={faClock} /> Saturday: 10am - 4pm</p>
                <p><FontAwesomeIcon icon={faClock} /> Sunday: Closed</p>
              </div>
            </div>
          </div>
          </div>

          <div className="row-md-3 ">
            <div>
                <h3>Gallery :</h3>
            </div>
            <div className='image'>
              <div className="col-md-4 mb-3 ">
                <img src={image} style={{width:'100px', height:'60px'}} className="img-fluid" alt="Gallery 1" />
              </div>
              <div className="col-md-4 mb-3 ">
                <img src={image2} style={{width:'100px', height:'60px'}} className="img-fluid" alt="Gallery 2" />
              </div>
              <div className="col-md-4 mb-3 ">
                <img src={image3} style={{width:'100px', height:'60px'}} className="img-fluid" alt="Gallery 3" />
              </div>
              </div>
              <div className='image'>
              <div className="col-md-4 mb-3 ">
                <img src={image4} style={{width:'80px', height:'60px'}} className="img-fluid" alt="Gallery 1" />
              </div>
              <div className="col-md-4 mb-3 ">
                <img src={image5} style={{width:'110px', height:'60px'}} className="img-fluid" alt="Gallery 1" />
              </div>
               </div>
              {/* Add more images as needed */}
            </div>
          {/* Info and Website Links */}
          <div className="row-md-3">
          <div>
            <div className="footer-section">
              <h3>Info</h3>
             
              <div className="website-links">
                <a href="/">Home</a>
                <a href="/about">About-us</a>
                <a href="/service">Services</a>
                <a href="/contact">Contact-us</a>
                <a href="/contact">Shop now</a>

              </div>
            </div>
          </div>
          </div>
      </div>
    </footer>

   </div>
   
  );
}

export default Footer;
