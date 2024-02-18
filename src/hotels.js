import React , { useState } from 'react';
import hotel from '../src/image/hotel.jpg';
import resort from '../src/image/resort.jpg';
import restro from '../src/image/restro.jpg';
import restro1 from '../src/image/retro1.jpg';


import './hotel.css';
const Hotels = () => {
   
  const containerStyle = {
    
    marginTop:'80px',
    position: 'relative',
    paddingTop: '20px',
    backgroundAttachment:'fixed'
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  };
  const cardStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    
  };
  const buttonStyle = {
    color:'#b4b1af',
    border:'1px solid #ac5f20',
    margin:'30px',
    backgroundColor:'rgba(255,255,255,0)'
  };

  return (
    <div>
    <div style={containerStyle}>
      <img src={hotel} alt="Hotel" style={imageStyle} />
      
      <div className="card" style={cardStyle}>
      <h1 className="text-center animate__animated animate__backInDown animate_delay-1s" style={{fontFamiy:'sans-serif',color:'#cda05b',fontSize:'50px',paddingTop:'30px',paddingBottom:'60px'}}>Attide Hotels</h1>
        <div className="d-sm-flex">
        <div className="card-body animate__animated animate__backInLeft animate_delay-2s" style={{backgroundColor:'rgba(0,0,0,0.4)',textAlign:'center',height:'400px',marginBottom:'20px'}}>
          <h5 className="card-title " style={{fontFamily:"sans-serif",color:'#cda05b',fontSize:'1.9em'}}>Attide</h5>
          <p className="card-text" style={{color:'#b4b1af'}}>
          We offer comfortable accommodations with all amenities and services to cater to business as well as leisure travelers available.Our rooms are designed for your comfort, equipped with modern conveniences, and provide a relaxing environment. Whether you're here for work or leisure, we strive to make your stay enjoyable.
          </p>
          <button type="button" className="btn btn-lg" style={buttonStyle}>Learn more</button>
        </div>
        <div className="card-body animate__animated animate__backInRight animate_delay-2s" style={{backgroundColor:'rgba(0,0,0,0.4)',marginLeft:'5px',textAlign:'center',height:'400px'}}>
          <h5 className="card-title" style={{fontFamily:"sans-serif",color:'#cda05b',fontSize:'1.9em'}}>Attide Biz</h5>
          <p className="card-text" style={{color:'#b4b1af'}}>
          A boutique hotel that offers efficient, well equipped stays close to Bangalore airport for business trip requirements and can also cater to leisure travelers.
          Our commitment is to provide personalized services, modern amenities, and a comfortable environment to ensure a memorable stay for our guests.
          </p>
          <button type="button" className="btn btn-lg" style={buttonStyle}  >Learn more</button>
        </div>
       
      
        </div>
      </div>
      </div>

    
        <div className='container d-md-flex' style={{backgroundColor:'white',padding:'45px'}}>
            <div>
            <h1 style={{color:'#cda05b',fontSize:'50px'}}><span style={{fontStyle:'italic'}}>Our</span> Rooms & Suites </h1>
            </div>
            <div>
                <h5 style={{paddingLeft:'120px',color:'#7a7a7a'}}>Stays that will make staying worth it. </h5>
            </div>
        </div>

        <div className="containerWithBackground">
      <div className="d-md-flex restro">
        <div className="restro1">
          <p className="text-center" style={{paddingTop:'40px'}}>
            Easy conversations with favorite drinks and choice of mouth-watering food. The satisfaction of such a scene is
            what we wish for all of our patrons to feel. So we invite you to come, relax on our comfy lounge sofas and
            enjoy your evening with our special signature drinks in hand and your favorite food on a plate.
          </p>
          <button type="button " class='btn' style={{border:'1.5px solid #cda05b',margin:'20px',marginBottom:'60px'}}>Our Menu</button>
        </div>
        <div className="restro2 " style={{color:'#bab8b8'}}>
          <h2 style={{borderBottom:'1px solid #cda05b'}}>Malvan Tadka BAR & RESTAURANT</h2>
         
          <p>
            50+ DELECTABLE SEAFOOD.
          </p>
          <p>
            100+ AUTHENTIC DISHES
          </p>
          <p style={{marginBottom:'80px'}}>
            Home to one of the best bars in town with an equally exceptional kitchen that can cook up authentic malvani
            cuisine and more that you simply cannot forget.
          </p>
        </div>
      </div>
      <img src={restro} alt="Restaurant" width="100%" className="backgroundImage" />
    </div>

  
  

        <div className="containerWithBackground">
      <div className="d-md-flex restro">
        <div className="restro2 scrn">
          <p className="text-center scrn1" style={{paddingTop:'40px',color:'#bab8b8'}}>
          The quality of food is superior, the service is efficient yet elegant and the spread is abundant with a special corner for smoked and grilled food. Add to this scene of fine dining the novelty of live music and you will have a ‘perfect time ever spent’ to mark in your memories.


          </p>
          <button type="button " class='btn' style={{border:'1.5px solid #cda05b',margin:'20px',marginBottom:'60px',color:'#bab8b8'}}>Our Menu</button>
        </div>
        <div className="restro1" >
          <h2 style={{borderBottom:'1px solid #cda05b'}}>Urban Flavours</h2>
         
          <p>
            50+ DELECTABLE SEAFOOD.
          </p>
          <p>
            100+ AUTHENTIC DISHES
          </p>
          <p style={{marginBottom:'80px'}}>
          Located in Attide Boutique Hotel in Yelahanka, Bangalore, Urban Flavours, like its name suggests, serves a variety of flavours on a plate. North Indian, Chinese, and South American dishes in all their authenticity are served here. The elaborate buffet menu covers all delicacies that fit into a foodie’s dream come true.
          </p>
        </div>
      </div>
      <img src={restro1} alt="Restaurant" width="100%" className="backgroundImage" />
    </div>

    <div className='container-fluid d-md-flex' style={{backgroundColor:'#f0ddc5',padding:'60px'}}>
            <div className="container">
            <h1 style={{color:'#cda05b',fontSize:'60px'}}><span style={{fontStyle:'italic'}}>special</span> Offers </h1>
            </div>
            <div className="container">
                <h2 style={{paddingLeft:'0px',color:'#30302e'}}>Get 20% off for Corporate Bookings </h2>
            </div>
        </div>

<div style={{borderBottom:'3px solid orange',color:'white',width:'30%',marginLeft:'20px',marginTop:'120px'}}>hiii</div>
        <div className=" container d-md-flex" style={{paddingTop:'120px',paddingBottom:'150px'}}>
           
            <div className='text-center'>
            <h1 style={{fontFamily:'cursive',fontStyle:'italic'}}>Quality Service</h1>
<p style={{color:'#a3a3a2',fontSize:'14px'}}>Quality service – Our services function true to the philosophy of hospitality: “Everything must be set for your comfort, satisfaction and memorable experience”.</p>
            </div>
            <div className='text-center'>
           <h1 style={{fontFamily:'cursive',fontStyle:'italic',color:'skyblue'}}>Best Food</h1> 
<p style={{color:'#a3a3a2',fontSize:'14px',paddingRight:'20px',paddingLeft:'20px'}}>No life experience is ever complete without food. Life experiences with us are complete and unforgettable because of the food. We’ve got a bountiful menu that can materialise scrumptious food</p>
            </div>
            <div className="text-center">
            <h1 style={{fontFamily:'cursive',fontStyle:'italic',color:'skyblue'}}>Luxury Rooms</h1>
<p style={{color:'#a3a3a2',fontSize:'14px'}}>Combine comfortable luxury with the serenity of nature and you will get a picture of what our stays look like. An experience of blissful rest, relaxation, and revival is guaranteed to be achieved</p>
            </div>
        </div>
        <div style={{borderBottom:'3px solid orange',color:'white',width:'20%',marginLeft:'76%',marginBottom:'160px'}}>hiii</div>
     
<div style={{backgroundColor:'#f0ddc5',paddingTop:'100px',paddingBottom:'100px'}}>
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
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d248723.84321479828!2d77.592507!3d13.079526!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae183ec58b854b%3A0x958fe75bff0c6d8e!2sAttide%20Boutique%20Hotel!5e0!3m2!1sen!2sus!4v1703916550604!5m2!1sen!2sus" width="100%" height="500px"></iframe>
    </div>
    
</div>

</div>






        <div>  
<img src={resort} width="100%" hei></img>
     </div>



    </div>
  );
};

export default Hotels;
