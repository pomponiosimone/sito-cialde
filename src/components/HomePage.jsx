import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Button } from "react-bootstrap";
import { FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import "../css/HomePage.css"
import image1 from "../assets/logo2.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image50.jpg";

const images = [image1, image2, image3, image4, image5, image6, image7];

const HomePage = () => {
  return (
    <div className="container-home">
    <h2 className="text-center mt-5">I NOSTRI MARCHI</h2>
      <ImageCarousel />
      
      <div className="text-center mt-4">
        <WhatsAppButton />
      </div>

      <div className="text-center mt-3">
        <MapsButton />
      </div>
    </div>
  );
};

const ImageCarousel = () => {
  return (
    <div className="carousel-container">
      <Carousel>
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              id="marchi"
              src={image}
              alt={`Slide ${index + 1}`}
              style={{ maxWidth: "100%", minHeight: "400px", maxHeight: "400px" }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
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
      <FaWhatsapp style={{ marginRight: "10px" }} />
      Clicca qui per acquistare i nostri prodotti!
    </Button>
  );
}

function MapsButton() {
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Via+Palombarese,+20,+00013+Fonte+Nuova,+Roma";

  const handleClick = () => {
    window.open(mapsUrl, "_blank");
  };

  return (
    <Button variant="primary" onClick={handleClick}>
      <FaMapMarkerAlt style={{ marginRight: "8px" }} />
      Ecco dove ci trovi!
    </Button>
  );
}

export default HomePage;