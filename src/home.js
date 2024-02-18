import React, { useState, useEffect } from 'react'
import 'animate.css';
import './home.css';
import homelogo2 from '../src/image/hotel.png';
import home2 from '../src/image/home2.jpg';
import home3 from '../src/image/home3.jpg';
import home4 from '../src/image/hotel2.png';
import home5 from '../src/image/hotel3.png';
import videoparty from '../src/video/new year.mp4';
import Drinks from './drinks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home  = () => {
  const [currentQuote, setCurrentQuote] = useState('Welcome to Swathi Vaihav!!!.');
  
  // Array of quotes
  const quotes = [
    "Satisfy your cravings guilt-free with our delectable range of offerings!",
    "Indulge in culinary delights that will leave you wanting more!",
    "Experience food nirvana with our mouthwatering menu!",
    "Discover a world of taste sensations with our exquisite cuisine!",
    "Treat yourself to a symphony of flavors that will tantalize your taste buds!"
  ];

  useEffect(() => {
    // Function to update the current quote at a regular interval
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 5000); // Change quote every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [quotes]);

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div style={{marginTop:'40px'}}>

      <Slider {...settings}>
        <div>
          <img className="logo2" src={homelogo2} alt="logo2" height="100%" width="100%" style={{ backgroundAttachment: 'fixed' }} />
        </div>
        {/* <div>
          <img src={home5} alt="home2" className="responsive-image" />
        </div> */}
        <div>
          <img src={home4} alt="home2" className="responsive-image" />
        </div>
        <div>
          <img src={home3} alt="home3" className="responsive-image" />
        </div>
      </Slider>
        <div>
{/* <img className="logo2" src={homelogo2} alt="logo2" height='100%' width="100%" style={{backgroundAttachment:'fixed'}}></img> */}

{/* <p className="homelogo2 text-white animate__animated animate__backInRight animate__delay-1s" style={{fontSize:'25px',padding:'25px'}} >
    
Satisfy your cravings guilt-free with our delectable range of <span style={{color:'#3fc91b',fontWight:'bolder',fontSize:'32px'}}>OFFERINGS..!</span>
</p>
</div> */}
<p className="homelogo2 text-white animate__animated animate__backInRight animate__delay-1s" style={{ fontSize: '25px', padding: '25px' }}>
        {currentQuote}
      </p>
      </div>

<div class="d-md-flex">
        <div class="col-md  text-center pt-5 animate__animated animate__backInLeft animate__delay-2s" >
            <h2 style={{color:'orange',fontSize:'50px'}}>Restaurants</h2>
            <h3 style={{fontStyle:'italic'}}>25 Years Of Service</h3><br></br>
            <p style={{borderBottom:'2px solid green'}}></p>
        <p className="home3">WITH ROOTS THAT ARE 25 YEARS OLD  HAS ITS BRANCHES SPREAD ACROSS BANGALORE BEARING 5 THRIVING RESTAURANTS. EACH ESTABLISHMENT SPECIALIZES IN SERVING AUTHENTIC ANDHRA CUISINE BUT OUR EXPERTISE DOESN’T LIMIT TO THAT. WE PROVIDE FOOD AND SERVICE THAT REFLECTS OUR CORE BELIEFS TO MAKE EVERY MEAL A MEMORABLE EXPERIENCE.</p>
      <br></br>  <button type="button" style={{marginBottom:'50px'}} className="btn btn-success btn-lg ">Order Now <i class="bi bi-arrow-right"></i></button>
    </div>
    <div class="col-md animate__animated animate__backInRight animate__delay-2s" >
<img src={home2} alt="home2" width="100%" height="100%" ></img>
    </div>
</div>
<div>
  
          <div class="d-md-flex">
          <div class="col-md animate__animated animate__backInRight animate__delay-3s">
<img src={home3} alt="home2" width="100%" height="100%" ></img>
    </div>
        <div class="col-md  text-center pt-5 animate__animated animate__backInLeft animate__delay-3s" >
            <h2 style={{color:'orange',fontSize:'50px'}}>Catering</h2>
            <h3 style={{fontStyle:'italic'}}> MAKING YOUR OCCASIONS SPECIAL</h3><br></br>
            <p style={{borderBottom:'2px solid green'}}></p>
        <p className="home3">With a wide spread of delicious food boasting of many cuisines and delicacies to choose from and a humble service that brings smiles, our catering services are well known in Bangalore. Be it a big event with a long guest list or a small, personal gathering, we are well equipped to make it a memorable occasion. Weddings, reception parties, engagement parties, birthday parties or even corporate gatherings, we’ve done them all and more.</p>
      <br></br>  <button type="button" style={{marginBottom:'50px'}} className="btn btn-success btn-lg ">Book Us Now <i class="bi bi-arrow-right"></i></button>
    </div>
 
</div>
    </div>
    <Drinks/>
    <div >
        <div>
      <video src={videoparty} width="100%" autoPlay muted loop objectFit="contained"></video>
      </div>
      <div className=" party d-flex">
      <div>
        <button type="button" className="btn-large btn btn-success" style={{border :" 2px solid green",borderRadius:'5px',padding:'10px',marginRight:'30px'}}>BOOK A SUITE <i class="bi bi-arrow-right"></i></button>
      </div>
      <div>
        <button type="button" className="btn-large btn btn-success" style={{border:'2px solid green',borderRadius:'5px',padding:'10px'}}>CONTACT US<i class="bi bi-arrow-right"></i></button>
      </div>
      </div>
    </div>
</div>

  )
}
export default Home ;
