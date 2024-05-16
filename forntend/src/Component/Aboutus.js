import React from 'react'
import './About.css'
import Footer from './Footer'

function Aboutus() {
  return (
    <div>
      
      <div>
      <div className='contain'>
         <div className='para'>
            <div><h1>
                LOVE YOUR PETS</h1></div>
                <div>
                    <h6>
                    In keeping with LovePet efforts of being Australia’s most transparent Pet Facility, we can now share. tour of our Facility
                    </h6>
                </div>
                <div className="para1">
                <p>We’ve all heard people who say that pets are “just” animals, as though somehow they’re not important in our lives. These people have likely never owned a loyal dog or loving cat and their words couldn’t be further from the truth. Most pet owners will know how wonderful owning an animal can be; they will understand the companionship and how beautiful bonds can be formed between animal and human.
            The LovePet is a family owned business. The Cleghorn and Hill families have been involved in the pet care industry for a combination of 33 years, they are renowned for the expert care, and service that they provide to their clients. This expertise has been combined with years of research and planning to deliver Melbourne. pet owners with a facility that offers maximum comfort and maximum safety – in all seasons.
                </p></div>
            
         </div>
         <div>
            <img src='https://img.freepik.com/free-photo/cute-animals-group-white-background_23-2150038562.jpg'  alt='noimg'/>
         </div>
         {/* </div> */}
         <div className='section' style={{padding:"100px"}}>
            <div className='container-sm'>
            <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12' style={{gap:"10px"}}>
         <div className='about-text'>        
            <img style={{height:"300px", width:"300px", borderRadius:"100%"}} src='https://twinmaplesvethospital.com/wp-content/uploads/2023/01/Exotic-Pets-img.jpg' alt=''/>
            <h4></h4>
               </div>
               <div>
               <h4 style={{marginLeft:"90px"}}>Vaccinations</h4>
               </div>
               </div>
               <div className='col-lg-4 col-md-12 col-sm-12' style={{gap:"10px"}}>
                    <div className='about-text'>
                       
            <img style={{height:"300px", width:"300px", borderRadius:"100%"}} src='https://www.worldatlas.com/r/w960-q80/upload/8b/72/3e/shutterstock-690150508.jpg'/>
               
            <h4></h4>
            </div>
            <div>
               <h4 style={{marginLeft:"90px"}}>Day Camp</h4>
               </div>
               </div>
               <div className='col-lg-4 col-md-12 col-sm-12' style={{gap:"10px"}}>
         <div className='about-text'>
            <img style={{height:"300px", width:"300px", borderRadius:"100%"}} src='https://d1jyxxz9imt9yb.cloudfront.net/medialib/3591/image/p1300x1300/Slow-Loris_reduced.webp'/>

               </div>
               <div>
               <h4 style={{marginLeft:"90px"}}>24 Hour Care</h4>
               </div>
               <h4> </h4>
               </div>
            </div>
            </div>

         </div>
         <div className='contain2'>
<div className='img2'> 
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppTuxIndXBISOGmg-BfCGB9-mE4ZMN4xIH0XtFtnn&s'/> 
</div>
         </div>
         <div className='content'>
         <div class="card">
  <div class="card-body">
    <h5 class="card-title">Contact</h5>
    <h6 class="card-subtitle mb-2 text-muted">Happy Tails</h6><br/>
    <h6 class="card-subtitle mb-2 text-muted">Name:John</h6><br/>
    <h6 class="card-subtitle mb-2 text-muted">Contact:9785755749</h6><br/>
    <h6 class="card-subtitle mb-2 text-muted">Email:john@gamil.com</h6><br/>
    <h6 class="card-subtitle mb-2 text-muted">Address:No:3,saravanapatti,coimbatore</h6><br/>
    <div className='fonts'>
    <i class="fa-brands fa-whatsapp"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-facebook"></i>
    </div>

    <p class="card-text"></p>
   
  </div>
</div>

         </div>
    </div>
    </div>
      <br></br>
     <Footer/>
    </div>
  )
}

export default Aboutus
