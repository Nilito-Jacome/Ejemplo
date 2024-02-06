import './Skill.css';
import { motion } from "framer-motion";

const Skill = () => {
    
    return (
        <motion.div 
        className='Skill'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        >
            hola desde habilidades
        </motion.div>
    );
};

export default Skill;