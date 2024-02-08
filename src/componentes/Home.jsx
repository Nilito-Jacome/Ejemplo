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
        <h1 className="Titu_About1">Sobre Mi</h1>
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
      >
        <h1 className="TitRed">Mis Redes Sociales</h1>
        <div className="Redes">
          <a
            href="./icon/Nilo_cv.pdf"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.img
              className="ImgRed1"
              src="./icon/cv.png"
              alt=""
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 180, 180, 360],
                borderRadius: ["0%", "25%", "50%", "100%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.8, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </a>

          <a
            href="mailto:destinatario@hubspot.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.img
              className="ImgRed2"
              src="./icon/gmail.png"
              alt=""
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 180, 180, 720],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </a>

          <a
            href="https://linkedin.com/in/nilo-jácome-riera"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.img
              className="ImgRed3"
              src="./icon/linkedin.png"
              alt=""
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 180, 180, 90, 360],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </a>

          <a
            href="https://api.whatsapp.com/send?phone=59397844272"
            target="_blank"
            rel="noreferrer noopener"
          >
            <motion.img
              className="ImgRed4"
              src="./icon/whatsapp.png"
              alt=""
              animate={{
                scale: [1, 1.5, 1.5, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </a>
        </div>
      </motion.a>
    </motion.div>
  );
}}}};

export default Home;
