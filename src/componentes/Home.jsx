import './Home.css';
import { useRef } from "react";
import { motion, useAnimationFrame } from 'framer-motion';


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
        {" "}
        hola desde sobre mi
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
              <img className='ImgTech' src="./tecnologias/javascript.png" alt="" />
            </div>
            <div className="side left">
              <img className='ImgTech' src="./tecnologias/html.png" alt="" />
            </div>
            <div className="side right">
              <img className='ImgTech' src="./tecnologias/css.png" alt="" />
            </div>
            <div className="side top">
              <img className='ImgTech' src="./tecnologias/react.png" alt="" />
            </div>
            <div className="side bottom">
              <img className='ImgTech' src="./tecnologias/node.png" alt="" />
            </div>
            <div className="side back">
              <img className='ImgTech' src="./tecnologias/github2.png" alt="" />
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
        {" "}
        hola desde certificados
      </motion.a>

      <motion.a
        className="Box_5"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/contact"
      >
        {" "}
        hola desde formulario
      </motion.a>

      <motion.a
        className="Box_6"
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
        href="#/network"
      >
        {" "}
        hola desde redes
      </motion.a>
    </motion.div>
  );
}}}};

export default Home;
