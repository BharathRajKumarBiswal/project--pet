import React from 'react'
import { useState } from 'react'
import tmt1 from '../Image/tmt2.jpg'
import tmt2 from '../Image/tmt1.jpeg'
import tmt3 from '../Image/tmt3.jpg'
import tmt4 from '../Image/tmt4.webp'
import grm2 from '../Image/grm2.webp'
import grm1 from '../Image/grm4.jpeg'
import grm3 from '../Image/grm3.jpeg'
import pl1 from '../Image/pl1.gif'
import pl2 from '../Image/pl2.jpg'
import grm4 from '../Image/grm1.jpeg'
import fd2 from '../Image/fd2.webp'
import fd1 from  '../Image/fd4.jpeg'
import './Gallery.css'
import Footer from './Footer'
   

function Gallery() {
  
    const [displayCount, setDisplayCount] = useState(''); 
    const images = [tmt1, tmt2, tmt3, tmt4, grm1, grm2, grm3, pl1, pl2, grm4, fd2, fd1];
  
    const handleLoadmore = () => {
      setDisplayCount(prevCount => prevCount + 3); 
    };

  return (
    <div className='card'> <br></br>
        <div>
            <button> Add Your Story </button>
            </div>
      <h1 className='text-center my-5'>Gallery</h1>
      

            <div className="container">

                <div className="d-flex contain">
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={tmt1} className="card-img-top" alt="..."/>
                     <div className="card-body">

                     <p className="card-text">The surgical team at PetsCare performed a miraculous procedure on our pet, showing unparalleled skill and compassion throughout the process. Our beloved companion is now thriving, thanks to their expertise.</p>
                    
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={grm1} className="card-img-top" alt="..."/>
                     <div className="card-body">

                     <p className="card-text">Our pet's grooming session at PetsCare was a delight from start to finish. The groomers listened to our preferences and paid attention to every detail, resulting in a beautifully groomed pet who strutted out with confidence. Thank you, PetsCare!</p>
                    
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={pl1} className="card-img-top" alt="..."/>
                     <div className="card-body">

                     <p className="card-text">The play area at PetsCare is a pet paradise! Our furry friend had a blast romping around with other pets under the watchful eye of the attentive staff. It's clear that PetsCare prioritizes fun and safety for all pets in their care.</p>
                    
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={tmt4} className="card-img-top" alt="..."/>
                     <div className="card-body">

                     <p className="card-text">PetsCare exceeded our expectations with their professionalism and expertise during our pet's surgery. The compassionate staff provided regular updates and post-operative care, ensuring a smooth recovery for our furry friend.</p>
                    
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={grm2} className="card-img-top" alt="..."/>
                     <div className="card-body">
             
                     <p className="card-text">PetsCare's grooming service transformed our pet into a fluffy ball of joy! The groomers were patient and skilled, leaving our furry friend looking and feeling their best. Highly recommend for a pampering experience!</p>
                  
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={fd1} className="card-img-top" alt="..."/>
                     <div className="card-body">
            
                     <p className="card-text">We love the peace of mind that comes with PetsCare's feeding service. Whether we're away for a day or a week, we know our pet is in good hands, receiving balanced meals and plenty of water to keep them nourished and hydrated.</p>
                   
              </div>
          </div>
                    </div> 

                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={tmt2} className="card-img-top" alt="..."/>
                     <div className="card-body">
                     <p className="card-text">We entrusted PetsCare with our pet's surgery, and we couldn't be happier with the results. The surgeons were highly skilled, the facilities were state-of-the-art, and our pet received the best possible care from start to finish.</p>
              </div>
          </div>
                    </div>
                    
                     <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={grm3} className="card-img-top" alt="..."/>
                     <div className="card-body">
                   
                     <p className="card-text">We're thrilled with the grooming experience at PetsCare! The groomers were not only skilled but also gentle and patient with our pet, who can be a bit nervous. The end result exceeded our expectations, and we'll definitely be returning for future grooming sessions.</p>
                   
              </div>
          </div>
                    </div>
                    
                     <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={tmt3} className="card-img-top" alt="..."/>
                     <div className="card-body">
                     
                     <p className="card-text">PetsCare exceeded our expectations with their professionalism and expertise during our pet's surgery. The compassionate staff provided regular updates and post-operative care, ensuring a smooth recovery for our furry friend.</p>
                    
              </div>
          </div>
                    </div> 
                    <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={fd2} className="card-img-top" alt="..."/>
                     <div className="card-body">
                    
                     <p className="card-text">PetsCare takes the guesswork out of pet feeding with their expertly curated food options and feeding schedules. Our pet's coat is shinier, their energy levels are higher, and we couldn't be happier with the results.</p>
                   
              </div>
          </div>
                    </div> <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={grm4} className="card-img-top" alt="..."/>
                     <div className="card-body">
                   
                     <p className="card-text">PetsCare's grooming service is top-notch! Our pet returned home looking like a superstar, thanks to the talented groomers who worked their magic. From nail trims to luxurious baths, PetsCare is our go-to for all grooming needs.</p>
                    
              </div>
          </div>
                    </div> <div className='col-md-3'>
                    <div className="card"  food> 
                     <img src={pl2} className="card-img-top" alt="..."/>
                     <div className="card-body">
                 
                     <p className="card-text">PetsCare's play area is a game-changer for busy pet parents. Knowing that our furry friend is getting plenty of exercise and socialization while we're at work brings us peace of mind. Plus, the convenient hours and flexible scheduling make it a win-win for everyone!</p>
                    
              </div>
          </div>
                    </div> 
                   
                    
                </div>
                 <br></br>

                 <div className="container">
        <div className="d-flex contain">
          {images.slice(0,displayCount).map((image,index) => (
            <div key={index} className='col-md-3'>
              <div className="card" food>
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <p className="card-text">Image {index+1} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <br></br>
        {displayCount < images.length &&(
          <button onClick={handleLoadmore} className="btn btn-primary mt-3">Load More</button>
        )}
      </div>
              
            </div> <br></br>
            <Footer/>
            </div>
  )
}

export default Gallery
