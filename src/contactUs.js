import React from 'react';

const ContactUs = () => {
  return (
    <div className="footer" style={{ backgroundColor: 'black', paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="container" style={{ color: '#c7c5c5', textAlign: 'center' }}>
        <h4>Contact Us</h4>
        <div className="row">
          <div className="col-md-12">
            <h6>Swathi Vaibhav Multicuisine Restaurant - Pure Veg</h6>
            <h6>Address: 300-283, 15th A Cross Rd, Yelahanka Satellite Town, Yelahanka New Town, Bengaluru, Karnataka 560064</h6>
            <h6>Phone: +91 9008033383, +91 9008033384</h6>
            <h6>Email: <a href="mailto:swathi.vaibhav@gmail.com">swathi.vaibhav@gmail.com</a></h6>
            <h6><a href="https://www.google.com/maps/place/Swathi+Vaibhav/@13.0936096,77.5826406,21z/data=!4m17!1m10!4m9!1m4!2m2!1d77.6192442!2d12.91188!4e1!1m3!2m2!1d77.5827652!2d13.0934813!3m5!1s0x3bae19026c46c9e7:0xc26df65dc98b42ab!8m2!3d13.0935836!4d77.5826207!16s%2Fg%2F11twh3c231?entry=ttu" target="_blank" rel="noopener noreferrer">View on Google Maps</a></h6>

            {/* Add your website and social media links here if applicable */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
