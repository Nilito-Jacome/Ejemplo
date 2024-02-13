import './Carousel.css';
import { useState, useEffect } from "react";
import ImgCertificates from "./ImgCertificates";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Cambiar la imagen automáticamente cada 3 segundos
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ImgCertificates.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="Certificado">
      <img className="Cert"
        src={ImgCertificates[currentIndex]}
        alt="Certificado"
      />
    </div>
  );
};

export default Carousel;