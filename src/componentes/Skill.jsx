import './Skill.css';
import { motion } from "framer-motion";
import ImgSkill from './ImgSkill';


const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 2,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

const Skill = () => {
    
    return (
      <motion.div
        className="Skill"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="container1"
          variants={container}
          initial="hidden"
          animate="visible"
        >
            <div className='container2'>
          {ImgSkill.map((skill) => (
            <motion.li className="item" variants={item} key={skill.id}>
              <h2 className="TituSkill">{skill.titu}</h2>
              <img className="ImgSkill" src={skill.img} alt={skill.titu} />
            </motion.li>
          ))}
          </div>
        </motion.div>
      </motion.div>
    );
};

export default Skill;