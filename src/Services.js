import React,{useState} from 'react';
import 'animate.css';
import './Services.css'; 
import { Card, Row, Col,Button  } from 'react-bootstrap';
import banquetHallsImage from '../src/image/hotel5.png'; 
import fineDineImage from '../src/image/hotel8.png'; 
import cateringService from './image/hotel6.png';
import cateringService2 from './image/hotel7.png';
import cateringService1 from './image/hotel10.png';
// import { Widget } from 'react-chat-widget';
// import 'react-chat-widget/lib/styles.css';
const Services = () => {
    // const [widgetMessage, setWidgetMessage] = useState('');

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

    //   const handleNewUserMessage = (newMessage) => {
    //     setWidgetMessage(newMessage); // Store the new message in state
    //     // Handle the new message as needed
    //     // For example, you can call handleWhatsAppClick with the new message
    //     handleWhatsAppClick(newMessage);
    //   };
    
  return (
    <div className="container" style={{ marginTop: '80px' }}>
      {/* Header with animation */}
      <div className="services-header animate__animated animate__fadeInDown text-center" style={{ color: 'rgb(232, 132, 32)' }}>
        <h1>Welcome to Swathi Vaibhav Multicuisine Restaurant - Pure Veg</h1>
      </div>
      
      {/* Section: Introduction */}
      <Row className="mb-4 text-center">
        <Col sm={6} className="animate__animated animate__fadeInLeft">
          <Card style={{ backgroundColor: 'hwb(110 2% 60% / 0.902)' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Introduction</Card.Title>
              <Card.Text style={{ color: 'rgb(186, 184, 184)' }}>
                Welcome to Swathi Vaibhav Pure Veg Restaurant, located conveniently in Yelahanka New Town, Bangalore. Our newly inaugurated restaurant offers a diverse culinary experience in a welcoming atmosphere. Whether you prefer self-service or air-conditioned seating, we ensure your comfort during your dining experience. We take pride in offering two elegant banquet halls, Sindhoora and Shringara, perfect for hosting special occasions. In addition, our catering services are available to make your events memorable. For those who prefer dining at home, we offer convenient home delivery services.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className="animate__animated animate__fadeInRight">
          <img src={banquetHallsImage} alt="Banquet Halls" className="img-fluid" />
        </Col>
      </Row>
      <p style={{color:'white',borderBottom:'2px solid #f5ad4e',width:'70%'}}></p>
      {/* Section: Fine Dine Multicuisine */}
      <Row className="mb-4 text-center align-items-center">
        <Col sm={6} className="animate__animated animate__fadeInLeft">
          <img src={fineDineImage} alt="Fine Dine Multicuisine" className="img-fluid" />
        </Col>
        <Col sm={6} className="animate__animated animate__fadeInRight">
          <Card style={{ backgroundColor: 'hwb(110 2% 60% / 0.902)' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Fine Dine Multicuisine</Card.Title>
              <Card.Text style={{ color: 'rgb(186, 184, 184)' }}>
                Fine Dine Multicuisine is our service hall committed to ensuring you enjoy an exceptional dining experience. Our air-conditioned hall provides a comfortable and inviting ambiance for you to savor your food. With the ability to host over 100 guests simultaneously, Fine Dine is the ideal place to relish our exquisite pure vegetarian cuisine.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <p style={{color:'white',borderBottom:'2px solid #f5ad4e',width:'70%'}}></p>
      {/* Section: Catering Services */}
      <Row className="mb-4 text-center">
        <Col sm={6} className="animate__animated animate__fadeInLeft">
          <Card style={{ backgroundColor: 'hwb(110 2% 60% / 0.902)' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Catering Services</Card.Title>
              <Card.Text style={{ color: 'rgb(186, 184, 184)' }}>
                We specialize in catering for a wide range of events, from weddings, receptions, engagement parties, birthdays to corporate events. Our delicious vegetarian dishes and friendly service will bring joy to your gatherings, whether they are large or intimate. We ensure that every occasion becomes a memorable one.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className="animate__animated animate__fadeInRight">
          <img src={cateringService2} alt="Catering Service" className="img-fluid" />
        </Col>
      </Row>
      <p style={{color:'white',borderBottom:'2px solid #f5ad4e',width:'70%'}}></p>
      {/* Additional Cards */}
      <Row className="mb-4 text-center">
      <Col sm={6} className="animate__animated animate__fadeInRight">
          <img src={cateringService1} alt="Sindhoora Banquet Hall" className="img-fluid" />
        </Col>
        <Col sm={6} className="animate__animated animate__fadeInLeft">
          <Card style={{ backgroundColor: 'hwb(110 2% 60% / 0.902)' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Sindhoora Banquet Hall</Card.Title>
              <Card.Text style={{ color: 'rgb(186, 184, 184)' }}>
                Sindhoora Banquet Hall is the ideal venue where your events are transformed into unforgettable memories. We offer both AC and non-AC Halls, ensuring your comfort in any occasion. With a spacious capacity to accommodate over 500 guests, we provide the perfect setting for your special occasions. Our ambiance exudes delightful charm, creating a photographer's paradise. Indulge in a culinary journey with our delectable pure vegetarian cuisine. Our halls are fully furnished, guaranteeing a luxurious experience for your celebrations. We prioritize accessibility with lift services and parking, making your celebrations truly exceptional at Sindhoora Banquet Hall.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
       
      </Row>
      <p style={{color:'white',borderBottom:'2px solid #f5ad4e',width:'70%'}}></p>
      <Row className="mb-4 text-center">
        
        <Col sm={6} className="animate__animated animate__fadeInRight">
          <Card style={{ backgroundColor: 'hwb(110 2% 60% / 0.902)' }}>
            <Card.Body>
              <Card.Title style={{ color: 'white' }}>Shringara Banquet Hall</Card.Title>
              <Card.Text style={{ color: 'rgb(186, 184, 184)' }}>
                Shringara Banquet Hall is the ideal venue where your events are transformed into unforgettable memories. We offer both AC and non-AC Halls, ensuring your comfort in any occasion. With a spacious capacity to accommodate over 500 guests, we provide the perfect setting for your special occasions. Our ambiance exudes delightful charm, creating a photographer's paradise. Indulge in a culinary journey with our delectable pure vegetarian cuisine. Our halls are fully furnished, guaranteeing a luxurious experience for your celebrations. We prioritize accessibility with lift services and parking, making your celebrations truly exceptional at Shringara Banquet Hall.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={6} className="animate__animated animate__fadeInLeft">
          <img src={cateringService} alt="Catering Service" className="img-fluid" />
        </Col>
      </Row>
      <p style={{color:'white',borderBottom:'2px solid #f5ad4e',width:'70%'}}></p>
      {/* Section: Contact Information */}
      {/* <Row className="text-center">
        <Col className="animate__animated animate__fadeInUp">
          <Card style={{ backgroundColor: 'hwb(110 2% 60% / 0.902)' }}>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                For inquiries and bookings, please contact us at:<br />
                Phone: 9008033383 and 9008033384<br />
                Online Ordering: Find us on Swiggy and Zomato for easy online ordering and Home Delivery.<br />
                Home Delivery: 9008033383 and 9008033384
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row> */}
        {/* Book now and Home Delivery Buttons */}
        <div>
       
        <div className=" party d-flex justify-content-center mt-4">
          <div>
            <Button onClick={handleBookNowClick} variant="success" style={{ border: "2px solid green", borderRadius: '5px', padding: '10px', marginRight: '30px' }}>BOOK NOW <i class="bi bi-arrow-right"></i></Button>
          </div>
          <div>
            <Button onClick={handleContactUsClick} variant="success" style={{ border: '2px solid green', borderRadius: '5px', padding: '10px' }}>CONTACT US <i class="bi bi-arrow-right"></i></Button>
          </div>
        </div>
      </div>
     {/* WhatsApp Widget */}
     {/* <Widget
        title="WhatsApp Chat"
        subtitle="Need assistance? Chat with us on WhatsApp."
        senderPlaceHolder="Type a message..."
        handleNewUserMessage={handleNewUserMessage}
      /> */}
    </div>
  );
}

export default Services;
