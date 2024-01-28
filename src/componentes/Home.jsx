import './Home.css';
import { motion } from "framer-motion"

const Home = () => {

  return (

    <div className="Home">
      <motion.div className="Box_1">hola desde about</motion.div>
      <div className="Box_2">hola desde habilidades</div>
      <div className="Box_3">hola desde proyectos</div>
      <div className="Box_4">hola desde certificados</div>
      <div className="Box_5">hola desde formulario</div>
      <div className="Box_6">hola desde redes</div>
    </div>
  );
};

export default Home;
