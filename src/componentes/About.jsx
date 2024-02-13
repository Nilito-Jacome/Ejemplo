import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="About"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="texto">
        <h1 className="Sobre">Sobre mi</h1>
        <div className="text1">
          Soy Nilo Jácome, Desarrollador Web Full Stack e Ingeniero Eléctrico de
          la Universidad Politécnica Salesiana, en el Ecuador.
        </div>
        <div className="text2">
          Experiencia obtenida como analista técnico y de datos en la Empresa
          Eléctrica Quito es:
          <li className="listaAbout">Seguimiento de instrucciones,</li>
          <li className="listaAbout">Resolución de problemas bajo presión,</li>
          <li className="listaAbout">Manejo de información confidencial.</li>
        </div>
        <div className="text3">
          Experiencia como contratista constructor independiente para empresa
          pública es:
          <li className="listaAbout">Manejo de personal técnico y administrativo,</li>
          <li className="listaAbout">Dirección, planificación y ejecución de proyectos.</li>
        </div>
        <div className="text4">
          Experiencia como desarrollador Web Full Stack es:
          <li className="listaAbout">Aplicaciones de react js,</li>
          <li className="listaAbout">Aplicaciones de node js,</li>
          <li className="listaAbout">Aplicaciones de javascript.</li>
        </div>
        <div className="text5">
          Estoy en constante preparación y actualización de mis conocimiento y
          habilidades. Considero que soy una persona creativa e investigativa,
          doy siempre el máximo esfuerzo y dedicación al trabajo, tengo la
          disponibilidad de ayudarte de forma inmediata.
        </div>
      </div>
    </motion.div>
  );
};

export default About;
