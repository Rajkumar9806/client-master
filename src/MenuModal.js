

import React, { useState } from 'react';
import "./MenuModel.css"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import menu1 from "./image/menu.png";
import menu2 from "./image/menu1.png";
import menu3 from "./image/menu2.png";
import menu4 from "./image/menu3.png";
import menu5 from "./image/menu4.png";
import menu6 from "./image/menu5.png";
import menu7 from "./image/menu6.png";
import menu8 from "./image/menu7.png";
import menu9 from "./image/menu8.png";
const MenuModal = ({ show, onHide }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const nextSlide = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  const images = [menu1, menu2, menu3,menu4,menu5,menu6,menu7,menu8,menu9]; // Add your menu images here

  return (
    <Modal show={show} onHide={onHide} centered size="xl">
      <Modal.Header style={{ color: 'Green', textAlign: 'center',  }} closeButton>
        <Modal.Title style={{ color: 'orange', textAlign: 'center', width: '100%' }}>Menu</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ width: '70%', textAlign: 'center' }}>
          {images.map((image, idx) => (
            <Carousel.Item key={idx} style={{ textAlign: 'center' }}>
              <img className="d-block w-100" src={image} alt={`Menu Item ${idx + 1}`} style={{ margin: 'auto' }} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
      <Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
     
        <Button variant="success" onClick={prevSlide}>
          Previous
        </Button>
        <Button variant="success" onClick={nextSlide}>
          Next
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MenuModal;
