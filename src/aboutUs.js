import React from 'react';
import about from '../src/image/about.jpg';
import './aboutUs.css'; 
import about1 from '../src/image/food1.png';

const AboutUs = () => {
  return (
  <div>
<div className="animate__animated animate__fadeInDown">
    <h1 style={{marginTop:'150px',marginBottom:'100px',textAlign:'center',color:'#e88420'}}>ABOUT US</h1>
</div>

    <div className="d-md-flex container" style={{alignItems:'center',justifyContent:'center',marginBottom:'100px'}}>
      <div className="about1  animate__animated animate__backInUp">
        <h3 style={{color:'#eeee',textAlign:'center'}}>Our Story</h3>
        <p className="text-center" style={{paddingTop:'40px',color:'#bab8b8'}}>
        {/* Our team has now grown into 6 directors, each heading their own department in the company. Swathi Group employs around 1000 people with a high rate of diversity in the company. Swathi group is currently one of the largest hospitality company in Bangalore and that is because we continue to strive to offer only the highest quality products and services to our customers. */}
        {/* Our story at Swathi Vaibhav Multicuisine Restaurant - Pure Veg is one of passion, innovation, and a commitment to vegetarian excellence. Located in the heart of Yelahanka New Town, Bangalore, our journey began with a vision to redefine vegetarian dining, offering a diverse menu crafted with the freshest ingredients and expert culinary skills. From our humble beginnings, we've grown into a beloved gathering place, where families come together and special occasions are celebrated in our elegant banquet halls, Sindhoora and Shringara. With each dish we serve and every event we host, we strive to exceed expectations, delivering an unforgettable experience that celebrates the joy of vegetarian cuisine and the warmth of hospitality. Join us at Swathi Vaibhav, where every visit is a journey of flavor, connection, and celebration. */}
        Discover the passion and innovation behind Swathi Vaibhav Multicuisine Restaurant - Pure Veg. Located in Yelahanka New Town, Bangalore, our journey began with a vision to redefine vegetarian dining. From our humble beginnings, we've become a beloved gathering place, offering a diverse menu and elegant banquet halls, Sindhoora and Shringara. Join us for an unforgettable experience celebrating the joy of vegetarian cuisine and warm hospitality
        </p>

      </div>
      <div className="about2 animate__animated animate__backInUp" >
      <img src={about} alt="Restaurant" width="100%" className="backgroundImage" />
      </div>
    </div>
    <p style={{color:'white',borderBottom:'2px solid #f5ad4e',width:'70%'}}></p>
    <div className="d-md-flex container" style={{alignItems:'center',justifyContent:'center',marginTop:'100px',marginBottom:'50px'}}>
    <div className="about2 animate__animated animate__backInUp animate__delay-2s" >
      <img src={about1} alt="Restaurant" width="100%" className="backgroundImage" />
      </div>
      
      <div className="about1  animate__animated animate__backInUp animate__delay-2s">
        <h3 style={{color:'#eeee',textAlign:'center'}}>Our Mission</h3>
        <p className="text-center" style={{paddingTop:'40px',color:'#bab8b8'}}>
        {/* Their mission was to create a Hospitality company which would cater to people from all segments of the society while providing them with a high-quality experience and value.They began with a simple idea: to start a Andhra Themed restaurant in the heart of banglore. Now, Swathi Group has totally 6 different brands that cater to different segments, spanning from Attide Boutique Hotel that serves to corporates and The Bunker that serves to the energetic youngsters of North Bangalore */}
        At Swathi Vaibhav Multicuisine Restaurant - Pure Veg, our mission is to delight our guests with a diverse range of delectable pure vegetarian cuisine while providing exceptional service in a welcoming environment. We aim to create unforgettable dining experiences, cater to special occasions with elegance and warmth, and ensure every interaction leaves a lasting impression of satisfaction and joy. </p>

      </div>
     
    </div>
    
    </div>

  );
};

export default AboutUs;
