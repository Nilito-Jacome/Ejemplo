import './Home.css';
import { useRef } from "react";
import { motion, useAnimationFrame } from 'framer-motion';
import Carousel from './Carousel';


const Home = () => {{{{

  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <motion.div
      className="Home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.a
        className="Box_1"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/about"
      >
        <h1 className="Titu_About1">SOBRE MI</h1>
        <h1 className="Titu_About">DEVELOPER WEB FULL-STACK</h1>
      </motion.a>

      <motion.a
        className="Box_2"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/skill"
      >
        <div className="Tecnologia">
          <h1>Tecnologías</h1>
        </div>
        <div className="container">
          <div className="cube" ref={ref}>
            <div className="side front">
              <img
                className="ImgTech"
                src="./tecnologias/javascript.png"
                alt=""
              />
            </div>
            <div className="side left">
              <img className="ImgTech" src="./tecnologias/html.png" alt="" />
            </div>
            <div className="side right">
              <img className="ImgTech" src="./tecnologias/css.png" alt="" />
            </div>
            <div className="side top">
              <img className="ImgTech" src="./tecnologias/react.png" alt="" />
            </div>
            <div className="side bottom">
              <img className="ImgTech" src="./tecnologias/node.png" alt="" />
            </div>
            <div className="side back">
              <img className="ImgTech" src="./tecnologias/github2.png" alt="" />
            </div>
          </div>
        </div>
      </motion.a>

      <motion.a
        className="Box_3"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/projects"
      >
        {" "}
        hola desde proyectos
      </motion.a>

      <motion.a
        className="Box_4"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/certificates"
      >
        <Carousel />
        <h1 className="TitCert">Certificados</h1>
      </motion.a>

      <motion.a
        className="Box_5"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/contact"
      >
        <h1 className="TitForm">Escríbeme</h1>
        <img className="ImgForm" src="./escribir.gif" alt="" />
      </motion.a>

      <motion.a
        className="Box_6"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/network"
      >
        <h1 className="TitRed">Mis Redes Sociales</h1>
        <div className="Redes">
          <img className="ImgRed1" src="./icon/cv.png" alt="" />
          <img className="ImgRed2" src="./icon/gmail.png" alt="" />
          <img className="ImgRed3" src="./icon/linkedin.png" alt="" />
          <img className="ImgRed4" src="./icon/whatsapp.png" alt="" />
        </div>
      </motion.a>
    </motion.div>
  );
}}}};

export default Home;
