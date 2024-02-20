import './Certificates.css';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ImgCertificates from './ImgCertificates';


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 800 : -800,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 800 : -800,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 100;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
const Certificates = () => {

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, ImgCertificates.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (

    <div className='Certificates'>
      <h1 className='TituCerti'>Certificaciones</h1>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className='ImgCert'
          key={page}
          src={ImgCertificates[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 30, damping: 3 },
            opacity: { duration: 0.5 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </div>
  );
};

export default Certificates;