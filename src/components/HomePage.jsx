import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";


import image1 from "../assets/image22.webp";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";


const images = [image1, image2, image3, image4, image5, image6];


const HomePage = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">I NOSTRI MARCHI</h2>
      <ImageCarousel />
    
      <div className="text-center mt-4">
        <WhatsAppButton />
      </div>
    </div>
  );
};


const ImageCarousel = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 img-fluid"
            src={image}
            alt={`Slide ${index + 1}`}
            style={{ maxHeight: "400px", maxWidth: "100%" }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};


function WhatsAppButton() {
  const phoneNumber = "3487896977"; 
  const message = encodeURIComponent("Salve! Vorrei acquistare delle cialde."); 
  
  const handleClick = () => {
   
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <Button variant="success" onClick={handleClick}>
      <FaWhatsapp style={{ marginRight: "8px" }} />
      Clicca qui per acquistare le cialde
    </Button>
  );
}

export default HomePage;