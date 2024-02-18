import React, { useState, useEffect } from 'react'
import 'animate.css';
import './home.css';
import homelogo2 from '../src/image/hotel.png';
import home2 from '../src/image/food1.png';
import home3 from '../src/image/home3.jpg';
import home4 from '../src/image/hotel2.png';
import home5 from '../src/image/hotel3.png';
import videoparty from '../src/video/new year.mp4';
import Drinks from './drinks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MenuModal from './MenuModal';
import { Card, Row, Col,Button  } from 'react-bootstrap';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


const Home  = () => {
  const [showMenuModal, setShowMenuModal] = useState(false); 
  const [widgetMessage, setWidgetMessage] = useState('');

  const [currentQuote, setCurrentQuote] = useState('Welcome to Swathi Vaihav!!!.');
  const handleBrowseMenu = () => {
    setShowMenuModal(true); 
  };
  const handleWhatsAppClick = (message) => {
    const phoneNumber = '8861505799';
    window.open(`https://wa.me/${phoneNumber}/?text=${encodeURIComponent(message)}&create=true`, '_blank');
  };

  const handleBookNowClick = () => {
    const message = 'Hello Swathi Vaibhav!, \nI am looking for Your Party/Banquit AC hall for my function, please help me with more details about your service';
    handleWhatsAppClick(message);
  };

  const handleContactUsClick = () => {
    const message = 'Hello Swathi Vaibhav!, \nI am looking for your help.';
    handleWhatsAppClick(message);
  };

  const handleNewUserMessage = (newMessage) => {
    setWidgetMessage(newMessage); // Store the new message in state
    // Handle the new message as needed
    // For example, you can call handleWhatsAppClick with the new message
    handleWhatsAppClick(newMessage);
  };
  const quotes = [
    "Satisfy your cravings guilt-free with our delectable range of offerings!",
    "Indulge in culinary delights that will leave you wanting more!",
    "Experience food nirvana with our mouthwatering menu!",
    "Discover a world of taste sensations with our exquisite cuisine!",
    "Treat yourself to a symphony of flavors that will tantalize your taste buds!"
  ];
  const openWhatsApp = () => {
    var phoneNumber = '8861505799';
    var defaultMessage = encodeURIComponent('Hello Swathi Vaibhav,\nCan you please help me with more information about');
    var url = `https://wa.me/${phoneNumber}?text=${defaultMessage}&create=true`;
    window.open(url);
  }
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
  <div class="col-md text-center pt-5 animate__animated animate__backInLeft animate__delay-2s">
    <h2 style={{ color: 'orange', fontSize: '50px' }}>About Our Food</h2>
    <h3 style={{ fontStyle: 'italic' }}>Delicious and Authentic</h3>
    <br />
    <p style={{ borderBottom: '2px solid green' }}></p>
    <p className="home3">Welcome to Swathi Vaibhav Pure Veg Restaurant, conveniently situated in Yelahanka New Town, Bangalore. Our newly inaugurated restaurant offers a diverse culinary experience in a welcoming atmosphere. Whether you prefer self-service or air-conditioned seating, we ensure your comfort during your dining experience. We take pride in offering two elegant banquet halls, Sindhoora and Shringara, perfect for hosting special occasions. Additionally, our catering services are available to make your events memorable. For those who prefer dining at home, we offer convenient home delivery services.</p>
    <br />
    <button type="button" style={{ marginBottom: '50px' }} className="btn btn-success btn-lg" onClick={handleBrowseMenu}>Browse Menu <i className="bi bi-arrow-right"></i></button>
  </div>
  <div class="col-md animate__animated animate__backInRight animate__delay-2s">
    <img src={home2} alt="home2" width="100%" height="100%" />
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
        <p className="home3">                We specialize in catering for a wide range of events, from weddings, receptions, engagement parties, birthdays to corporate events. Our delicious vegetarian dishes and friendly service will bring joy to your gatherings, whether they are large or intimate. We ensure that every occasion becomes a memorable one.
</p>
      <br></br>  <button type="button" onClick={openWhatsApp} style={{marginBottom:'50px'}} className="btn btn-success btn-lg ">Book Us Now <i class="bi bi-arrow-right"></i></button>
    </div>
 
</div>
    </div>
    <Drinks/>
    <div >
    {/* <div>
  <video src={videoparty} width="100%" height="500px" autoPlay muted loop objectFit="contained"></video>
</div> */}

      <div className=" party d-flex">
      <div className=" party d-flex justify-content-center mt-4">
          <div>
            <Button onClick={handleBookNowClick} variant="success" style={{ border: "2px solid green", borderRadius: '5px', padding: '10px', marginRight: '30px' }}>BOOK NOW <i class="bi bi-arrow-right"></i></Button>
          </div>
          <div>
            <Button onClick={handleContactUsClick} variant="success" style={{ border: '2px solid green', borderRadius: '5px', padding: '10px' }}>CONTACT US <i class="bi bi-arrow-right"></i></Button>
          </div>
        </div>
        </div>
    </div>
    {/* <div style={{backgroundColor:'#f0ddc5',paddingTop:'100px',paddingBottom:'100px'}}>
<div className=" container " >
    <div>
   <h1 style={{color:'orange'}}>We Are Reachable.</h1> 
<h3 style={{color:'skyblue'}}>Contact Availability</h3>
<p style={{color:'#7a7978'}}>We are always here to resolve your queries
Connect with us …</p>
<div style={{paddingBottom:'20px'}}>
    <i class="bi bi-whatsapp" style={{fontSize:'30px',paddingLeft:'5px',paddingRight:'15px',color:'#2e2e2d'}}></i>
<i class="bi bi-instagram" style={{fontSize:'30px',paddingRight:'15px',color:'#2e2e2d'}}></i>
<i class="bi bi-envelope" style={{fontSize:'30px',paddingRight:'15px',color:'#2e2e2d'}}></i>
<i class="bi bi-facebook" style={{fontSize:'30px',color:'#2e2e2d'}}></i>
</div>
    </div>
    <div >
    <iframe src="https://www.google.com/maps/place/Swathi+Vaibhav/@13.0936096,77.5826406,21z/data=!4m17!1m10!4m9!1m4!2m2!1d77.6192442!2d12.91188!4e1!1m3!2m2!1d77.5827652!2d13.0934813!3m5!1s0x3bae19026c46c9e7:0xc26df65dc98b42ab!8m2!3d13.0935836!4d77.5826207!16s%2Fg%2F11twh3c231?entry=ttu" width="100%" height="500px"></iframe>
    </div>
    
</div>

</div> */}

      {/* Menu Modal */}
      <MenuModal show={showMenuModal} onHide={() => setShowMenuModal(false)} />
      <Widget
        title="WhatsApp Chat"
        subtitle="Need assistance? Chat with us on WhatsApp."
        senderPlaceHolder="Type a message..."
        handleNewUserMessage={handleNewUserMessage}
      />
</div>

  )
}
export default Home ;
